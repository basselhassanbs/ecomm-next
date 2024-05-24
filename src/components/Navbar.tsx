import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='sticky top-0 flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4'>
      <div className='flex w-full flex-wrap items-center justify-between px-4'>
        <div className='flex gap-3'>
          <Link href='/'>Home</Link>
          <Link href='/cart'>Cart</Link>
        </div>
      </div>
    </nav>
  );
}
