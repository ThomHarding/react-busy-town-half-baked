import { render, screen } from '@testing-library/react';
import App from './App';

test('looks for bus button', () => {
  render(<App />);
  const linkElement = screen.getByText('Bus');
  expect(linkElement).toBeInTheDocument();
});
