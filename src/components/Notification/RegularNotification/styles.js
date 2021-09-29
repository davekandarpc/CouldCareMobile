import {StyleSheet} from 'react-native';
import {Colors, Typography, Spacing, Mixins} from '../../../styles';
export const styles = StyleSheet.create({
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: Spacing.SCALE_16,
    paddingHorizontal: Spacing.SCALE_10,
    justifyContent: 'space-between',
    // alignItems: 'center',
    // flexDirection: 'row'
  },
  titleDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  notificationTitle: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    width: '70%'
  },
  notificationMessage: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.FONT_COLOR
  },
  notificationDate: {
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.GRAY_DARK,
    textAlign: 'right',
    width: '30%'
  }
});
