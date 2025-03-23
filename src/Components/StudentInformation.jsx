import React from 'react'

const StudentInformation = () => {
  return (
    <div className='w-full mx-auto p-5'>
      {/* Title Section */}
      <div className="flex flex-wrap justify-between items-start">
        <h2 className="text-xl font-bold">STUDENT INFORMATION</h2>
        <p className="text-sm text-gray-600">Date: 11/11/2024</p>
      </div>

      {/* Student Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
        {/* Left Side */}
        <div className='flex flex-col gap-y-3'>
          <p className="font-bold text-lg">Student ID: 
            <span className="font-normal break-words"> 210190</span>
          </p>
          <p className="font-bold text-lg">Surname: 
            <span className="font-normal break-words"> Rafer</span>
          </p>
          <p className="font-bold text-lg">First Name: 
            <span className="font-normal break-words"> Jhon Brayn</span>
          </p>
          <p className="font-bold text-lg">Middle Initial: 
            <span className="font-normal break-words"> D.</span>
          </p>
        </div>

        {/* Right Side */}
        <div className='flex flex-col gap-y-3'>
          <p className="font-bold text-lg">Email: 
            <span className="font-normal break-words"> jhonbraynrafer@mabinicolleges.edu.ph</span>
          </p>
          <p className="font-bold text-lg">Contact No: 
            <span className="font-normal break-words"> 09319913997</span>
          </p>
          <p className="font-bold text-lg">Course: 
            <span className="font-normal break-words"> Bachelor of Science in Computer Science</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentInformation
