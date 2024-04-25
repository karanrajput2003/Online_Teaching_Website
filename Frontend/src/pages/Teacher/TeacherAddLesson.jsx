import React from "react";
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import TeacherSidebar from "../../components/Teacher/TeacherSidebar";

function TeacherAddLesson() {
  const username = useSelector((state) => state.username);  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {register, handleSubmit} = useForm();
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("course_id");

  const onSubmit = (data) => {
    setIsLoading(true);
    axios.post('http://localhost:8080/api/data/addlesson', {
      lesson_name: data.lesson_name,
      lesson_description: data.lesson_description,
      lesson_video_link: data.lesson_video_link,
      course_name: data.course_name,
      course_id: courseId,
      course_author: username
    })
    .then(function (response) {
      console.log(response);
      setIsLoading(false)
      setErrorMessage("Lessson Added Successfully");
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
          <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-9">
              <label
                for="course_id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course Id:
              </label>
              <input
                type="text"
                readOnly
                {...register("course_id")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={courseId}
                required
              />
            </div>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Name"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="lesson_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lesson Name:
              </label>
              <input
                type="text"
                {...register("lesson_name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lesson Name"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="lesson_description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lesson Description:
              </label>
              <textarea
                type="text"
                {...register("lesson_description")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Description"
                required
              >
              </textarea>
            </div>
            <div className="mb-9">
              <label
                for="lesson_video_link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lesson video Link:
              </label>
              <input
                type="text"
                {...register("lesson_video_link")}
                placeholder="Lesson video Link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
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
            >Submit</button>
            }
          </form>
        </div>
      </div>
    </>
  );
}

export default TeacherAddLesson;
