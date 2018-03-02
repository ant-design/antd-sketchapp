import React from 'react';
import icons from './icons';

export default ({ type, style = {} }) => {
  const { color, width, height } = style;
  // 去除分隔符
  const IconTag = icons[type.replace(/-/g, '')];
  return <IconTag fill={color} width={width} height={height} />;
};
