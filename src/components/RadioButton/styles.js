import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles'
export const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        marginRight: Spacing.SCALE_10,
        alignItems: 'center',
        marginBottom: Spacing.SCALE_16
    },
    outerCircle: {
        height: 26,
        width: 26,
        borderRadius: 26,
        borderColor: Colors.PRIMARY,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        height: 19,
        width: 19,
        borderRadius: 19,
        backgroundColor: Colors.PRIMARY
    },
    radioLabel: {
        fontSize: Typography.FONT_SIZE_20,
        marginLeft: Spacing.SCALE_10
    }
});