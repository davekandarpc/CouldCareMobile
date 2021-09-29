import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { scaleFont } from './src/styles/mixins';
import AppNavigator from './src/navigation/index';
import { Provider } from "react-redux";
import Store from "./src/ducks/store";
import FlashMessage from "react-native-flash-message";

//Valid Healthcard = 79927398713

console.disableYellowBox = true;
const App = () => {
  const Stack = createStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const MyTheme = {
    // ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'red',
    },
  };

  return (
    <Provider store={Store}>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mixin: {
    fontSize: scaleFont(25)
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
