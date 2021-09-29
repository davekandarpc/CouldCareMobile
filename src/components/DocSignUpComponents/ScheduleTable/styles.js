import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../../styles'
export const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    TableMainView:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: 0,
        shadowColor: Colors.shadow,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 9,
        // padding: Spacing.SCALE_5
    },
    RowView:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
    },
    RowTitleTextStyle:{
        fontSize: Typography.FONT_SIZE_12
    },

    headerCell:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: Typography.FONT_SIZE_16,
        fontWeight: Typography.FONT_WEIGHT_BOLD
    },
    tableCell:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#f7f7f7'
    },
    tableCellText: {
        fontSize: Typography.FONT_SIZE_15
    },
    timeSlotCell: {
        flex: 1,
        alignItems: 'center'
    },
    timeSlotRow: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    StartStopView:{
        flexDirection:'row',
        marginTop:Spacing.SCALE_2,
        alignSelf:'center',
    },
    startTextView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
});