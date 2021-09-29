/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from 'react'
import { TouchableOpacity, Image, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const HangOffButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').width * 0.20,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        backgroundColor: '#ff333a', padding: 5, justifyContent: 'center', alignItems: 'center',
        // marginHorizontal: 12
      }}
      onPress={() => {
        onPress();
      }}>
      <MaterialIcons name="call-end" color="#fff" size={30} />
    </TouchableOpacity>
  )
}
