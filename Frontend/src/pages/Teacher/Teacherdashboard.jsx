import React, {useEffect} from 'react'
import TeacherSidebar from '../../components/Teacher/TeacherSidebar'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";


function Teacherdashboard() {
  const username = useSelector(state => state.username);
  
  // useEffect(() => {
  //   console.log(username);
  // }, [])

  return (
    <div>
      <TeacherSidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-wrap p-4 border-1 border-gray-100 rounded-lg dark:border-gray-700 mt-14">
      <div className='m-2 w-64'>
        <Link to="/teacher/course" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Courses</h5>
          <p class="font-normal text-center text-gray-700 dark:text-gray-400">1</p>
          <p class="font-normal text-center text-gray-700 dark:text-gray-400 u">View</p>
        </Link>
      </div>
      <div className='m-2 w-64 '>
        <Link to="/teacher/allstudents" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Students</h5>
          <p class="font-normal text-center text-gray-700 dark:text-gray-400">7</p>
          <p class="font-normal text-center text-gray-700 dark:text-gray-400">View</p>
        </Link>
      </div>
      <div className='m-2 w-64 '>
        <Link to="/teacher/enrollstudent" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Courses Enrolled</h5>
          <p class="font-normal text-center text-gray-700 dark:text-gray-400">5</p>
          <p class="font-normal text-center text-gray-700 dark:text-gray-400">View</p>
        </Link>
      </div>
      </div>
    </div>
    </div>

  )
}

export default Teacherdashboard