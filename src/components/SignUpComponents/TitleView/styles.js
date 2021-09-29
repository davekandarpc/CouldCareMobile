import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../../styles'
export const styles = StyleSheet.create({
    titleView: {
        borderBottomWidth: 1,
        marginVertical: Spacing.SCALE_22,
        paddingBottom: Spacing.SCALE_5
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