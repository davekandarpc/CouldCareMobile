/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from 'react'
import {TouchableOpacity, Image, Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const AudioSwitchButton = ({speakerOn, onPress}) => {
  return (  
  <TouchableOpacity
    style={{
      width: Dimensions.get('window').width * 0.13,
      height: Dimensions.get('window').width * 0.13,
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      backgroundColor: speakerOn ? '#fff' : 'rgba(0,0,0,0.6)', padding: 5, justifyContent: 'center', alignItems: 'center'
  }}
    onPress={() => {
      onPress();
  }}>
    <Ionicons name={speakerOn ? 'md-volume-high' : 'ios-volume-mute'} color={speakerOn ? "#000" : '#fff'} size={28} />
  </TouchableOpacity>
  ) 
}
