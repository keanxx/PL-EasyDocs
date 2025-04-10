import React from 'react'

import { Avatar } from '@mui/material'

const UserProfile = () => {
  return (
    <div className='w-full h-auto py-5 px-5 flex justify-end'>
      <p className='font-semibold text-xl pr-3'>Hello, user</p>
      <span>
      <Avatar src="/broken-image.jpg" />
      </span>
    </div>
  )
}

export default UserProfile