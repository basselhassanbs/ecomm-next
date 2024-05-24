'use client';
import { useAppSelector } from '@/store';

export default function Cart() {
  const data = useAppSelector((state) => state.cart.data);

  const calculateTotalPrice = () => {
    return data.reduce((res, item) => res + item.price * item.count, 0);
  };

  return (
    <div className='w-1/2'>
      <h1 className='font-bold text-xl mb-2'>Your cart</h1>
      <div className='p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-2'>
        {data.length ? (
          <>
            {data.map((item) => (
              <div className='flex flex-col' key={item.id}>
                <div className='flex justify-between'>
                  <h2 className='font-bold text-lg'>{item.name}</h2>

                  <p className='w-20'>Count: {item.count}</p>
                </div>
                <p className='text-gray-500'>{item.price}</p>
              </div>
            ))}
            <div>
              <h2 className='font-bold text-lg'>Total</h2>
              <p className='text-gray-500'>{calculateTotalPrice()}</p>
            </div>
          </>
        ) : (
          <h1>No items to display!</h1>
        )}
      </div>
    </div>
  );
}
