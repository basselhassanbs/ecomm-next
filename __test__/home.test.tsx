import Navbar from '@/components/Navbar';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Item } from '@/types';

import fetchMock from 'jest-fetch-mock';
import StoreProvider from '@/store/storeProvider';
import Home from '@/app/page';
fetchMock.enableMocks();

describe('Home page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders items', async () => {
    const items: Item[] = [
      { id: 1, name: 'item 1', description: 'description', price: 10 },
      { id: 2, name: 'item 2', description: 'description', price: 20 },
      { id: 3, name: 'item 3', description: 'description', price: 30 },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(items));

    const resolved = await Home();
    const { getByText } = render(<StoreProvider>{resolved}</StoreProvider>);

    expect(getByText('item 1')).toBeInTheDocument();
    expect(getByText('item 2')).toBeInTheDocument();
    expect(getByText('item 3')).toBeInTheDocument();
  });
});
