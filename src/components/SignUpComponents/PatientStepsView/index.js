import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles.js';
import { Typography, Colors } from '../../../styles';
import StepIndicator from 'react-native-step-indicator';
import { TENANT_ID, dynamicConfig } from '../../../config/settings';
let steps = dynamicConfig[TENANT_ID].signUp.PATIENT.stepper
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: Colors.PRIMARY,
    stepStrokeWidth: 3,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: Colors.PRIMARY,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: Colors.PRIMARY,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: Colors.PRIMARY,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: Typography.FONT_SIZE_12,
    currentStepIndicatorLabelFontSize: Typography.FONT_SIZE_12,
    stepIndicatorLabelCurrentColor: Colors.PRIMARY,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: Typography.FONT_SIZE_12,
    currentStepLabelColor: Colors.PRIMARY,
};

export const PatientStepsView = ({ activeStep }) => {
    return (
        <View style={styles.titleView}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={activeStep}
                labels={steps}
                stepCount={steps.length}
            // labels={['Login', 'Account', 'Medical', 'Dependants', 'Payments']}
            />
        </View>
    );
};