import React from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import StepIndicator from 'react-native-step-indicator';
import { Typography } from '../../../styles';
import { TENANT_ID, dynamicConfig } from '../../../config/settings';
let steps = dynamicConfig[TENANT_ID].signUp.SERVICE_PROVIDER.stepper
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#3098f3',
    stepStrokeWidth: 3,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: '#3098f3',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#3098f3',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#3098f3',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: Typography.FONT_SIZE_12,
    currentStepIndicatorLabelFontSize: Typography.FONT_SIZE_12,
    stepIndicatorLabelCurrentColor: '#3098f3',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: Typography.FONT_SIZE_12,
    currentStepLabelColor: '#3098f3',
};

export const DocStepsView = ({ activeStep }) => {
    if (!steps) {
        return null
    } else {
        return (
            <View style={styles.titleView}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={activeStep}
                    labels={steps}
                    stepCount={steps.length}
                />
            </View>
        );
    }
};