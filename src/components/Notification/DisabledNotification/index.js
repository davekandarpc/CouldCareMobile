import React from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { styles } from './styles.js';

export const DisabledNotification = ({ title, message, onPress, date }) => {
  return (
    <TouchableOpacity style={styles.notificationItem} onPress={onPress}>
      <View>
        <View style={styles.titleDateContainer}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationDate}>{date}</Text>
        </View>
        <Text numberOfLines={2} style={styles.notificationMessage}>
          {message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
