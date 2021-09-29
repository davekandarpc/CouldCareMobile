import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles'
export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalView: {
    maxHeight: Spacing.WIDNOW_HEIGHT / 2,
    width: '90%',
    margin: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
    shadowColor: Colors.FONT_COLOR,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'scroll'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  DropdownLabelView: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#e7e7e7',
    paddingHorizontal: 12,
    paddingVertical: 5,
    elevation: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dropdownHeader: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD
  },
  dropdpwnItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e7e7e7'
  },
  dropdownItemText: {

  },
  dropdownItemText_selected: {
    fontWeight: Typography.FONT_WEIGHT_BOLD
  },
  dropdownButton: {
    height: 56,
    borderWidth: 1,
    paddingLeft: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});