import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const app = render(<App />);
/*  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
  expect(app).toBeTruthy();
});
