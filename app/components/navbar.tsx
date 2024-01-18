import Link from 'next/link'
import React from 'react'
import Search from './Search'

function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
      <h1 className='text-3xl font-bold text-white grid plcae-content-center mb-2 md:mb-0'>
        <Link href='/'>
            WikiResults!
        </Link>
      </h1>
      <Search/>
    </nav>
  )
}

export default Navbar
