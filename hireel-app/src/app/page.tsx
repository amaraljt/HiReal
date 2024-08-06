// app/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HiReel',
}

export default function Page(){
  return <Link href="/login"> Hello, Home Page! </Link>
}
