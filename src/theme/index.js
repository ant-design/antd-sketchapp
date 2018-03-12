import tinycolor from 'tinycolor2';

// import less from 'less/lib/less/functions';
import baseColors from './color/colors';
// import colorPalette from './color/colorPalette';

const theme = {
  prefix: 'ant',
};

// colors
export const colors = {
  backgroundColorLight: tinycolor('hsv(0, 0, 98%)').toHexString(),
  backgroundColorBase: tinycolor('hsv(0, 0, 96%)').toHexString(),
  borderColorBase: tinycolor('hsv(0, 0, 85%)').toHexString(),
  borderColorSplit: tinycolor('hsv(0, 0, 91%)').toHexString(),
  primary: baseColors.blue6,
  info: baseColors.blue6,
  success: baseColors.green6,
  processing: baseColors.blue6,
  error: baseColors.red6,
  highlight: baseColors.red6,
  warning: baseColors.gold6,
  normal: '#d9d9d9',
  text: 'rgba(0, 0, 0, 0.65)',
  disabled: 'rgba(0, 0, 0, 0.25)', // less.functionRegistry.fade('#000', '25%'),
};

Object.keys(baseColors).forEach((key) => {
  colors[key] = baseColors[key];
});

theme.colors = colors;

// checkbox
export const checkbox = {
  // box
  paddingVertical: 3,
  paddingHorizontal: 2.5,

  // border
  borderWidth: 1,
  borderRadius: 2,
  borderColor: colors.borderColorBase,
  focusBorderColor: colors.primary,
  checkedBorderColor: colors.primary,

  // background
  defaultBackground: '#fff',
  checkedBackground: colors.primary,
  disabledBackground: colors.backgroundColorBase,

  disabledCheckColor: '#b8b8b8',
};

theme.checkbox = checkbox;

// table
export const table = {
  borderColor: colors.borderColorSplit,
  borderRadius: 4,
  borderWidth: 1,
  borderStyle: 'solid',
  fontColor: 'rgba(0, 0, 0, 0.65)',
  thFontColor: 'rgba(0, 0, 0, 0.85)',
  fontSize: 14,
  thFontWeight: 500,
  tdFontWeight: 400,
  lineHeight: 21,
  // pading
  paddingVertical: 16,
  paddingHorizontal: 16,
  paddingVerticalSmall: 8,
  paddingHorizontalSmall: 8,
  paddingVerticalMiddle: 12,
  paddingHorizontalMiddle: 8,
};
theme.table = table;

// pagination
export const pagination = {
  borderRadius: 4,
  borderColor: theme.colors.normal,
  borderColorActive: theme.colors.primary,
  fontSize: 14,
  itemSize: 32,
  itemSizeSmall: 24,
};
theme.pagination = pagination;

// button
export const button = {
  borderRadius: 4,
  borderBase: colors.borderBase,
  borderWidth: 1,
  headerBackgroundColor: '#e9e9e9',
  fontColor: '#333',
  fontSize: 14,
  paddingVerticalSmall: 4,
  paddingHorizontalSmall: 8,
  paddingVertical: 8,
  paddingHorizontal: 16,
  paddingVerticalLarge: 12,
  paddingHorizontalLarge: 16,
  // default
  defaultBackground: '#fff',
  // primary
  primaryColor: '#fff',
  primaryBackground: colors.primary,
  // danger
  dangerColor: colors.error,
  dangerBackground: colors.backgroundColorBase,
  dangerBorder: colors.borderBase,
  // ghost
  ghostBorder: '#fff',
};
theme.button = button;

// list
export const list = {
  borderRadius: 4,
  defaultPadding: 12,
  fontSize: 14,
  lineHeight: 21,
  fontColor: colors.text,
};
theme.list = list;

export default theme;
