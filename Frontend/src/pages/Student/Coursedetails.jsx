import React from 'react'
import StudentNavbar from '../../components/Student/StudentNavbar'
import { useSelector, useDispatch } from "react-redux";
import homeimg from '../../assets/559.jpg'
import axios from 'axios';
axios.defaults.withCredentials = true;
import { useLocation, Link } from 'react-router-dom';

import { useEffect, useState } from 'react'


function Coursedetails() {
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async () => {
    setIsLoading(true);
    await axios.post('http://localhost:8080/api/data/enrollcourse', {
      email: email,
      username: username,
      course_id: course[0]._id,
      course_name: course[0].course_name,
      course_author: course[0].course_author
    })
    .then(function (response) {
      console.log(response);
      setIsLoading(false)
      setErrorMessage("Course Enrolled Successfully");
    })
    .catch(function (error) {
      console.log(error);
      setIsLoading(false);
      setErrorMessage("Course Already Enrolled");

    });
  }

  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("course_id");

  const handleSubmit = async () => {
    // console.log(courseId);
    try {
      const res = await axios.get(
        `http://localhost:8080/api/data/getcoursedetails?course_id=${courseId}`);

      console.log(res.data);
      setCourse(res.data.course);
      setLesson(res.data.lesson);

    } catch (err) {
      setCourse(null);
      setLesson(null);
      console.log(err);
    }
  };

  useEffect(() => {
      handleSubmit();
  }, []);
  return (
    <>
      <StudentNavbar />
      <div className="mt-10 mx-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {course && 
    <div className='flex flex-wrap'>
    <Link to="">
        <img className="rounded-t-lg" src={course[0].course_image} alt="img" width="500px" />
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="p-5">
        <p href="#">
            Course Name:<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course[0].course_name}</h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course[0].course_description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author: <b>{course[0].course_author}</b></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration: <b>{course[0].course_duration}</b></p>
        {isLoading ?
        <button disabled={isLoading} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Loading..
        </button>
        :
        <button onClick={onSubmit} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Enroll Course
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>}
        {errorMessage && <div class="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span class="block sm:inline">{errorMessage}</span>
        </div>}
    </div>
    
    </div>
}

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-1000 uppercase bg-gray-1000 dark:bg-gray-700 dark:text-gray-1000">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Lesson No
                </th>
                <th scope="col" className="px-6 py-3">
                    Lesson Name
                </th>
            </tr>
        </thead>
        {lesson && lesson.map((l, index) => (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td className="px-6 py-4">
                    {l.lesson_name}
                </td>
            </tr>            
        </tbody>
      ))}
    </table>
</div>
    
</div>
    </>
  )
}

export default Coursedetails