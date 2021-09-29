/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from 'react'
import { TouchableOpacity, Image, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const CameraButton = ({ disabled, onPress }) => {
  return (
    <TouchableOpacity
      style={
          {
            width: Dimensions.get('window').width * 0.13,
            height: Dimensions.get('window').width * 0.13,
            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
            backgroundColor: disabled ? '#fff' : 'rgba(0,0,0,0.6)', padding: 5, justifyContent: 'center', alignItems: 'center',
          }
      }
      onPress={() => {
        onPress();
      }}>
      <MaterialIcons name={disabled ? 'videocam' : 'videocam-off'} color={!disabled ? '#fff' : '#000'} size={28} />
    </TouchableOpacity>
  )
}
