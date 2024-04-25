import React from 'react'
import Button from '../Button'

function StudentQuizContent() {
  return (
    <>
      <div className='h-full w-3/5 w-auto p-10 mt-10 mx-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h1 className='font-bold text-2xl p-4'>Quiz Topic</h1>

        {/* <form>

        </form> */}
        

        <p className='p-4'>
        Until this point, you've only used JavaScript on the front end to add interactivity to a page, solve algorithm challenges, or build an SPA. But JavaScript can also be used on the back end, or server, to build entire web applications.Today, one of the popular ways to build applications is through microservices, which are small, modular applications that work together to form a larger whole. In the Back End Development and APIs Certification, you'll learn how to write back end apps with Node.js and npm. You'll also build web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.
        </p>
        <iframe className='p-4' width="560" height="315" src="https://www.youtube.com/embed/EHTWMpD6S_0?si=D1xqOETUBeJS6tvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Button name="Give Quiz" to="/student/givequiz" className="p-2" />
      </div>
   </>
  )
}

export default StudentQuizContent