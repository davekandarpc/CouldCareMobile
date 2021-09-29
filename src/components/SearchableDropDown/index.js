import React, { useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles.js';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Spacing } from '../../styles'
import { TextBox } from '../index';
FontAwesome.loadFont()
AntDesign.loadFont()

export const SearchableDropDown = ({
  placeholder,
  menuData,
  value,
  onSelectItem,
  propsChangeText,
  errors,
  DropdownPropStyle,
  noLabel = false,
  editable = true
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState('');
  const [searchData, setSearchData] = useState(menuData)

  const onChangeText = (value) => {
    setShowMenu(true)
    setTextBoxValue(value);
    if(propsChangeText) {
      propsChangeText(value);
    }
    onSearch(value)
  }

  const onSearch = (searchTerm) => {
    var searchReslut = menuData.filter(function (item) {
      return item.name.includes(searchTerm);
    });
    setSearchData(searchReslut)
    console.log('searchReslut: ' + JSON.stringify(searchReslut))
  }
  console.log('searchable value: ' + value)
  return (
    <View style={DropdownPropStyle}>
      <TextBox
        noLabel={noLabel}
        label={placeholder}
        value={value !== '' ? value : textBoxValue}
        onChangeText={onChangeText}
        onFocusInput={() => setShowMenu(true)}
        onBlurInput={() => setShowMenu(false)}
        errors={!showMenu ? errors : []}
        editable={editable}
      />
      {
        showMenu ?
          <View style={styles.menuContainer}>
            <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps="always">
              {
                searchData.length > 0 ? searchData.map((item) => {
                  return (
                    <TouchableOpacity
                      style={styles.menuItem}
                      onPress={() => {
                        setShowMenu(false);
                        onSelectItem(item);
                        Keyboard.dismiss();
                      }}
                    >
                      <Text style={styles.menuTitle}>{item.name}</Text>
                    </TouchableOpacity>
                  )
                })
                  :
                  <View
                    style={styles.menuItem}
                  >
                    <Text style={styles.menuTitle}>No Data Found</Text>
                  </View>
              }
            </ScrollView>
          </View>
          :
          null
      }
    </View >
  );
};