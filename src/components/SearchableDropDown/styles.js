import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles';
export const styles = StyleSheet.create({
  //searchble drop down component start
  menuContainer: {
    borderWidth: 1,
    maxHeight: 150,
    overflow: 'hidden',
    marginTop: -13,
    backgroundColor: Colors.GRAY_LIGHT,
    borderColor: Colors.GRAY_LIGHT
  },
  menuItem: {
    borderBottomWidth: 0.5,
    paddingHorizontal: Spacing.SCALE_12,
    paddingVertical: Spacing.SCALE_8
  },
   menuTitle: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.FONT_COLOR
  },
});