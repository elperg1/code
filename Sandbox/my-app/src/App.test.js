import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PostProvider } from './context/PostContext';

test('renders my posts heading', () => {
  render(
    <BrowserRouter>
      <PostProvider>
        <App />
      </PostProvider>
    </BrowserRouter>
  );
  const heading = screen.getByText(/my posts/i);
  expect(heading).toBeInTheDocument();
});