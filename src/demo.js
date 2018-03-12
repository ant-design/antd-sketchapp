import React from 'react';
import { render, Artboard } from 'react-sketchapp';

import ButtonDemo from './components/Button/demo';
import CheckboxDemo from './components/Checkbox/demo';
import PaginationDemo from './components/Pagination/demo';
import TableDemo from './components/Table/demo';
import GridDemo from './components/Grid/demo';
import IconDemo from './components/Icon/demo';
import ListDemo from './components/List/demo';

const renderDemo = (name, Component) => {
  return () => {
    render(
      <Artboard
        name={`antd-sketchapp ${name}`}
        style={{
          padding: 40,
        }}
      >
        <Component />
      </Artboard>,
      context.document.currentPage()
    );
  };
};

export const Checkbox = renderDemo('Checkbox', CheckboxDemo);
export const Button = renderDemo('Button', ButtonDemo);
export const Pagination = renderDemo('Pagination', PaginationDemo);
export const Table = renderDemo('Table', TableDemo);
export const Grid = renderDemo('Grid', GridDemo);
export const Icon = renderDemo('Icon', IconDemo);
export const List = renderDemo('ListDemo', ListDemo);
