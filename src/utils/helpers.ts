import { Item } from '@/types';

export const filterItemsByName = (items: Item[], searchTerm: string) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortItems = (items: Item[], sortBy: string) => {
  if (sortBy == 'price') {
    return items.sort((a, b) => a.price - b.price);
  } else if (sortBy == 'name') {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }
};

export const filterByPriceRange = (min: number, max: number, items: Item[]) => {
  return items.filter((item: Item) => item.price >= min && item.price <= max);
};
