import React from 'react'
import Button from '../Button'

function StudentCourseInfo(props) {
  return (
    <div>
        <div className='h-full w-auto p-10 mt-10 mx-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href="#">
            Course Name:<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author: <b>{props.author}</b></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration: <b>{props.duration}</b></p>
        <Button name="Certificate" to="/student/givequiz" className="" />
      </div>
    </div>
  )
}

export default StudentCourseInfo