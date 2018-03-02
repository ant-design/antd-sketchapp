import React from 'react';
import { Svg } from 'react-sketchapp-compatible';

const { G, Path } = Svg;

export default props => (
  <Svg width="6px" height="2px" viewBox="0 0 6 2" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <G
      // strokeWidth="1"
      fill={props.color}
    >
      <Path d="M10.5744062,8 L3.42559375,8 C3.11001042,8 3,8.44771875 3,9 C3,9.55228125 3.11001042,10 3.42559375,10 L10.5744062,10 C10.8899896,10 11,9.55228125 11,9 C11,8.44771875 10.8899896,8 10.5744062,8 L10.5744062,8 Z" />
    </G>
  </Svg>
);
