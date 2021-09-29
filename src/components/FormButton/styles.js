import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles'
export const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: Spacing.SCALE_16,
        paddingVertical: Spacing.SCALE_5,
        borderColor: Colors.PRIMARY,
        borderWidth: Spacing.SCALE_1,
        marginHorizontal: Spacing.SCALE_24,
    },
    rightButtonLabel: {
        fontSize: Typography.FONT_SIZE_18,
        color: Colors.PRIMARY,
    }
});