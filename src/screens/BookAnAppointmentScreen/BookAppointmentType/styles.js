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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Spacing.SCALE_10,
        marginBottom: Spacing.SCALE_24
    },
    nextText: {
        width: '50%',
        textAlign: 'center',
        fontSize: Typography.FONT_SIZE_24,
        color: Colors.WHITE,
        backgroundColor: Colors.PRIMARY,
        padding: 10,
    },
    subTitleText: {
        fontSize: Typography.FONT_SIZE_16,
        fontWeight:'bold',
        color: Colors.PRIMARY
    },
    loader: {
        flex: 1,
        justifyContent: 'center'
    }
})