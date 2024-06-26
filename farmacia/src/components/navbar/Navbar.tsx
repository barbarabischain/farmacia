import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {

  return (
    <>
      <div className='w-full bg-purple-800 text-white flex justify-center py-4 '>
        <div className="container flex justify-between text-lg">

          <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/home' className='hover:underline'>Home</Link>
            <div className='hover:underline'>Produtos</div>
            <div className='hover:underline'>Sair</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar