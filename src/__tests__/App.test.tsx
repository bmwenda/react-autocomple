import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../components/App.tsx';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      entries: [
        {
          API: 'name of api',
          Description: 'description'
        }
      ]
    }),
  })
);

test('renders correctly', () => {
  render(<App />);

  const header = screen.getByText(/Search Public APIs/i);
  const searchBox = screen.getByPlaceholderText(/Search/i);

  expect(header).toBeInTheDocument();
  expect(searchBox).toBeInTheDocument();
});

test('selects user input', async () => {
  render(<App />);

  const searchBox = screen.getByPlaceholderText(/Search/i);
  fireEvent.click(searchBox);

  await waitFor(() => {
    expect(screen.getByText(/name of api/i)).toBeInTheDocument();
  })
});
