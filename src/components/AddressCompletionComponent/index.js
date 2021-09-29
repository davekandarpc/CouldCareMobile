import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Text, View, ActivityIndicator } from 'react-native';
import { styles } from './styles.js';
import {
  TextBox,
} from '../../components';
import { BACK_END_URL_CONTEXT_PATH } from '../../config/BackEndURlCfg'
import { Colors } from '../../styles'
import { autoCompleteAddress, getAddressFromSelected } from '../../common/CanadapostAddressCompletion';
import AntDesign from 'react-native-vector-icons/AntDesign'

export const AddressCompletionComponent = ({ errors, setAddressValue, onFocusInput, propsValue, Clear=true, editable=true }) => {
  const [state, setState] = useState({
    textBoxValue: '',
    canadPostAddresses: [],
    showSuggestions: false,
    loading: false,
  });

  const updateState = (field, value) => {
    setState(previous => ({ ...previous, [field]: value }));
  };

  const onChangeText = (search) => {
    updateState('showSuggestions', true)
    updateState('textBoxValue', search)
    setAddressValue(search)
    onSearchAddress(search)
  }

  const onSearchAddress = async value => {
    updateState('loading', true);
    let addressesJson = await autoCompleteAddress(value);
    updateState('loading', false);
    console.log('addressesJson: ' + JSON.stringify(addressesJson));
    updateState('canadPostAddresses', addressesJson.Items);
  };

  const onSelectItem = async item => {
    updateState('loading', true);
    let addressesJson = await getAddressFromSelected(item.Id);
    updateState('loading', false);
    updateState('textBoxValue', addressesJson.Items[0].Line1);
    if(addressesJson.Items[0].Line1) {
      setAddressValue(addressesJson.Items[0].Line1, addressesJson.Items[0])
    }
    updateState('showSuggestions', false)
  };

  return (
    <View>
      <TextBox
        label="Address"
        onChangeText={onChangeText}
        style={styles.fullTextBox}
        errors={state.textBoxValue === '' ? errors : []}
        value={state.textBoxValue === '' ? propsValue ? propsValue : state.textBoxValue : state.textBoxValue}
        onFocusInput={onFocusInput}
        onBlurInput={() => updateState('showSuggestions', false)}
        editable={editable}
      />
      {
        Clear && state.textBoxValue !== '' &&
        <TouchableOpacity
          onPress={() => updateState('textBoxValue', '')}
          style={{position: 'absolute', right: 0, top: 0}}
        >
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Clear</Text>
        </TouchableOpacity>
      }
      {
        state.showSuggestions && state.textBoxValue !== '' ?
          <View style={{ borderWidth: 1, maxHeight: 150, overflow: 'hidden', marginTop: -13, backgroundColor: 'lightgray', borderColor: 'lightgray' }}>
            {
              !state.loading ?
                <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps="always">
                  {state.canadPostAddresses.map((item) => {
                    return (
                      <TouchableOpacity
                        style={styles.addressItem}
                        onPress={() => onSelectItem(item)}>
                        <Text style={styles.addressTitle}>{item.Text}</Text>
                        <Text style={styles.addressSubTitle}>
                          {item.Description}
                        </Text>
                      </TouchableOpacity>
                    )
                  })}
                </ScrollView>
                :
                <View style={{ justifyContent: 'center' }}>
                  <ActivityIndicator size={30} color={Colors.PRIMARY} />
                </View>
            }
          </View>
          :
          null
      }
    </View>
  );
};
