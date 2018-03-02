import { StyleSheet } from 'react-sketchapp';
import { table, colors } from '../../theme';

export const BORDER_RADIUS = table.borderRadius;

export const normalStyle = StyleSheet.create({
  expansion: {
    width: 16,
    height: 16,
    borderWidth: table.borderWidth,
    borderColor: table.borderColor,
    boxSizing: 'border-box',
    borderRadius: 2,
  },
  table: {
    backgroundColor: 'transparent', // 激活 shape
    boxSizing: 'border-box',
  },
  tbody: {},
  thead: {},
  tr: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
  },
  td: {
    backgroundColor: 'transparent',
    borderBottomWidth: table.borderWidth,
    borderBottomColor: colors.borderColorSplit,
    borderStyle: 'solid', // solid | dotted | dashed
    paddingVertical: table.paddingVertical,
    paddingHorizontal: table.paddingHorizontal,
    flex: 1,
  },
  th: {
    backgroundColor: colors.backgroundColorLight,
  },
  tdText: {
    // textAlign: 'left',
    fontWeight: table.tdFontWeight,
    color: table.fontColor,
    fontSize: table.fontSize,
    fontFamily: 'PingFang SC',
    lineHeight: table.lineHeight,
  },
  thText: {
    fontWeight: table.thFontWeight,
    color: table.thFontColor,
    fontFamily: 'PingFang SC',
    lineHeight: table.lineHeight,
  },
  title: {
    borderTopLeftRadius: table.borderRadius,
    borderTopRightRadius: table.borderRadius,
    paddingVertical: table.paddingVertical,
    paddingHorizontal: table.paddingHorizontal,
    paddingLeft: 0,
  },
  titleText: {
    color: table.fontColor,
    fontFamily: 'PingFang SC',
    lineHeight: table.lineHeight,
  },
  footer: {
    backgroundColor: colors.backgroundColorLight,
    borderBottomLeftRadius: table.borderRadius,
    borderBottomRightRadius: table.borderRadius,
    paddingVertical: table.paddingVertical,
    paddingHorizontal: table.paddingHorizontal,
  },
  footerText: {
    color: table.fontColor,
    fontFamily: 'PingFang SC',
    lineHeight: table.lineHeight,
  },
});

export const borderedStyle = StyleSheet.create({
  table: {
    borderWidth: table.borderWidth,
    borderColor: table.borderColor,
    borderStyle: 'solid', // solid | dotted | dashed
  },
  tr: {
    paddingHorizontal: 0,
  },
  title: {
    paddingLeft: table.paddingHorizontal,
    borderBottomColor: table.borderColor,
    borderBottomWidth: table.borderWidth,
  },
  td: {
    borderRightWidth: table.borderWidth,
    borderRightColor: table.borderColor,
  },
});

export const middleSizeStyle = StyleSheet.create({
  td: {
    paddingVertical: table.paddingVerticalMiddle,
    paddingHorizontal: table.paddingHorizontalMiddle,
  },
  title: {
    paddingVertical: table.paddingVerticalMiddle,
  },
  footer: {
    paddingVertical: table.paddingVerticalMiddle,
  },
});

export const smallSizeStyle = StyleSheet.create({
  table: {
    borderWidth: table.borderWidth,
    borderColor: table.borderColor,
    borderStyle: table.borderStyle, // solid | dotted | dashed
  },
  tr: {
    paddingHorizontal: table.paddingHorizontalSmall,
  },
  th: {
    backgroundColor: '#fff',
    paddingVertical: table.paddingVerticalSmall,
  },
  td: {
    paddingVertical: table.paddingVerticalSmall,
    paddingHrizontal: table.paddingHorizontalSmall,
  },
  title: {
    paddingVertical: table.paddingVerticalSmall,
    paddingHorizontal: table.paddingHorizontalSmall,
    borderBottomColor: table.borderColor,
    borderBottomWidth: table.borderWidth,
  },
  footer: {
    paddingVertical: table.paddingVerticalSmall,
  },
});
