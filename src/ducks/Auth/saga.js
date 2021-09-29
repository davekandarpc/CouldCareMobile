import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

export function* changeTheme() {
  console.log('saga')
}

export function* saveTheUser(userObj) {
  yield put({ type: 'USER_SAVE_SUCCESS', userObj });
}

export function* saveThePatient(patientObj) {
  yield put({ type: 'PATIENT_SAVE_SUCCESS', patientObj });
}

export function* saveTheMedicalInfo(medicalInfoObj) {
  yield put({ type: 'MEDICAL_INFO_SAVE_SUCCESS', medicalInfoObj });
}

export function* saveTheDependantInfo(dependantInfoObj) {
  yield put({ type: 'DEPENDANT_INFO_SAVE_SUCCESS', dependantInfoObj });
}

export function* saveThePaymentInfo(paymentInfoObj) {
  yield put({ type: 'PAYMENT_INFO_SAVE_SUCCESS', paymentInfoObj });
}

export function* saveThePatientAddress(patientAddressObj) {
  yield put({ type: 'PATIENT_ADDRESS_SAVE_SUCCESS', patientAddressObj });
}

export function* saveThePatientAddressDetails(patientAddressDetailsObj) {
  yield put({ type: 'PATIENT_ADDRESS_DETAIL_SAVE_SUCCESS', patientAddressDetailsObj });
}

export function* saveTheServiceProvider(serviceProviderObj) {
  yield put({type:'SERVICE_PROVIDER_SAVE_SUCCESS',serviceProviderObj});
}

export function* saveTheSPSchedule(spScheduleObj) {
  yield put({type:'SP_SCHEDULE_SAVE_SUCCESS',spScheduleObj});
}

export function* saveTheSPServices(spServicesObj) {
  yield put({type:'SP_SERVICES_SAVE_SUCCESS',spServicesObj});
}

export function* clearRegistrationForm() {
  yield put({type:'CLEAR_REGISTRATION_FORM_SUCCESS'});
}

export default function* AuthWatcher() {
  yield all([
  takeEvery('changetheme1', changeTheme),
  takeEvery('SAVE_USER', saveTheUser),
  takeEvery('SAVE_PATIENT', saveThePatient),
  takeEvery('SAVE_MEDICAL_INFO', saveTheMedicalInfo),
  takeEvery('SAVE_DEPENDANT_INFO', saveTheDependantInfo),
  takeEvery('SAVE_PAYMENT_INFO', saveThePaymentInfo), 
  takeEvery('SAVE_PATIENT_ADDRESS', saveThePatientAddress),
  takeEvery('SAVE_PATIENT_ADDRESS_DETAIL', saveThePatientAddressDetails),
  takeEvery('SAVE_SERVICE_PROVIDER', saveTheServiceProvider),
  takeEvery('SAVE_SP_SCHEDULE', saveTheSPSchedule),
  takeEvery('SAVE_SP_SERVICES', saveTheSPServices),
  takeEvery('CLEAR_REGISTRATION_DATA', clearRegistrationForm)
  ]);

}

