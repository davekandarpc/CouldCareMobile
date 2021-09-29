import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea'
  },
  title: {
    paddingVertical: 15,
    backgroundColor: '#1e90ff',
    color: '#20232a',
    height: 100
  },
  date: {
    fontSize: 20,
    textAlign: 'right',
    marginRight: 15
  },
  messageHeading: {
    paddingVertical: 10,
    paddingLeft: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20232a',
    height: 80
  },
  messageBodyText: {
    fontSize: 20,
    paddingLeft: 30
  }
});
