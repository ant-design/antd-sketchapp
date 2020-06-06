import { StyleSheet } from 'react-sketchapp';
import { list, colors } from '../../theme';

export const defaultStyle = StyleSheet.create({
  view: {
  },
  text: {
    color: list.fontColor,
    fontSize: list.fontSize,
    lineHeight: list.lineHeight,
  },
  borderedStyle: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.borderColorBase,
    borderRadius: list.borderRadius,
  },
});

export const defaultItemStyle = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.borderColorSplit,
    paddingVertical: list.defaultPadding,
  },
  paddingView: {
    paddingLeft: list.defaultPadding,
    paddingRight: list.defaultPadding,
  },
  text: {
    fontSize: list.fontSize,
  },
});

export const headerStyle = StyleSheet.create({
  view: {
    paddingTop: list.defaultPadding,
  },
  paddingView: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.borderColorBase,
    paddingLeft: list.defaultPadding,
    paddingRight: list.defaultPadding,
    paddingBottom: list.defaultPadding,
  },
  text: {
  },
});

export const footerStyle = StyleSheet.create({
  view: {
    paddingVertical: list.defaultPadding,
  },
  paddingView: {
    paddingLeft: list.defaultPadding,
    paddingRight: list.defaultPadding,
  },
  text: {
  },
});

