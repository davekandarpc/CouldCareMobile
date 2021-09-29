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
import { styles } from './styles.js '
import { DOC_SIGNUP_STEPS } from '../../../common/constantsDoc'

export const TitleView = ({ activeStepDoc }) => {
    const renderItem = ({ item, index }) => (
        <View style={styles.stepView}>
            {
                index == 0 ?
                    <Text style={styles.stepTextActive}>&#9679;</Text>
                    :
                    <Entypo name="triangle-right" size={20} />
            }
            <Text style={activeStepDoc >= index ? styles.stepTextActive : styles.stepText}>{item}</Text>
        </View>
    );
    return (
        <View style={styles.titleView}>
            <Text style={styles.titleText}>Doctor Sign Up</Text>
            <View>
                <FlatList
                    horizontal={true}
                    data={DOC_SIGNUP_STEPS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};
