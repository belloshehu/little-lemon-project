import { render, screen } from '@testing-library/react';
import App from './App';
import Hero from './components/Hero';
import Featured from './components/Featured';

test('renders learn react link', () => {
  render(<Featured />);
  const linkElement = screen.getByText(/This week's specials/i);
  expect(linkElement).toBeInTheDocument();
});


