import React from 'react'
import StudentNavbar from '../../components/Student/StudentNavbar'
import Card from '../../components/Card'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import homeimg from '../../assets/559.jpg'
import { useEffect, useState } from "react";
import axios from "axios";

function Allcourse() {
  const [course, setCourse] = useState(null);
  const email = useSelector((state) => state.email);


  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/data/enrollcourse", {
        params: {
          email: email,
        }
      });
  
      let data = res.data;
      // console.log(data);

      setCourse(res.data.course);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <StudentNavbar />
      {course ? 
      <h1 className='mt-10 mb-4 mx-14 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl dark'>My Courses:</h1> 
        :
        <div class="mt-10 mb-4 mx-14 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4" role="alert">
        <span class="block">No Course Found</span>
        <Link to='/student/course' class="block">
          <b>Go to Courses </b>
        </Link>
          </div>
      }
      <div className='flex flex-wrap'>
        {course && course.map((c) => (
        <Card src={c.course_image} title={c.course_name} description={c.course_author} button="Watch" path={`/student/watchcourse?course_id=${c.course_id}`}/>

        ))}
      </div>
      {/* <Card src={homeimg} /> */}

    </>
  )
}

export default Allcourse