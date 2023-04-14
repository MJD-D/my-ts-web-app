import Image from 'next/image'
import profilePic from '../public/profilepic.jpeg'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='page-container'>
      <div className='navbar bg-gray-500'>
        <li>
            <Link className="hover:underline" href="/">Home</Link>
        </li>
        <li>
            <Link className="hover:underline" href="/about" >About me</Link>
        </li>
        <li>
            <Link className="hover:underline" href="/blog">Blog</Link>
        </li>
      </div>
      <div className='bg-gray-400'>
        <title>Matthew James Douglas-Dalby</title>
        <p className="text-2xl font-semibold hover:underline"> Matthew James Douglas-Dalby</p>
      <div className='image-container bg-gray-400'>
      <Image src={profilePic}
      alt="picture of Matthew J Douglas-Dalby"
      />
      <div className='skills-container'>
        <h2> key skills</h2>
        <li>
        strong understanding of UX principles and UI design
        </li>
        <li>
        Strong understanding of component based design models
        </li>
        <li>
        Proficient with React, Vue, JS, java, C, Python
        </li>
      </div>
      </div>
        
      </div>
      <div className='contact-details bg-gray-500 '>
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
