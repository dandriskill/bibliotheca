import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', ()=> {
  test('renders App', () => {
    const { getByText } = render(<App />);
    const appTitleNode = getByText(/bibliotheca/i);
    expect(appTitleNode).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const container = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
