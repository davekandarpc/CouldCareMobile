import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles'
import { isIpad } from '../../utils/services'

export const styles = StyleSheet.create({
    dobMainView: {
        width: Spacing.HALF_TEXTBOX_WIDTH
    },
    dateOfBirthButton: {
        height: Spacing.SCALE_50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.FONT_COLOR,
        flexDirection: 'row',
        borderWidth: 1,
        paddingHorizontal: Spacing.SCALE_10
    },
    pickerText : {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    dateOfBirthLabel: {
        marginBottom: Spacing.SCALE_5,
        ...Typography.textBoxLabel
    }
}); 