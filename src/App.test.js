import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not render abc text', () => {
  const { queryByText } = render(<App />);
  const linkElement = queryByText(/abc/i);
  expect(linkElement).not.toBeInTheDocument()
});