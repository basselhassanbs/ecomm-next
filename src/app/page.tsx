import ItemCard from '@/components/ItemCard';
import ItemsList from '@/components/ItemsList';
import Image from 'next/image';

export default async function Home() {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/data.json`, {
    cache: 'no-store',
  });
  const items = await res.json();

  return <ItemsList items={items} />;
}
