import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles';
import {styles} from './styles.js';

export const RadioButton = ({label, valueBind, checked, onPress}) => {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      <View style={styles.outerCircle}>
        {valueBind !== null && checked ? (
          <View style={styles.innerCircle} />
        ) : null}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
};
