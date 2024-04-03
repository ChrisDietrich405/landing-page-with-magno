import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title', () => {
  const { getByText } = render(<App />);
  const titleElement = screen.getByText(/Chris Dietrich/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders testimonials section', () => {
  const { getByText } = render(<App />);
  const testimonialsElement = screen.getByText(/O que estao dizendo?/i);
  expect(testimonialsElement).toBeInTheDocument();
});

test('renders price section', () => {
  const { getByText } = render(<App />);
  const priceElement = screen.getByText(/\$17\/hora/i);
  expect(priceElement).toBeInTheDocument();
});

