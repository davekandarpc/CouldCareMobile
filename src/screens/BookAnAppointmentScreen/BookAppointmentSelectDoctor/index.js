import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Header, FormButton } from '../../../components';
import { Spacing, Typography, Colors } from '../../../styles';
import { styles } from './styles.js';
import { TENANT_ID, BACK_END_URL_CONTEXT_PATH } from '../../../config/settings';
import { logout } from '../../../utils/services'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRequest } from '../../../common/fetchRequest';

const BookAppointmentSelectDoctor = ({ navigation }) => {
    const [state, setState] = useState({
        doctor: '',
        doctorList: [],
        selectedDoctor: null
    })
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDoctorsList()
    }, [])

    const getDoctorsList = async () => {
        setLoading(true);
        const URL = `serviceProvider/all?tenant=${TENANT_ID}`;
        const response = await getRequest(URL, true);
        setLoading(false);
        if(response.ok) {
            const data = await response.json();
            if (data) {
                updateState('doctorList', data)
            }
        } else if(response.status === 401) {
            logout(navigation);
        }
    }

    const updateState = (field, value) => {
        setState(previous => ({ ...previous, [field]: value }));
    };
    const goBack = () => {
        navigation.goBack()
    }
    const goToBookAppointmentType = () => {
        navigation.navigate('BookAppointmentType',
            { selectedDoctor: state.selectedDoctor })
    }

    return (

        <SafeAreaView style={styles.safeAreaStyle}>
            <Header TitleName='Book Appointment' goBack={goBack} />
            <View style={styles.mainContainer}>
                <View style={styles.doctorListDropdown}>
                    <Text style={styles.dropdownTitle}>Patient</Text>
                    <View style={styles.dropdownWidth}>
                        {/* <SearchableDropDown
                            Data={doctorList}
                            TitleText={'DoctorList'}
                            onItemSelect={item => closeDoctor(item.name)}
                            buttonPlaceholder="DoctorList"
                            BtnText={state.doctor}
                        /> */}
                    </View>
                </View>
                <Text style={styles.selectDoctorText}>Select Doctor</Text>
                {
                    !loading ?
                        <View style={styles.selectDoctor}>
                            {state.doctorList.map((item, index) => {
                                return (
                                    <TouchableOpacity style={styles.radioButton} onPress={() => updateState('selectedDoctor', item)}>
                                        <View style={styles.outerCircle}>
                                            {
                                                state.selectedDoctor !== null ?
                                                    state.selectedDoctor.serviceProviderId === item.serviceProviderId ? (
                                                        <View style={styles.innerCircle} />
                                                    )
                                                        : null
                                                    : null
                                            }
                                        </View>
                                        <View>
                                            <Text style={styles.radioLabel}>{item.firstName} {item.lastName}</Text>
                                            {/* <Text style={styles.radioSubText}>{item.doctorType}</Text> */}
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        :
                        <View style={styles.loader}>
                            <ActivityIndicator color={Colors.PRIMARY} size={30} />
                        </View>
                }
            </View>
            <FormButton
                label="Next"
                onPress={goToBookAppointmentType}
                propsButtonStyle={{ backgroundColor: Colors.PRIMARY, width: '50%', alignSelf: 'center', marginBottom: Spacing.SCALE_8 }}
                mode="contained"
                disabled={state.selectedDoctor === null}
            />
        </SafeAreaView>
    )
}

export default BookAppointmentSelectDoctor