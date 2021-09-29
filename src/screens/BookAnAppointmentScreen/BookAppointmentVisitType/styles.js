import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../../styles'
export const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingBottom: 10
    },
    scrollView: {
        flexGrow: 1,
        paddingBottom: 20
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        marginHorizontal: Spacing.SCALE_24
    },
    selectDoctorText: {
        fontSize: Typography.FONT_SIZE_18,
        marginTop: Spacing.SCALE_24,
        textTransform: 'uppercase'
    },
    selectDoctor: {
        marginTop: Spacing.SCALE_20,
    },
    nextButton: {
        backgroundColor: Colors.PRIMARY,
        width: '50%',
        alignSelf: 'center',
        marginBottom: Spacing.SCALE_8
    },
    nextButtonText: {
        color: Colors.WHITE
    },
    subTitleView: {
        flexDirection: 'row'
    },
    subTitleText: {
        fontSize: Typography.FONT_SIZE_16,
        fontWeight:'bold',
        color: Colors.PRIMARY
    }
})