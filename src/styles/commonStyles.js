import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Colors from './colors'
export const multipleTextBoxRow = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const fullTextBox = {
    width: Spacing.FULL_TEXTBOX_WIDTH,
}

export const spinnerTextStyle = {
    color: Colors.BUTTON_FONT_COLOR
}

export const error = {
    color: Colors.ALERT,
    fontSize: Typography.FONT_SIZE_14,
    marginTop: Spacing.SCALE_5
}
