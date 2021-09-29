import React, { useState, useEffect } from 'react';
import { styles } from './styles.js'
import { TextInput, View, Text } from 'react-native'
// import { TextInput } from 'react-native-paper';
import { Colors, Spacing, Typography } from '../../styles'

export const TextBox = ({ noLabel = false, onChangeText, label, style, errors, onFocusInput, onBlurInput, children, editable = true, ...props }) => {
    const [isFocued, setIsFocused] = useState(false)
    return (
        // <TextInput
        //     {...props}
        //     mode="outlined"
        //     label={label}
        //     onChangeText={firstName => onChangeText(firstName)}
        //     style={[styles.textBoxStyle, style]}
        //     theme={{ colors: { primary: Colors.PRIMARY, underlineColor: 'transparent' }, roundness: 0 }}
        // />
        <View style={[styles.textBoxContainerStyle, style]}>
            {
                !noLabel ?
                    <Text style={styles.textInputLabel}>{label}</Text>
                    :
                    null
            }
            <TextInput
                {...props}
                placeholder={label}
                placeholderTextColor='#777'
                onChangeText={firstName => onChangeText(firstName)}
                style={[styles.textBoxStyle, { borderColor: isFocued ? Colors.PRIMARY : Colors.FONT_COLOR }, !editable && { backgroundColor: '#f4f4f4', borderWidth: 0.2, opacity: 0.7 }]}
                onFocus={() => {
                    setIsFocused(true)
                    if (onFocusInput) {
                        onFocusInput()
                    }
                }}
                onBlur={() => {
                    setIsFocused(false)
                    if (onBlurInput) {
                        onBlurInput()
                    }
                }}
                editable={editable}
            />
            {
                errors?.map(message => <Text key={message} style={styles.error}>{message}</Text>)
            }
            {children}
        </View>
    );
};
