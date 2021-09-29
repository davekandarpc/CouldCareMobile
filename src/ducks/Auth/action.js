export const changeTheme = (theme) => ({
    type: 'CHANGE_THEME',
    payload: {
        theme
    }
});

export const setUserRole = (userType) => ({
    type: 'SET_USER_ROLE',
    payload:{
        userType
    }
})

export const saveUser = (user) => ({
    type: 'SAVE_USER',
    payload: {
        user
    }
});

export const savePatient = (patient) => ({
    type: 'SAVE_PATIENT',
    payload: {
        patient
    }
});

export const saveMedicalInfo = (medicalInfo) => ({
    type: 'SAVE_MEDICAL_INFO',
    payload: {
        medicalInfo
    }
});

export const saveDependantInfo = (dependantInfo) => ({
    type: 'SAVE_DEPENDANT_INFO',
    payload: {
        dependantInfo
    }
});

export const savePaymentInfo = (paymentInfo) => ({
    type: 'SAVE_PAYMENT_INFO',
    payload: {
        paymentInfo
    }
});

export const savePatientAddress = (patientAddress) => ({
    type: 'SAVE_PATIENT_ADDRESS',
    payload: {
        patientAddress
    }
});

export const savePatientAddressDetail = (patientAddressDetail) => ({
    type: 'SAVE_PATIENT_ADDRESS_DETAIL',
    payload: {
        patientAddressDetail
    }
});


export const saveServiceProvider = (serviceProvider) => ({
    type: 'SAVE_SERVICE_PROVIDER',
    payload: {
        serviceProvider
    }
});


export const saveSPSchedule = (spSchedule) => ({
    type: 'SAVE_SP_SCHEDULE',
    payload: {
        spSchedule
    }
});

export const saveSPServices = (spServices) => ({
    type: 'SAVE_SP_SERVICES',
    payload: {
        spServices
    }
});

export const clearRegistrationData = () => ({
    type: 'CLEAR_REGISTRATION_DATA',
})