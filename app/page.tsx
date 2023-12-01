import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="mb-5">app/page</h1>

      <h1 className="mb-5">Home Page</h1>

      <div className='flex flex-col'>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/docs'}>Docs</Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/orders/new'}>New Order</Link>
      </div>
    </>
  );
}
