import React, { useState, useEffect } from 'react';
import { Colors, Spacing, Typography } from '../../styles'
import { styles } from './styles.js'
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

FontAwesome.loadFont()
export const FormButton = ({ label, onPress, mode, rightButtonLabelStyle, propsButtonStyle, sideAerrow, disabled = false }) => {
    return (
        <Button
            mode={mode ? mode : "outlined"}
            uppercase={false}
            color={Colors.PRIMARY}
            onPress={onPress}
            labelStyle={[styles.rightButtonLabel, rightButtonLabelStyle, { color: mode === 'contained' ? Colors.BUTTON_FONT_COLOR : Colors.PRIMARY }]}
            style={[styles.buttonStyle, propsButtonStyle, { opacity: disabled ? 0.5 : 1 }]}
            theme={{ roundness: 0 }}
            disabled={disabled}
        >
            {label}
            {
                sideAerrow == true &&
                <FontAwesome name='long-arrow-right' size={20} color={mode === 'contained' ? Colors.BUTTON_FONT_COLOR : Colors.PRIMARY}></FontAwesome>
            }
        </Button>
    );
};
