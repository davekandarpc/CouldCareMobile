import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles.js';
import SearchableDropdown from 'react-native-searchable-dropdown';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Spacing } from '../../styles'
FontAwesome.loadFont()
AntDesign.loadFont()

export const SearchableDropDown = ({
  props,
  Data,
  onItemSelect,
  buttonPlaceholder,
  BtnText,
  TitleText,
  dropdownButtonStyle,
  onClear
}) => {
  const [state, setState] = useState({
    ModalVisible: false,
    value: null
  });

  const updateState = (field, value) => {
    setState(previous => ({ ...previous, [field]: value }));
  };

  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={state.ModalVisible}
        onRequestClose={() => updateState('ModalVisible', false)}>
        <SafeAreaView>
          <View
            style={styles.Searchblecontainer}>
            <TouchableOpacity
              style={{ position: 'absolute', left: 20 }}
              onPress={() => updateState('ModalVisible', false)}>
              <AntDesign name="arrowleft" size={22} color="#3098f3" />
            </TouchableOpacity>
            <Text style={styles.SearchbletitleText}>
              Search {TitleText}
            </Text>
          </View>
          <SearchableDropdown
            {...props}
            onTextChange={text => console.log(text)}
            onItemSelect={(item, index) => {
              updateState('ModalVisible', false);
              updateState('value', item)
              onItemSelect(item, index)
            }
            }
            containerStyle={{}}
            itemStyle={styles.SearchbleitemStyle}
            itemTextStyle={{ color: '#222' }}
            items={Data}
            chip={false}
            resetValue={false}
            textInputProps={{
              placeholder: buttonPlaceholder,
              underlineColorAndroid: 'transparent',
              autoFoucs: true,
              style: {
                padding: 12,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 0,
                height: Spacing.SCALE_45,
              },
              // onTextChange: text => alert(text),
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
        </SafeAreaView>
      </Modal>
      <View>
        <Text style={styles.dateOfBirthLabel}>{TitleText}</Text>
        <TouchableOpacity onPress={() => updateState('ModalVisible', true)} style={[styles.SearchblebtnClick, dropdownButtonStyle]}>
          <Text style={[styles.buttonText, { color: BtnText === '' ? 'grey' : '#000' }]}>{BtnText !== '' ? BtnText : TitleText}</Text>
          {
            BtnText!== '' && onClear ?
              <TouchableOpacity onPress={onClear}>
                <AntDesign
                  name="close"
                  size={22}
                  color="#000"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
              :
              <FontAwesome
                name="angle-down"
                size={22}
                color="#000"
                style={{ marginRight: 20 }}
              />
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};