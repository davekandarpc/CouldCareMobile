import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView
} from 'react-native';
import {styles} from './styles.js';

export const MessageHeader = ({title, message, date}) => {
  return (
    <SafeAreaView>
      <View style={styles.title}></View>

      <Text style={styles.date}>{date}</Text>
      <Text style={styles.messageHeading}>{title}</Text>
      <Text style={styles.messageBodyText}>{message}</Text>
    </SafeAreaView>
  );
};
