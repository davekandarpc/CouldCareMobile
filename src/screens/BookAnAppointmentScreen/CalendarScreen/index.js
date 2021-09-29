import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { Header, FormButton } from '../../../components';
import { Colors, CommonStyles } from '../../../styles';
import { styles } from './styles.js'
import { CalendarList } from 'react-native-calendars';
import { showMessage } from 'react-native-flash-message';
import { TENANT_ID, BACK_END_URL_CONTEXT_PATH } from '../../../config/settings';
import { logout } from '../../../utils/services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { getRequest, postRequest } from '../../../common/fetchRequest';
const BookAppointmentVisitType = ({ navigation, route }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [markedDates, setMarkedDates] = useState({});
    const [availableTimesolts, setAvailableTimesolts] = useState([])
    const [loading, setLoading] = useState(false);
    const goBack = () => {
        navigation.goBack();
    }
    const onSelectSlot = (item) => {
        // showMessage({
        //     message: `Your appointment is book on ${selectedDate}, ${item}`,
        //     type: 'success'
        // });
        // navigation.navigate('MenuScreen')
    }
    const onDateSelect = async (selectedDate) => {
        let markedDates = {
            [selectedDate]: { selected: true, selectedColor: Colors.PRIMARY },
        }
        setMarkedDates(markedDates)
        setSelectedDate(selectedDate);
        getAvailableSlots(selectedDate)
    }
    const getAvailableSlots = async (selectedDate) => {
        setLoading(true);
        let sysUserId = route.params.selectedDoctor.sysUserId;
        const URL = `serviceProvider/${sysUserId}/slots?tenant=${TENANT_ID}&date=${selectedDate}`
        const response = await getRequest(URL, true);
        setLoading(false);
        if (response.ok) {
            const data = await response.json();
            if (data) {
                setAvailableTimesolts(data);
            }
        } else if (response.status === 401) {
            logout(navigation)
        }
    }

    const bookAppointment = async (item) => {
        setLoading(true);
        let serviceProviderId = route.params.selectedDoctor.serviceProviderId;
        var userId = await AsyncStorage.getItem('userId');
        const URL = `appointment?tenant=${TENANT_ID}`;
        const body = JSON.stringify({
            "actualEndTime": item.slotStartTime,
            "actualStartTime": item.slotEndTime,
            "appointmentStatus": "REQUESTED",
            "appointmentType": route.params.appointmentType,
            "availabilitySlotIds": [
                item.serviceProviderAvailabilitySlotId
            ],
            "patientId": userId,
            "serviceProviderId": serviceProviderId
        })
        const response = await postRequest(URL, body, true);
        setLoading(false);
        if(response.ok) {
            const data = await response.text();
            if (data) {
                showMessage({
                    message: data,
                    type: 'success'
                });
                navigation.navigate('MenuScreen')
            }
        } else if(response.status === 401) {
            logout(navigation);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <Header
                TitleName='Book Appointment'
                renderSubTitle={() => {
                    return (
                        <View style={styles.subTitleView}>
                            <Text style={styles.subTitleText}>{route.params.selectedDoctor.firstName} {route.params.selectedDoctor.lastName}</Text>
                            <Text style={[styles.subTitleText, { color: Colors.FONT_COLOR }]}> &gt; </Text>
                            <Text style={styles.subTitleText}>{route.params.appointmentType}</Text>
                            <Text style={[styles.subTitleText, { color: Colors.FONT_COLOR }]}> &gt; </Text>
                            <Text style={styles.subTitleText}>{route.params.visitType}</Text>
                        </View>
                    )
                }}
                goBack={goBack}
            />
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={styles.selectDoctorText}>SELECT DATE</Text>
                    <CalendarList
                        // Collection of dates that have to be colored in a special way. Default = {}
                        markedDates={markedDates}
                        minDate={new Date()}
                        onDayPress={(day) => { onDateSelect(day.dateString) }}
                        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                        markingType={'simple'}
                        pastScrollRange={0}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={50}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                        horizontal={true}
                    />
                    {
                        selectedDate !== null ?
                            <View style={styles.timeSlotContainer}>
                                <Text style={styles.selectedDate}>{selectedDate}</Text>
                                <View style={styles.timeSlots}>
                                    {
                                        availableTimesolts.length !== 0 ?
                                            availableTimesolts.map((item, index) => {
                                                return (
                                                    <FormButton
                                                        onPress={() => bookAppointment(item)}
                                                        label={item.slotStartTime.substring(11, 16)}
                                                        propsButtonStyle={styles.timeSlotButton}
                                                        rightButtonLabelStyle={styles.nextButtonText}
                                                        mode='contained'
                                                    />
                                                )
                                            })
                                            :
                                            !loading ?
                                                <Text style={styles.noAvailabilityText}>Sorry! Doctor is not available on this date</Text>
                                                :
                                                null
                                    }
                                </View>
                            </View>
                            :
                            null
                    }
                </View>
            </ScrollView>
            <Spinner
                visible={loading}
                textContent={'Please wait...'}
                textStyle={CommonStyles.spinnerTextStyle}
            />
        </SafeAreaView>
    )
}

export default BookAppointmentVisitType