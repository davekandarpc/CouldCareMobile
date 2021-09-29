import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Modal } from 'react-native';
import { styles } from './styles.js'
import { IconButton } from 'react-native-paper';

export const Dropdown = ({ list, selected, label, onClose, onSelect, modalVisible, open, placeHolder }) => {
    return (
        <View style={styles.mainContainer}>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={onClose}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.DropdownLabelView}>
                            <Text style={styles.dropdownHeader}>{label}</Text>
                            <IconButton
                                icon="close"
                                color={'#000'}
                                size={25}
                                onPress={onClose}
                            />
                        </View>
                        <ScrollView>
                            {
                                list.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                if (onSelect) {
                                                    onSelect(item);
                                                }
                                                onClose();
                                            }}
                                            style={styles.dropdpwnItem}
                                            key={item.label + index}
                                        >
                                            <Text
                                                style={selected === item.value ? styles.dropdownItemText_selected : styles.dropdownItemText}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={open}
                style={styles.dropdownButton}
            >
                <Text style={{ color: selected === '' ? 'gray' : '#000', fontSize: 16 }}>
                    {selected === '' ? placeHolder : selected}
                </Text>
                <IconButton
                    icon="chevron-down"
                    color={'#000'}
                    size={25}
                    onPress={open}
                />
            </TouchableOpacity>
        </View>
    );
};
