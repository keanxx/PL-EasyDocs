import React from 'react'
import react from '../assets/react.svg'

const Header = () => {
  return (
    <div className='w-full h-auto py-5 flex justify-end'>
      <p className='font-semibold text-xl pr-3'>Hello, user</p>
      <span>
        <img src={react} alt="React logo" />
      </span>
    </div>
  )
}

export default Header