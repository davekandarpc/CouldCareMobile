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
    headerLine: {
        width: Spacing.SCALE_1,
        height: Spacing.FULL_TEXTBOX_WIDTH
    },  
    doctorListDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dropdownTitle: {
        fontSize: Typography.FONT_SIZE_18
    },
    dropdownWidth: {
        marginLeft: 20,
        width: Spacing.HALF_TEXTBOX_WIDTH
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
  
    //Radio Button
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
        marginLeft: Spacing.SCALE_10,
        color: Colors.FONT_COLOR,
        fontWeight: 'bold'
    },
    radioSubText: {
        fontSize: Typography.FONT_SIZE_16,
        marginLeft: Spacing.SCALE_10,
        color: Colors.FONT_COLOR
    },
    loader: {
        flex: 1,
        justifyContent: 'center'
    }
})