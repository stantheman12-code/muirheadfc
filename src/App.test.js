import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Muirhead FC page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Photo Gallery/);
  expect(linkElement).toBeInTheDocument();
});
