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
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
  },
  SearchbletitleText:{
    fontSize: Spacing.SCALE_18,
    marginVertical: Spacing.SCALE_18,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: Typography.FONT_SIZE_14
  },
  dateOfBirthLabel: {
    ...Typography.textBoxLabel
  }
  //searchble drop down component End
});