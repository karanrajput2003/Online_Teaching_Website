import React, { useState } from 'react'
import { Link } from 'react-router-dom';



function StudentSidebar(props) {
  console.log(props.less);
  return (
   <>
      <div className='h-full w-1/5 w-auto p-10 mt-10 mx-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h1 className='text-center font-bold text-xl p-4'>Course Outline<hr/></h1>
        { props.less && props.less.map((c) => (
         <p className='text-center text-xl p-3'><Link to={`/student/watchcourse?lesson_id=${c._id}`}>{c.lesson_name}</Link></p>

        ))}

      </div>
   </>
  )
}

export default StudentSidebar