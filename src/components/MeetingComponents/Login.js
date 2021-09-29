/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './Style';

export class Login extends React.Component {
  constructor() {
    super();
    this.meetingName = "Live chat testing";
    this.userName = "Dhaval";
  }

  startMeeting = () => {
    if (!this.meetingName || !this.userName) {
      Alert.alert("Meeting name and user name can not be empty");
    } else {
      this.props.onSubmit(this.meetingName, this.userName);
    }
  }

  renderForm() {
    return (
      <React.Fragment>
        <TextInput value={this.meetingName} style={styles.inputBox} placeholder="Meeting ID" onChangeText={(val) => this.meetingName = val.trim()} />
        <TextInput value={this.userName} style={styles.inputBox} placeholder="Your Name" onChangeText={(val) => this.userName = val.trim()} />
        <Button title="Start" onPress={this.startMeeting} />
      </React.Fragment>
    );
  }

  renderLoading() {
    return <Text>Loading, please wait...</Text>
  }

  render() {
    return (
      this.props.meetingEnded ?
        <View style={{ height: '100%', backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff' }}>The Meeting is ended</Text>
        </View>
        :
        <View style={{ height: '100%', backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color="gray" size={50} />
        </View>
    );
  }
}