import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App'
import '@testing-library/jest-dom/extend-expect';

beforeEach(()=>{
  render(<App />);
})

describe ('test de App',()=>{
  test('render "Acción Femenina " title', () => {
    const title = screen.getAllByText(/Acción Femenina/i);
  });

  test('render a heading', () => {
    const title = screen.getAllByRole('heading', {level: 3});
  });

  test('render a listitem', () => {
    const li = screen.findByText(('listitem', {name:/Vivienda/i }));
  })
})
