import { StyleSheet, Platform } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles'
import { isIpad } from '../../utils/services'

export const styles = StyleSheet.create({
    textBoxContainerStyle: {
        width: Spacing.COMPONENT_WIDTH,
        marginBottom: Spacing.SCALE_16,
        // height: Spacing.SCALE_45,
    },
    textBoxStyle: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        borderWidth: Platform.OS == 'ios' ? 0.5 : 1,
        borderColor: Colors.FONT_COLOR,
        color: Colors.FONT_COLOR,
        height: Spacing.SCALE_50,
        paddingHorizontal: Spacing.SCALE_10
    },
    error: {
        color: 'red',
        fontSize: Typography.FONT_SIZE_14,
        marginTop: Spacing.SCALE_5
    },
    textInputLabel: {
        marginBottom: Spacing.SCALE_5,
        ...Typography.textBoxLabel
    },
});