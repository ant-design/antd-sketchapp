import { StyleSheet } from 'react-sketchapp';
import { pagination, colors } from '../../theme';

export const paginationStyle = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export const defaultItemStyle = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: pagination.borderColor,
    borderRadius: pagination.borderRadius,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    width: pagination.itemSize,
    height: pagination.itemSize,
  },
  text: {
    color: colors.text,
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    lineHeight: pagination.fontSize,
  },
});

export const itemIconStyle = {
  default: {
    color: colors.text,
    width: 6,
    height: 9,
  },
  disabled: {
    color: colors.disabled,
  },
};

export const smallItemStyle = StyleSheet.create({
  view: {
    borderColor: 'transparent',
    marginRight: 0,
    width: pagination.itemSizeSmall,
    height: pagination.itemSizeSmall,
  },
  text: {
    lineHeight: pagination.itemSizeSmall,
  },
});

export const activeItemStyle = StyleSheet.create({
  view: {
    borderColor: pagination.borderColorActive,
  },
  text: {
    color: colors.primary,
  },
});

export const disabledItemStyle = StyleSheet.create({
  view: {
    borderColor: colors.disabled,
  },
  text: {
    color: colors.disabled,
  },
});

export const defaultEllipsisStyle = StyleSheet.create({
  view: {
    borderColor: 'transparent',
  },
});

export const ellipsisIconStyle = {
  default: {
    color: 'rgba(0, 0, 0, 0.25)',
    width: 18,
    height: 3,
  },
};
