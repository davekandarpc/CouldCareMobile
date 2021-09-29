import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen';
import AccountInfo from '../screens/Signup/Signup_patient/AccountInfo';
import MedicalInfo from '../screens/Signup/Signup_patient/MedicalInfo';
import Dependants from '../screens/Signup/Signup_patient/Dependants';
import LoginInfo from '../screens/Signup/Signup_patient/LoginInfo';
import PaymentsInfo from '../screens/Signup/Signup_patient/PaymentsInfo';
import UserRoleSelection from '../screens/UserRoleSelection';
import SeeDoctorPatientScreen from '../screens/SeeDoctorPatientScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FindCareScreen from '../screens/FindCareScreen';
import BookAppointmentSelectDoctor from '../screens/BookAnAppointmentScreen/BookAppointmentSelectDoctor';
import BookAppointmentType from '../screens/BookAnAppointmentScreen/BookAppointmentType';
import BookAppointmentVisitType from '../screens/BookAnAppointmentScreen/BookAppointmentVisitType';
import CalendarScreen from '../screens/BookAnAppointmentScreen/CalendarScreen';
import StatusScreen from '../screens/StatusScreen';
import DoctorAccountInfo from '../screens/Signup/Signup_doctor/DoctorAccountInfo';
import DoctorSchedule from '../screens/Signup/Signup_doctor/DoctorSchedule';
import Services from '../screens/Signup/Signup_doctor/Services';
import TwoFactorVerificationScreen from '../screens/Signup/TwoFactorVerificationScreen';
import ChatWelcomeScreen from '../screens/ChatScreens/ChatWelcomeScreen';
import ChatInQueueScreen from '../screens/ChatScreens/ChatInQueueScreen';
import ChatJoiningScreen from '../screens/ChatScreens/ChatJoiningScreen';
import MeetBoard from '../screens/ChatScreens/MeetBoard';
import FeedbackScreen from '../screens/FeedbackScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SplashScreen from '../screens/SplashScreen';
import MySchedule_Patient from '../screens/MySchedule/MySchedule_Patient';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  // const [hasToken, sethasToken] = React.useState(false);
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MeetBoard"
        component={MeetBoard}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="UserRoleSelection"
        component={UserRoleSelection}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="LoginInfo"
        component={LoginInfo}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MedicalInfo"
        component={MedicalInfo}
        options={{
          gestureEnabled: true,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Dependants"
        component={Dependants}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PaymentsInfo"
        component={PaymentsInfo}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SeeDoctorPatientScreen"
        component={SeeDoctorPatientScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="FindCareScreen"
        component={FindCareScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BookAppointmentSelectDoctor"
        component={BookAppointmentSelectDoctor}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BookAppointmentType"
        component={BookAppointmentType}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BookAppointmentVisitType"
        component={BookAppointmentVisitType}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="StatusScreen"
        component={StatusScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DoctorAccountInfo"
        component={DoctorAccountInfo}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DoctorSchedule"
        component={DoctorSchedule}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TwoFactorVerificationScreen"
        component={TwoFactorVerificationScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChatWelcomeScreen"
        component={ChatWelcomeScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChatInQueueScreen"
        component={ChatInQueueScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChatJoiningScreen"
        component={ChatJoiningScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MySchedule_Patient"
        component={MySchedule_Patient}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          gestureEnabled: false,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
