import { StyleSheet } from 'react-sketchapp-compatible';
import { button, colors } from '../../theme';

export const defaultStyle = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: button.fontSize,
    lineHeight: button.fontSize,
    fontFamily: 'PingFang SC',
    textAlign: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: button.defaultBackground,
    borderWidth: button.borderWidth,
    borderColor: button.borderBase,
    boxSizing: 'border-box',
    borderRadius: button.borderRadius,
    paddingVertical: button.paddingVertical,
    paddingHorizontal: button.paddingHorizontal,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export const primaryStyle = StyleSheet.create({
  text: {
    color: button.primaryColor,
  },
  button: {
    borderColor: button.primaryBackground,
    backgroundColor: button.primaryBackground,
  },
});

export const dangerStyle = StyleSheet.create({
  text: {
    color: button.dangerColor,
  },
  button: {
    backgroundColor: button.dangerBackground,
    borderColor: button.borderBase,
  },
});

export const dashedStyle = StyleSheet.create({
  button: {
    borderStyle: 'dashed',
  },
});

export const ghostDefaultStyle = StyleSheet.create({
  text: {
    color: button.primaryColor,
  },
  button: {
    borderColor: button.primaryColor,
    backgroundColor: 'transparent',
  },
});

export const ghostPrimaryStyle = StyleSheet.create({
  text: {
    color: button.primaryBackground,
  },
  button: {
    borderColor: button.primaryBackground,
    backgroundColor: 'transparent',
  },
});

export const ghostDangerStyle = StyleSheet.create({
  text: {
    color: button.dangerColor,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: button.dangerColor,
  },
});

export const ghostDashedStyle = ghostDefaultStyle;

export const circleStyle = StyleSheet.create({
  button: {
    borderRadius: 60,
  },
});

export const disabledStyle = StyleSheet.create({
  text: {
    color: colors.disabled,
  },
  button: {
    backgroundColor: button.backgroundBase,
    borderColor: button.borderBase,
  },
});

export const smallSizeStyle = StyleSheet.create({
  button: {
    paddingVertical: button.paddingVerticalSmall,
    paddingHorizontal: button.paddingHorizontalSmall,
  },
});

export const largeSizeStyle = StyleSheet.create({
  button: {
    paddingVertical: button.paddingVerticalLarge,
  },
  text: {
    fontSize: button.fontSize + 2,
  },
});
