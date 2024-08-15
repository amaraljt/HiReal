// app/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar.tsx';

export const metadata: Metadata = {
  title: 'HiReel',
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Link href="/login"> Hello, Home Page! </Link>
    </div>
  )
}
