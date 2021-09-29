import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles.js';
import { useNavigation } from '@react-navigation/native';
import I18n from '../../../utils/i18n';
import { TextBox } from '../../TextBox';
import * as validator from 'validator';
import { connect } from 'react-redux';
import { showMessage, hideMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import Spinner from 'react-native-loading-spinner-overlay';
import { setUserRole } from '../../../ducks/Auth/action';
import { TENANT_ID, dynamicConfig, BACK_END_URL_CONTEXT_PATH } from '../../../config/settings';
import { CommonStyles } from '../../../styles';
import { CommonActions } from '@react-navigation/native';

export const LoginForm = ({ setUserRole }) => {
  const [state, setState] = useState({
    username: '',
    password: '' /* 'd' */,
    token: '',
    loginFormError: '',
    loading: false
  });
  const [formErrors, setFormErrors] = useState({});
  const navigation = useNavigation();
  const loginViaREST = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      setState(previous => ({ ...previous, loading: true }));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: state.username,
          password: state.password
        })
      };
      fetch(
        BACK_END_URL_CONTEXT_PATH + 'login?tenant=' + TENANT_ID,
        requestOptions
      )
        .then(async response => {
          console.log('response: ' + JSON.stringify(response));
          if (!response.ok) {
            if (response.status === 423) {
              setState(previous => ({
                ...previous,
                loginFormError: 'Maximum login attempts reached, Your account is locked,Please try to reset password',
                loading: false
              }));
            } else {
              setState(previous => ({
                ...previous,
                loginFormError: 'Please enter a valid Email / Password',
                loading: false
              }));
            }
            return;
          } else {
            const data = await response.json();
            console.log('RESPONSE FROM SERVER => ' + JSON.stringify(data));
            if (data.activeState === 1) {
              await AsyncStorage.setItem('authorizationToken', data.token);
              await AsyncStorage.setItem('refreshToken', data.refreshToken);
              await AsyncStorage.setItem('sysUserId', data.sysUserId + '');
              await AsyncStorage.setItem('userId', data.userId + '');
              await AsyncStorage.setItem('userType', data.userType);
              await AsyncStorage.setItem('userEmail', state.username);
              showMessage({
                message: 'You are logged in successfully',
                type: 'success'
              });
              saveFCMInfoViaREST(data.sysUserId, data.token);
            } else {
              AskUserToValidateEmail(state.username, data.sysUserId)
              setState({
                token: '',
                loginFormError: '',
                loading: false
              });
            }
          }
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };

  const saveFCMInfoViaREST = async (sysUserId, authorizationToken) => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      let fcmToken = await messaging().getToken();
      var myHeaders = new Headers();
      myHeaders.append('fcm-token', fcmToken);
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', 'Bearer ' + authorizationToken);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders
      };
      let backendurl = BACK_END_URL_CONTEXT_PATH + `user/${sysUserId}/deviceToken?tenant=` + TENANT_ID;
      console.log('fcmToken: ' + fcmToken);
      fetch(backendurl, requestOptions)
        .then(response => response.text())
        .then(result => {
          setState(previous => ({
            ...previous,
            username: '',
            password: '',
            token: '',
            loginFormError: '',
            loading: false
          }))
          console.log('fcm token api response: ' + JSON.stringify(result));
          if (result === 'OK') {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  { name: dynamicConfig[TENANT_ID].flow.afterLogin }
                ],
              })
            );
          }
        })
        .catch(error => console.log('error', error));
    }
  };

  const doValidate = () => {
    const messages = {
      username: []
    };
    if (!validator.default.isEmail(state.username)) {
      messages.username.push('Not a valid Email.');
    } else {
      messages.username = [];
    }
    for (const key in messages) {
      if (messages[key].length > 0) {
        setFormErrors({ ...messages });
        return;
      } else {
        setFormErrors({ ...messages });
      }
    }
    loginViaREST();
  };

  const AskUserToValidateEmail = (email, sysUserId) => {
    Alert.alert(
      "Cloudcare",
      "Your email verification is still pending, We have sent you a verification code in your mail, press Verify to enter the code",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Verify", onPress: () => {
            navigation.navigate('TwoFactorVerificationScreen', {
              email: email,
              userId: sysUserId
            });
          }
        }
      ]
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <TextBox
          label={I18n.t('username_loginform_placeholder_text')}
          onChangeText={username =>
            setState(previous => ({ ...previous, username }))
          }
          keyboardType={'email-address'}
          errors={formErrors.username && formErrors.username}
          value={state.username}
        />
        <TextBox
          label={I18n.t('password_loginform_placeholder_text')}
          onChangeText={password =>
            setState(previous => ({ ...previous, password }))
          }
          secureTextEntry={true}
          value={state.password}
        />
        <Text
          style={styles.resetPasswordTextStyle}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          {I18n.t('reset_password_button')}
        </Text>
        {state.loginFormError ? (
          <Text style={styles.error}>{state.loginFormError}</Text>
        ) : null}
        <TouchableOpacity onPress={doValidate} style={styles.yellowFullButton}>
          <Text style={styles.yellowFullButtonText}>
            {I18n.t('login_loginform_text')}
          </Text>
        </TouchableOpacity>
      </View>
      <Spinner
        visible={state.loading}
        textContent={'Please wait...'}
        textStyle={CommonStyles.spinnerTextStyle}
      />
    </View>
  );
};
const mapStateToProps = (state, ownProps) => ({
  USER_ROLE: state.Auth.userRole
});

export default connect(mapStateToProps, { setUserRole })(LoginForm);
