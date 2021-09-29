import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../../styles'
export const styles = StyleSheet.create({
    titleView: {
        marginBottom: Spacing.SCALE_10
    },
    titleText: {
        ...Typography.screenTitle,
        marginBottom: Spacing.SCALE_8
    },
    stepView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepText: {
        marginHorizontal: Spacing.SCALE_2,
        marginBottom: Spacing.SCALE_1,
    },
    stepTextActive: {
        marginHorizontal: Spacing.SCALE_2,
        marginBottom: Spacing.SCALE_1,
        ...Typography.boldFont
    }
});