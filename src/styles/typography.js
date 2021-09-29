import { scaleFont } from './mixins';
import * as Colors from './colors'

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontWeight: FONT_WEIGHT_BOLD,
};

export const REGULAR_20 = {
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: FONT_SIZE_20
}

export const DESCRIPTION = {
    fontSize: FONT_SIZE_14,
    color: Colors.DESCRIPTION_COLOR
}

export const textBoxLabel = {
  fontSize: FONT_SIZE_16,
  fontWeight: FONT_WEIGHT_BOLD,
  marginBottom: scaleFont(7)
}

export const buttonText = {
  fontSize: FONT_SIZE_20,
  fontWeight: FONT_WEIGHT_BOLD,
}

export const screenTitle = {
  fontSize: FONT_SIZE_24,
  fontWeight: FONT_WEIGHT_BOLD
}

export const boldFont = {
  fontWeight: FONT_WEIGHT_BOLD
}

export const regularFont = {
  fontWeight: FONT_WEIGHT_REGULAR
}