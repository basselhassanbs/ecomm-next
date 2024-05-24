'use client';
import { Item } from '@/types';
import ItemCard from './ItemCard';
import { useEffect, useState } from 'react';
import {
  filterByPriceRange,
  filterItemsByName,
  sortItems,
} from '@/utils/helpers';

interface ItemsListProps {
  items: Item[];
}

export default function ItemsList({ items }: ItemsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  useEffect(() => {
    const timer = setTimeout(() => {
      applyFilter();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSortChange = (sortValue: string) => {
    if (sortValue) {
      setSortOrder(sortValue);
      const res = sortItems(filteredItems, sortValue);
      setFilteredItems(res || []);
    }
  };

  const applyFilter = () => {
    let res;
    res = filterItemsByName(items, searchTerm);

    if (sortOrder) {
      res = sortItems(res, sortOrder);
    }

    if (
      minPrice !== undefined &&
      maxPrice !== undefined &&
      minPrice >= 0 &&
      maxPrice >= 0 &&
      res
    ) {
      res = filterByPriceRange(minPrice, maxPrice, res);
    }

    setFilteredItems(res || []);
  };

  return (
    <div className='p-10'>
      <div className='flex gap-2 flex-wrap justify-center'>
        <input
          type='text'
          className='w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
          placeholder='Search by name...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          onChange={(e) => handleSortChange(e.target.value)}
          className='w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
        >
          <option value=''>Sort by</option>
          <option value='name'>Sort by name</option>
          <option value='price'>Sort by price</option>
        </select>
        <div className='flex gap-2 flex-wrap justify-center'>
          <input
            type='number'
            className='w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
            placeholder='Min price'
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
          <input
            type='number'
            className='w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
            placeholder='Max price'
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
          <button
            onClick={applyFilter}
            className='w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Apply
          </button>
        </div>
      </div>
      <div className='flex justify-center gap-6 flex-wrap mt-8'>
        {filteredItems.map((item: Item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
      {searchTerm && !filteredItems.length && (
        <h1 className='font-bold text-xl'>No Items found!</h1>
      )}
    </div>
  );
}
