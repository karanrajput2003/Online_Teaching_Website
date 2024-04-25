import React from 'react'
import Button from '../Button'

function CourseVideo(props) {
  return (
    <>
      <div className='h-full w-4/5 p-10 mt-10 mx-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h1 className='font-bold text-2xl p-4'>{props.name}</h1>
        <p className='p-4'>
        {props.desc}
        </p>
        <iframe className='p-4' width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Button name="Give Quiz" to={`/student/givequiz?lesson_id=${props.id}`} className="p-2" />
      </div>
   </>
  )
}

export default CourseVideo