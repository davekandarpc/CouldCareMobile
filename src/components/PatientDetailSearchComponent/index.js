import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';
import { TextBox } from '../../components';
import { Colors } from '../../styles';
import { TENANT_ID, BACK_END_URL_CONTEXT_PATH } from '../../config/settings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../../utils/services';
import { getRequest } from '../../common/fetchRequest';
export const PatientDetailSearchComponent = ({
  navigation,
  errors,
  setAddressValue,
  onFocusInput,
  propsValue,
  Clear = true,
  editable = true,
  selectedUserType
}) => {
  const [state, setState] = useState({
    textBoxValue: '',
    // canadPostAddresses: [],
    patientsList: [],
    showSuggestions: false,
    loading: false
  });

  const updateState = (field, value) => {
    setState(previous => ({ ...previous, [field]: value }));
  };

  const autoCompletePatientList = async searchTerm => {
    let name = searchTerm;
    let userId = await AsyncStorage.getItem('userId');
    let authorizationToken = await AsyncStorage.getItem('authorizationToken');
    const userType = await AsyncStorage.getItem('userType');
    if (authorizationToken !== null) {
      let URL = '';
      if (userType === 'SERVICE_PROVIDER') {
        URL = `message/serviceProvider/${userId}/contacts?tenant=${TENANT_ID}&userType=${selectedUserType}&name=${name}`;
      } else if (userType === 'PATIENT') {
        URL = `message/patient/${userId}/contacts?tenant=${TENANT_ID}&userType=${selectedUserType}&name=${name}`;
      } else if (userType === 'ADMIN') {
        URL = `message/admin/${userId}/contacts?tenant=${TENANT_ID}&userType=${selectedUserType}&name=${name}`;
      }
      const response = await getRequest(URL, true)
      if(response.ok) {
        const responseJson = await response.json();
        console.log(
          'autoCompletePatientList response====>' + JSON.stringify(responseJson)
        );
        return responseJson;
      }
    } else {
      logout(navigation);
    }
  };

  const onChangeText = search => {
    updateState('showSuggestions', true);
    updateState('textBoxValue', search);
    setAddressValue(search);
    onSearchAddress(search);
  };

  const onSearchAddress = async value => {
    updateState('loading', true);
    let patients = await autoCompletePatientList(value);
    updateState('loading', false);
    console.log('patientsList: ' + JSON.stringify(patients));
    updateState('patientsList', patients);
  };

  const onSelectItem = async item => {
    updateState('loading', true);
    let authorizationToken = await AsyncStorage.getItem('authorizationToken');
    if (authorizationToken !== null) {
      let patientJson = await getDetailsOfPatient(item.patientId);
      console.log(
        'onSelectItem......patientJson====>' + JSON.stringify(patientJson)
      );
      updateState('loading', false);
      updateState('textBoxValue', patientJson.email); //Set selected email value to text box

      if (patientJson.email) {
        setAddressValue(patientJson.email, patientJson);
      }
      updateState('showSuggestions', false);
    } else {
    }
  };

  const getDetailsOfPatient = async searchId => {
    console.log('Getting details of patient......');
    let patientDetailsListObj = state.patientsList;

    for (let i = 0; i < patientDetailsListObj.length; i++) {
      if (searchId == patientDetailsListObj[i].patientId) {
        return patientDetailsListObj[i];
      }
    }
  };

  return (
    <View>
      <TextBox
        label="To:"
        onChangeText={onChangeText}
        style={styles.fullTextBox}
        errors={state.textBoxValue === '' ? errors : []}
        value={
          state.textBoxValue === ''
            ? propsValue
              ? propsValue
              : state.textBoxValue
            : state.textBoxValue
        }
        onFocusInput={onFocusInput}
        onBlurInput={() => updateState('showSuggestions', false)}
        editable={editable}
      />
      {Clear && state.textBoxValue !== '' && (
        <TouchableOpacity
          onPress={() => updateState('textBoxValue', '')}
          style={{ position: 'absolute', right: 0, top: 0 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Clear</Text>
        </TouchableOpacity>
      )}
      {state.showSuggestions ? (
        <View
          style={{
            borderWidth: 1,
            maxHeight: 150,
            overflow: 'hidden',
            marginTop: -13,
            backgroundColor: 'lightgray',
            borderColor: 'lightgray'
          }}>
          {!state.loading ? (
            <ScrollView
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="always">
              {state.patientsList.map(item => {
                return (
                  <TouchableOpacity
                    style={styles.addressItem}
                    onPress={() => onSelectItem(item)}>
                    <Text style={styles.addressTitle}>{item.email}</Text>
                    <Text style={styles.addressTitle}>
                      {item.firstName} {item.lastName}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : (
            <View style={{ justifyContent: 'center' }}>
              <ActivityIndicator size={30} color={Colors.PRIMARY} />
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};
