import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders mealsearch', () => {
  render(<App />);
  const element = screen.getByText(/MealSearch/);
  expect(element).toBeInTheDocument();
});


test('renders placeholder input', () => {
  render(<App />);
  const element = screen.getByPlaceholderText(/Search for recipes.../);
  expect(element).toBeInTheDocument();
});