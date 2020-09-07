import React from 'react';
import { render } from '@testing-library/react';
import Library from './Library';
import { testBooks } from '../test-data';

describe('<Library />', () => {
  test('matches snapshot', () => {
    const container = render(<Library books={testBooks} />);
    expect(container).toMatchSnapshot();
  });

  test('shows books when "books" prop is populated', () => {
    const { queryByText } = render(<Library books={testBooks} />);
    expect(queryByText('The Prince')).toBeTruthy();
    expect(queryByText('Republic')).toBeTruthy();
    expect(queryByText('Oddyssey')).toBeTruthy();
    expect(queryByText('No volumes available.')).toBeFalsy();
  });

  test('shows fallback text when "books" prop is not populated', () => {
    const { queryByText } = render(<Library books={[]} />);
    expect(queryByText('Prince')).toBeFalsy();
    expect(queryByText('Republic')).toBeFalsy();
    expect(queryByText('Oddyssey')).toBeFalsy();
    expect(queryByText('No volumes available.')).toBeTruthy();
  });
});