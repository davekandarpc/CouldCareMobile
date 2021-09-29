import React, { useState, useEffect } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../styles';
import { styles } from './styles.js';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

export const Ratings = ({ count, onSelectRating }) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const selectRating = (selected) => {
        setSelectedRating(selected);
        if (onSelectRating) {
            onSelectRating(selected)
        }
    }
    return (
        <View style={styles.ratingsContainer}>
            {
                [...Array(count).keys()].map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => selectRating(index + 1)}
                            style={styles.ratingItem}
                        >
                            <MaterialIcons
                                name={selectedRating > index ? "star" : "star-outline"}
                                size={43}
                                color={Colors.PRIMARY}
                            />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
};
