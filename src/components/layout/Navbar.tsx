import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' bg-Primary h-[60px]'>
        <div className=' container flex items-center justify-between h-full text-white px-4'>
            <div>
                <h2 className='text-[22px] font-bold'>Say Hi</h2>
            </div>
            <div className=' flex gap-5'>
                <Link className='text-[18px]' to={'/login'}>Login</Link>
                <Link className='text-[18px]' to={'/signup'}>Signup</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar