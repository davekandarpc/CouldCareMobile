import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { styles } from './styles.js'

export const FormTitle = ({ activePageNo, title }) => {
    return (
        <Text style={styles.formTitle}>{activePageNo}. {title}</Text>
    );
};
