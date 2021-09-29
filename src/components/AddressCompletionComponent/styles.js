import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles';
export const styles = StyleSheet.create({
  //searchble drop down component start
  Searchblecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  SearchblebtnClick: {
    borderWidth: 1,
    borderColor: Colors.FONT_COLOR,
    height: Spacing.SCALE_50,
    paddingLeft: Spacing.SCALE_10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  SearchbleitemStyle: {
    padding: Spacing.SCALE_10,
    marginTop: Spacing.SCALE_2,
    backgroundColor: Colors.DROPDOWNBACKGROUD,
    borderColor: Colors.FONT_COLOR,
    borderWidth: 1,
    borderRadius: 1,
  },
  SearchbletitleText: {
    fontSize: Spacing.SCALE_18,
    marginVertical: Spacing.SCALE_18,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: Typography.FONT_SIZE_14
  },
  textBoxStyle: {
    borderWidth: 0.5,
    color: Colors.FONT_COLOR,
    paddingLeft: Spacing.SCALE_12
  },
  addressItem: {
    borderBottomWidth: 0.5,
    paddingHorizontal: Spacing.SCALE_12,
    paddingVertical: Spacing.SCALE_8
  },
  addressItem2: {
    paddingVertical: Spacing.SCALE_5,
  },
  addressTitle: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.FONT_COLOR
  },
  addressSubTitle: {
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.FONT_COLOR
  },
  subAddressBox: {
    backgroundColor: Colors.WHITE, 
    marginHorizontal: Spacing.SCALE_16,
    paddingHorizontal: Spacing.SCALE_14,
    borderRadius: 4,
    paddingVertical: 10
  },
  subAddressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subHeaderText: {
    fontWeight: 'bold',
    fontSize: Typography.FONT_SIZE_16
  },
  dateOfBirthLabel: {
    ...Typography.textBoxLabel
  }
  //searchble drop down component End
});