import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Muirhead Football Club text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Muirhead Football Club/i);
  expect(linkElement).toBeInTheDocument();
});
