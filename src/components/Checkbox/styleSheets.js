import { StyleSheet } from 'react-sketchapp-compatible';
import { checkbox } from '../../theme';

export const defaultStyle = StyleSheet.create({
  box: {
    // box
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxSizing: 'border-box',
    paddingVertical: checkbox.paddingVertical,
    paddingHorizontal: checkbox.paddingHorizontal,

    // background
    backgroundColor: checkbox.defaultBackground,

    // border
    borderWidth: checkbox.borderWidth,
    borderColor: checkbox.borderColor,
    borderRadius: checkbox.borderRadius,
  },

  check: {
    color: checkbox.defaultBackground,
  },
});

export const focusStyle = StyleSheet.create({
  box: {
    // border
    borderColor: checkbox.focusBorderColor,
  },
});

export const checkedStyle = StyleSheet.create({
  box: {
    // background
    backgroundColor: checkbox.checkedBackground,

    // border
    borderColor: checkbox.checkedBorderColor,
  },
});

export const disabledStyle = StyleSheet.create({
  box: {
    // background
    backgroundColor: checkbox.disabledBackground,
    borderColor: checkbox.borderColor,
  },
  check: {
    color: checkbox.disabledBackground,
  },
});

export const indeterminateStyle = StyleSheet.create({
  box: {
    // background
    backgroundColor: checkbox.checkedBackground,

    // border
    borderColor: checkbox.checkedBorderColor,

    paddingVertical: checkbox.paddingVertical + 2.5,
    // paddingHorizontal: checkbox.paddingHorizontal,
  },
});

export const disabledCheckedStyle = StyleSheet.create({
  box: {
    // background
    backgroundColor: checkbox.disabledBackground,
    borderColor: checkbox.borderColor,
  },
  check: {
    color: checkbox.disabledCheckColor,
  },
});
