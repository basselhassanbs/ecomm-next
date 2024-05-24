import { addItem, useAppDispatch, useAppSelector } from '@/store';
import { Item } from '@/types';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const dispatch = useAppDispatch();

  const handleItemClick = () => {
    dispatch(addItem(item));
  };
  return (
    <div
      className='max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100 cursor-pointer'
      onClick={handleItemClick}
    >
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{item.name}</div>
        <p className='text-gray-700 text-base'>{item.description}</p>
        <div className='text-gray-600 mt-4'>{item.price}</div>
      </div>
    </div>
  );
}
