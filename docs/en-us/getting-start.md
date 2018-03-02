## Getting Start

### Project Structure

- lib / / package generated after the build, use for other plugins
- docs // document directory
- src // source
  - components // component directory
    - Common // common components
    - Button
    - Chekbox
    - ...
  - theme // theme directory
    - color // color directory
      - colorPalette.js / / color swatch generator functions
      - colors.js // default theme color
      - index.js // Component style variable configuration
  - demo.js // Sample presentation file for debugging and viewing in Sketch
  - manifest.json // Sketch plugin configuration file
- .babelrc
- .eslintignore
- .eslintrc
- .gitignore
- index.js
- package.json
- HISTORY.md
- README.md

### Schematic

! [structure] (https://gw.alipayobjects.com/zos/rmsportal/LtwAZWicJsrfoNQjoyGq.svg)

### basic concept

Relying on the ability of React Sketch.app to build UIs from React in Sketch, we implemented a UI library based on the Ant Design language and built the Ant Design UI in Sketch.

As we get rich in components, we'll gradually cover all the Ant Design components, and if you want to design your own system with the design language Ant Design, you'll be able to generate it in the near future by a visually configurable code system, because the code has the logic and data capabilities, so the efficiency will be greatly improved.

At present, we have realized the most basic layout components Grid, as well as complex commonly used Table, Icon and other components, the entire structural system more perfect, the theme of the configuration is also built, but we also need to gradually complement the remaining other components to enrich our component library .

### Use directly

After installing the `antd-sketchapp 'dependency package, you only need to write it into your plugin as follows:

`` `jsx
import React from 'react';
import {View} from 'react-sketchapp';
import {Button} from 'antd-sketchapp';

const renderButton = (name, Component) => {
  return () => {
    render (
      <Artboard
        name = {`antd-sketchapp $ {name}`}
        style = {{
          padding: 40,
        }}
      >
        <Button type = "dashed" text = "disabled-dashed-ghost" ghost />
      </ Artboard>,
      context.document.currentPage ()
    );
  };
};


export const renderButton = renderButton;
`` `

Then specify the command in `manifest.json`, you can click on the command to create the Button.

`` `json
{
  "name": "antd-sketchapp",
  "compatibleVersion": 3,
  "bundleVersion": 1,
  "commands": [
    {
      "name": "Button",
      "identifier": "Button",
      "script": "./demo.js",
      "handler": "renderButton"
    },
`` `

### Learn more plugins development

- [sketch plug-in community] (http://sketchplugins.com/)
- [sketch developer] (http://developer.sketchapp.com/)