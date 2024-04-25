import React from "react";
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";


import TeacherSidebar from "../../components/Teacher/TeacherSidebar";

function TeacherAddCourse() {

  const [imagePreview, setImagePreview] = useState("");

  const username = useSelector((state) => state.username);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {register, handleSubmit} = useForm();

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const onSubmit = async (data) => {
    setIsLoading(true);
    const imageData = await convertImageToBase64(data.course_image[0]);
    console.log(imageData);
    setImagePreview(imageData);
    axios.post('http://localhost:8080/api/data/addcourse', {
      course_name: data.course_name,
      course_description: data.course_description,
      course_author: data.course_author,
      course_duration: data.course_duration,
      // course_image: imageData
    })
    .then(function (response) {
      console.log(response);
      setIsLoading(false)
      setErrorMessage("Course Added Successfully");
    })
    .catch(function (error) {
      console.log(error);
      setIsLoading(false)
    });
  }

  return (
    <>
    
      <TeacherSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-1 border-gray-100 rounded-lg dark:border-gray-700 mt-14">
          <form className="max-w-4xl mx-auto" action="/profile" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-9">
              <label
                for="course_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course Name:
              </label>
              <input
                type="text"
                {...register("course_name")}
                id="course_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Name"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="course_description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course Description:
              </label>
              <input
                type="text"
                {...register("course_description")}
                id="course_description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Description"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="course_author"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Author:
              </label>
              <input
                type="text"
                id="course_author"
                value={username}
                readOnly
                {...register("course_author")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Author"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="course_duration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course Duration:
              </label>
              <input
                type="text"
                id="course_duration"
                {...register("course_duration")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Duration"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="course_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course Image:
              </label>
              <input
                type="file"
                id="course_image"
                {...register("course_image")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            {/* {imagePreview && (
              <img src={imagePreview} alt="Course Preview" className="max-w-full h-auto mb-4" />
            )} */}
            {errorMessage && <div class="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span class="block sm:inline">{errorMessage}</span>
              </div>}
            {isLoading ?
            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Loading...
            </button> 
            :
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            }
          </form>
        </div>
      </div>
    </>
  );
}

export default TeacherAddCourse;
