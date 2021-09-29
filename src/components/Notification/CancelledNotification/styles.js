import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, Mixins } from '../../../styles'
export const styles = StyleSheet.create({
    notificationItem: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: Spacing.SCALE_16,
        paddingLeft: Spacing.SCALE_10,
        paddingRight: Spacing.SCALE_10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,225,101,0.4)',
        flex: 1
    },
    notificationIcon: {
        backgroundColor: 'rgba(255,225,101,1)',
        padding: Spacing.SCALE_16
    },
    messageBody: {
        paddingHorizontal: Spacing.SCALE_10,
        flex: 5
    },
    notificationTitle: {
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.FONT_COLOR,
        fontWeight: 'bold'
    },
    notificationMessage: {
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.FONT_COLOR
    }
});