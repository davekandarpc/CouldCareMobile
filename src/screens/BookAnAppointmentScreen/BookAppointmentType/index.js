import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ActivityIndicator, Text } from 'react-native';
import { Header, FormButton, RadioButton } from '../../../components';
import { Spacing, Colors } from '../../../styles';
import { styles } from './styles.js'
import { TENANT_ID, BACK_END_URL_CONTEXT_PATH } from '../../../config/settings';
import { getRequest } from '../../../common/fetchRequest';
import { logout } from '../../../utils/services'
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookAppointmentType = ({ navigation, route }) => {
    const [state, setState] = useState({
        doctorType: null,
        appointmentTypes: [],
        selectedValue: null
    })
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAppointmentTypes()
    }, [])
    const getAppointmentTypes = async () => {
        setLoading(true);
        const URL = `serviceProvider/appointmentTypes?tenant=${TENANT_ID}`;
        const response = await getRequest(URL, true);
        setLoading(false);
        if(response.ok) {
            const data = await response.json();
            if (data) {
                updateState('appointmentTypes', data)
            }
        } else if(response.status === 401) {
            logout(navigation);
        }
    }

    const updateState = (field, value) => {
        console.log(route)
        setState(previous => ({ ...previous, [field]: value }));
    };
    const handleChange = (value) => {
        updateState('selectedValue', value)
    }
    const goBack = () => {
        navigation.goBack()
    }
    const goToBookAppointmentVisitType = () => {
        navigation.navigate('BookAppointmentVisitType', { selectedDoctor: route.params.selectedDoctor, appointmentType: state.selectedValue })
    }
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <Header
                TitleName='Book Appointment'
                renderSubTitle={() => {
                    return (
                        <Text style={styles.subTitleText}>{route.params.selectedDoctor.firstName} {route.params.selectedDoctor.lastName}</Text>
                    )
                }}
                goBack={goBack}
            />
            <View style={styles.mainContainer}>
                <Text style={styles.selectDoctorText}>Select Appointment Type</Text>
                {
                    !loading ?
                        <View style={styles.selectDoctor}>
                            {state.appointmentTypes.map((item, index) => {
                                return (
                                    <RadioButton
                                        key={'type: ' + index}
                                        label={item}
                                        value={state.selectedValue}
                                        checked={state.selectedValue === item}
                                        onPress={() => handleChange(item)}
                                    />
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
                onPress={goToBookAppointmentVisitType}
                propsButtonStyle={{ backgroundColor: Colors.PRIMARY, width: '50%', alignSelf: 'center', marginBottom: Spacing.SCALE_8 }}
                mode="contained"
                disabled={state.selectedValue === null}
            />
        </SafeAreaView>
    )
}

export default BookAppointmentType