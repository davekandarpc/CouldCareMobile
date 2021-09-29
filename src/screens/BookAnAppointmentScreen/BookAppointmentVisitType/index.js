import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Header, FormButton, RadioButton } from '../../../components';
import { Colors } from '../../../styles';
import { styles } from './styles.js'


const BookAppointmentVisitType = ({ navigation, route }) => {
    const [state, setState] = useState({
        visitType: null,
        radioButtonArrayVisitType: [
            { label: 'Virtual' },
            { label: 'Clinic 3342' },
            { label: 'Clinic 432' },
            { label: 'Any' }
        ],
        selectedValue: null
    })
    const updateState = (field, value) => {
        setState(previous => ({ ...previous, [field]: value }));
    };
    const handleChange = (value) => {
        updateState('selectedValue', value)
    }

    const goBack = () => {
        navigation.goBack()
    }

    const goToCalendarScreen = () => {
        navigation.navigate('CalendarScreen', {selectedDoctor: route.params.selectedDoctor, appointmentType: route.params.appointmentType, visitType: state.selectedValue })
    }

    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <Header
                TitleName='Book Appointment'
                renderSubTitle={() => {
                    return (
                        <View style={styles.subTitleView}>
                            <Text style={styles.subTitleText}>{route.params.selectedDoctor.firstName} {route.params.selectedDoctor.lastName}</Text>
                            <Text style={[styles.subTitleText, {color: Colors.FONT_COLOR}]}> &gt; </Text>
                            <Text style={styles.subTitleText}>{route.params.appointmentType}</Text>
                        </View>
                    )
                }}
                goBack={goBack}
            />
            <View style={styles.mainContainer}>
                <Text style={styles.selectDoctorText}>Select Visitation Type</Text>
                <View style={styles.selectDoctor}>
                    {state.radioButtonArrayVisitType.map((item, index) => {
                        return (
                            <RadioButton
                                key={"type" + index}
                                label={item.label}
                                value={state.selectedValue}
                                checked={state.selectedValue === item.label}
                                onPress={() => handleChange(item.label)}
                            />
                        )
                    })}
                </View>
            </View>
            <FormButton
                label="Next"
                propsButtonStyle={styles.nextButton}
                rightButtonLabelStyle={styles.nextButtonText}
                mode="contained"
                onPress={goToCalendarScreen}
            />
        </SafeAreaView>
    )
}

export default BookAppointmentVisitType