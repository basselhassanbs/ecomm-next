import Navbar from '@/components/Navbar';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Navbar', () => {
  it('renders links', () => {
    render(<Navbar />);

    const link = screen.getByText('Home');
    const link2 = screen.getByText('Cart');

    expect(link).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
  });
});
