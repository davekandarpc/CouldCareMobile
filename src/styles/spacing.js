import {scaleSize} from './mixins';
import {Dimensions, Platform} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WIDNOW_HEIGHT = Dimensions.get('window').height;

export const SCALE_56 = scaleSize(56);
export const SCALE_50 = scaleSize(50);
export const SCALE_45 = scaleSize(45);
export const SCALE_24 = scaleSize(24);
export const SCALE_22 = scaleSize(22);
export const SCALE_20 = scaleSize(20);
export const SCALE_18 = scaleSize(18);
export const SCALE_16 = scaleSize(16);
export const SCALE_12 = scaleSize(12);
export const SCALE_14 = scaleSize(14);
export const SCALE_10 = scaleSize(10);
export const SCALE_8 = scaleSize(8);
export const SCALE_5 = scaleSize(5);
export const SCALE_2 = scaleSize(2);
export const SCALE_1 = scaleSize(1);

export const COMPONENT_WIDTH = Platform.isPad ? '48%' : '100%';
export const COMPONENT_WIDTH_3 = Platform.isPad ? '30%' : '48%';

export const HALF_TEXTBOX_WIDTH = '48%';
export const FULL_TEXTBOX_WIDTH = '100%';
export const QUARTER_TEXTBOX_WIDTH = '24%';
