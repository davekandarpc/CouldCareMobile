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
import {Mixins} from '../../../styles'
import Entypo from 'react-native-vector-icons/dist/Entypo';
export const CancelledNotification = ({ title, message }) => {
    return (
        <TouchableOpacity style={styles.notificationItem}>
            <View style={styles.notificationIcon}>
                <Entypo name='warning' size={Mixins.scaleFont(30)} color='#f9b20d' />
            </View>
            <View style={styles.messageBody}>
                <Text style={styles.notificationTitle}>{title}</Text>
                <Text style={styles.notificationMessage}>{message}</Text>
            </View>
        </TouchableOpacity>
    );
};
