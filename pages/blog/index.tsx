import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className='navbar'>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about" >about me</Link>
        </li>
        <li>
            <Link href="/blog">Blog</Link>
        </li>
    </div>
    </main>
  )
}