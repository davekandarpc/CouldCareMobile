import { StyleSheet,Platform } from 'react-native';
import { Colors, Spacing, Typography, CommonStyles } from '../../../styles'
import { scaleFont, scaleSize } from '../../../styles/mixins';
export const styles = StyleSheet.create({
    textInputLabel: {
        marginTop: Spacing.SCALE_16,
        marginBottom: Spacing.SCALE_5,
        ...Typography.textBoxLabel
    },
    textInput: {
        backgroundColor: Colors.WHITE,
        height: scaleSize(50),
        color: Colors.FONT_COLOR,
        borderColor: Colors.FONT_COLOR,
    },
    yellowFullButton: {
        marginTop: Spacing.SCALE_22,
        backgroundColor: Colors.PRIMARY,
        paddingVertical: Spacing.SCALE_12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 2,
        width:'50%',
        alignSelf:'center'
    },
    yellowFullButtonText: {
        ...Typography.buttonText,
        color: Colors.BUTTON_FONT_COLOR
    },
    resetPasswordTextStyle:{
        fontSize:scaleFont(15),
        alignSelf:'flex-end',
        marginVertical:scaleSize(3),
        color:Colors.PRIMARY,
        fontWeight:'500',
        fontStyle:'italic'
    },
    error: {
        ...CommonStyles.error
    },
    spinnerTextStyle: {
        color: Colors.WHITE
    }
});