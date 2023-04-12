import Image from 'next/image'
import profilePic from '../public/profilepic.jpeg'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className='navbar'>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about" >About me</Link>
        </li>
        <li>
            <Link href="/blog">Blog</Link>
        </li>
      </div>
      <div>
        <title>Matthew James Douglas-Dalby</title>
        <h1> Matthew James Douglas-Dalby</h1>

      <Image src={profilePic}
      alt="picture of Matthew J Douglas-Dalby"
      />
        
      </div>
      <div className='contact-details'>
        <div>
          email
        </div>
        <div>
          linkedin
        </div>
        <div>
          mobile number
        </div>
      </div>
    </main>
  )
}
