import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react";
import Card from '../components/Card'
import homeimg from '../assets/559.jpg'
import axios from "axios";


function Allcourse() {
  const [course, setCourse] = useState(null);

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/data/getallcourses");
  
      let data = res.data;
      console.log(data);

      setCourse(res.data.course);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
    // console.log(course)
  }, []);
  return (
    <>
      <Navbar />
      <h1 className='mt-10 mb-4 mx-14 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl dark'>All Courses:</h1>
      <div className='flex flex-wrap'>
      {course && course.map((c,index) => (

      <Card src={c.course_image} title={c.course_name} button="Read more" path="/student/details"/>
      ))}
      
      </div>

    </>
  )
}

export default Allcourse