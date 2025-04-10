import React from 'react'
import { ChevronLeft } from '@mui/icons-material'
import CustomButton from '../Components/CustomButton'

const History = () => {
  return (
    <>
     <div className='w-full py-5'>
     <div className="flex space-x-2 py-5 justify-start">
                    <CustomButton to="/dashboard" icon={ChevronLeft}>
                        Back
                    </CustomButton>
                </div>
        <div className='flex w-full'>

            <div className='w-[23%] '>

            </div>


        </div>
      
      </div>
    </>
   
  )
}

export default History
