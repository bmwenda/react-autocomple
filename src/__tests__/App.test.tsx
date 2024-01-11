import { render, screen } from '@testing-library/react';
import App from '../components/App';

// TODO: Test user flow events: focus, hover and click
test('renders correctly', () => {
  render(<App />);

  const header = screen.getByText(/Search Public APIs/i);
  const searchBox = screen.getByPlaceholderText(/Search/i);

  expect(header).toBeInTheDocument();
  expect(searchBox).toBeInTheDocument();
});
