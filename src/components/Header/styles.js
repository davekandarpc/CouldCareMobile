import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles'
export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: Spacing.SCALE_12,
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: Typography.FONT_SIZE_18,
        color: Colors.PRIMARY
    },
    rightButtonLabel: {
        fontSize: Typography.FONT_SIZE_16
    },
    TitleNameTextStyle:{
        fontSize: Typography.FONT_SIZE_20,
        fontWeight:'bold'
    }
});