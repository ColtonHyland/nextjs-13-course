import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage