import React, { useState, useEffect } from 'react';
import { styles } from './styles.js'
import { TouchableOpacity, View, Text } from 'react-native'
import { Colors, Spacing, Typography } from '../../styles'
import { DatePickerModal } from 'react-native-paper-dates';
import I18n from "../../utils/i18n";
import AntDesign from 'react-native-vector-icons/AntDesign'
export const DatePickerComponent = ({ datePickerValue, onSelectDate, clearValue, placeHolder, validRange }) => {
    const [date, setDate] = React.useState();
    const [open, setOpen] = React.useState(false);
    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            let formattedDate = GetFormattedDate(params.date);
            onSelectDate(formattedDate);
        },
        [setOpen, setDate]
    );

    const GetFormattedDate = (selectedDate) => {
        var date = selectedDate;
        let day = ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
        let month = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)));
        let year = date.getFullYear()
        let dateFormatted = year + '-' + month + '-' + day
        return dateFormatted
    }

    return (
        <View style={styles.dobMainView}>
            <Text style={styles.dateOfBirthLabel}>{placeHolder ? placeHolder : I18n.t("DOB_name_textInput_label_text_patient_LoginInfo")}</Text>
            <View style={styles.dateOfBirthButton}>
                <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={[styles.pickerText, datePickerValue !== '' && { width: '80%' }]}
                >
                    <Text style={{ color: datePickerValue === '' ? Colors.GRAY_DARK : Colors.FONT_COLOR, fontSize: 14 }}>
                        {datePickerValue === '' ? placeHolder ? placeHolder : I18n.t("DOB_name_textInput_label_text_patient_LoginInfo") : datePickerValue}
                    </Text>
                </TouchableOpacity>
                {
                    datePickerValue !== '' ?
                    <TouchableOpacity
                        onPress={() => clearValue()}
                    >
                        <AntDesign name="close" size={22} color={Colors.GRAY_DARK} />
                    </TouchableOpacity>
                    :
                    null
                }
                <DatePickerModal
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                    // validRange={{
                    //     endDate: new Date(), // optional
                    // }}
                    validRange={validRange}
                    animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
                />
            </View>
        </View>
    );
};
