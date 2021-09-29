import React, { useState, useEffect, } from 'react';
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
import { Colors, Spacing, Typography } from '../../styles'
import { styles } from './styles.js'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ rightIcon = "", goBack, TitleName, userIcon, backButton = true, renderSubTitle=null }) => {
    const navigation = useNavigation();
    const goUserClick = () => {
        navigation.navigate('ProfileScreen')
    }

    return (
        <View style={styles.header}>
            {
                backButton &&
                <Button
                    color={Colors.PRIMARY}
                    onPress={goBack}
                    labelStyle={styles.rightButtonLabel}
                >
                    <MaterialIcons name="keyboard-backspace" color={Colors.PRIMARY} size={25} />
                </Button>
            }
            {  userIcon == true &&
                <Button
                    style={{ position: 'absolute', right: 0 }}
                    color={Colors.PRIMARY}
                    onPress={goUserClick}
                    labelStyle={styles.rightButtonLabel}
                >
                    <Feather name="user" color={Colors.PRIMARY} size={25} />
                </Button>
            }
            <View>
                <Text style={styles.TitleNameTextStyle}>{TitleName}</Text>
                {renderSubTitle !== null ? renderSubTitle() : null}
            </View>
            {
                rightIcon === 'next' ?
                    <Button
                        uppercase={false}
                        color={Colors.PRIMARY}
                        onPress={() => console.log('')}
                        labelStyle={styles.rightButtonLabel}
                    >
                        Next
            </Button>
                    :
                    null
            }
        </View>
    );
};
