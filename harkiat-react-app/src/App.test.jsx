
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Vite + React" text', () => {
  render(<App />);
  const textElement = screen.getByText(/vite \+ react/i); // Case insensitive search for "Vite + React"
  expect(textElement).toBeInTheDocument();
});
