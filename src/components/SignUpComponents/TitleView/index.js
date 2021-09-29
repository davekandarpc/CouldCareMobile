import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    FlatList
} from 'react-native';
import { styles } from './styles.js'
import { SIGNUP_STEPS, DOCTOR_SIGNUP_STEPS } from '../../../common/constants'
import Entypo from 'react-native-vector-icons/dist/Entypo'
Entypo.loadFont()

export const TitleView = ({ activeStep, userRole }) => {
    const renderItem = ({ item, index }) => (
        <View style={styles.stepView}>
            {
                index ==0 ?
                <Text style={styles.stepTextActive}>&#9679;</Text>
                :
                <Entypo name="triangle-right" size={20} />
            }
            <Text style={activeStep >= index ? styles.stepTextActive : styles.stepText}>{item}</Text>
        </View>
    );
    return (
        <View style={styles.titleView}>
            <Text style={styles.titleText}>Sign Up</Text>
            <View>
                <FlatList showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={userRole === 'SERVICE_PROVIDER' ? DOCTOR_SIGNUP_STEPS : SIGNUP_STEPS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};
