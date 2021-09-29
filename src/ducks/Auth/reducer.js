let initialState = {
  PRIMARY: 'PINK',
  userRole: '',
  user: {
    initials: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    password: '',
    middleName: '',

    salutation: '',

    // loginAttempt:'',
    // activeState: 1,

    confirmPassword: ''
  },

  patient: {
    firstName: '',
    lastName: '',
    middleName: '',
    initials: '',
    salutation: '',
    address: '',
    address2: '',
    address3: '',
    city: '',
    postalCode: '',
    province: '',
    gender: '',
    homePhone: '',
    mobilePhone: '',
    otherPhone: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    emergencyContactRelation: '',
    salutationModal: false,
    provinceModal: false,
    genderModal: false,
    SalutationText: '',
    provinceText: '',
    genderText: '',
    CountryCode: '',
    addressCode: ''
  },

  medicalInfo: {
    drugReaction: null,
    comments: '',
    medicalConditions: [],
    medicines: [],
    medicationDropdown: false,
    medicationText: 'Medication',
    familyDoctorName: ''
  },

  dependantInfo: {
    firstName: '',
    lastName: '',
    initial: '',
    salutation: '',
    //healthCardNumber: '',
    address: '',
    dateOfBirth: '',
    city: '',
    postalCode: '',
    province: '',
    gender: '',
    homePhone: '',
    mobilePhone: '',
    otherPhone: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    dependants: [],
    salutationModal: false,
    provinceModal: false,
    genderModal: false,
    SalutationText: 'Salution',
    provinceText: 'Province',
    genderText: 'Gender'
  },

  paymentInfo: {
    firstName: '',
    lastName: '',
    paymentMethod: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardHolderName: '',
    country: '',
    province: '',
    socialSecurityNumber: '',
    policyHolderName: '',
    groupPolicyNumber: '',
    healthCardNumber: '',
    versionNumber: ''
  },

  patientAddressInfo: {
    addressType: '',
    addressCode: '',
    countryCode: ''
  },

  patientAddressDetailInfo: {
    address: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    addressCode: '',
    countryCode: ''
  },

  serviceProvider: {
    firstName: '',
    lastName: '',
    initial: '',
    salutation: '',
    address: '',
    address2: '',
    address3: '',
    city: '',
    postalCode: '',
    province: '',
    gender: '',
    homePhone: '',
    mobilePhone: '',
    otherPhone: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    PrimaryLanguage: '',
    SecondaryLanguage: '',
    OtherLanguage: '',
    salutationText: '',
    provinceText: '',
    genderText: '',
    providerType: '',
    CountryCode: ''
  },

  spSchedule: {
    availabilityType: '',
    TypeModal: false,
    OfficeModal: false,
    OfficeModalText: '',
    HolidayQuestion: null,
    SelectedDaysArray: [],
    startTimeVisibleModal: false,
    endTimeVisibleModal: false,
    starthour: '',
    startminute: '',
    endhour: '',
    endminute: '',
    startTime: '',
    endTime: '',
    AddAvailabityArray: [],
    SelectedDays: '',
    TimeArray: [],
    schedule: {
      'Video & Chat': {
        Sun: [],
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: []
      },
      Physical: {
        Sun: [],
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: []
      }
    }
  },

  spServices: {
    offerServices: [],
    typeServices: '',
    nameServices: '',
    servicesDropdown: false,
    typeDropdown: false,
    nameDropdown: false,
    offers: {label: '', value: ''},
    type: {label: '', value: ''},
    name: {userName: ''},
    clinicServices: [],
    selectedServices: '',
    typeValue: '',
    nameValue: ''
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_SAVE_SUCCESS': {
      return {
        ...state,
        user: action.userObj
      };
    }
    case 'PATIENT_SAVE_SUCCESS': {
      return {
        ...state,
        patient: action.patientObj
      };
    }
    case 'MEDICAL_INFO_SAVE_SUCCESS': {
      return {
        ...state,
        medicalInfo: action.medicalInfoObj
      };
    }
    case 'DEPENDANT_INFO_SAVE_SUCCESS': {
      return {
        ...state,
        dependantInfo: action.dependantInfoObj
      };
    }
    case 'PAYMENT_INFO_SAVE_SUCCESS': {
      return {
        ...state,
        paymentInfo: action.paymentInfoObj
      };
    }
    case 'PATIENT_ADDRESS_SAVE_SUCCESS': {
      return {
        ...state,
        patientAddressInfo: action.patientAddressObj
      };
    }
    case 'PATIENT_ADDRESS_DETAIL_SAVE_SUCCESS': {
      return {
        ...state,
        patientAddressDetailInfo: action.patientAddressDetailsObj
      };
    }
    case 'SERVICE_PROVIDER_SAVE_SUCCESS': {
      console.log(
        'reducer serviceProviderObj:' +
          JSON.stringify(action.serviceProviderObj)
      );
      return {
        ...state,
        serviceProvider: action.serviceProviderObj
      };
    }
    case 'SET_USER_ROLE': {
      return {
        ...state,
        userRole: action.payload.userType
      };
    }
    case 'SP_SCHEDULE_SAVE_SUCCESS': {
      return {
        ...state,
        spSchedule: action.spScheduleObj
      };
    }
    case 'SP_SERVICES_SAVE_SUCCESS': {
      return {
        ...state,
        spServices: action.spServicesObj
      };
    }

    case 'CLEAR_REGISTRATION_FORM_SUCCESS': {
      return {
        initialState
      };
    }

    default:
      return state;
  }
}
