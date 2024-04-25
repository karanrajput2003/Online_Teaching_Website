import React from "react";
import TeacherSidebar from "../../components/Teacher/TeacherSidebar";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';


function TeacherAddQuiz() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("course_id");
  const lessonId = new URLSearchParams(location.search).get("lesson_id");


  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    axios.post('http://localhost:8080/api/data/addquiz', {
      lesson_id: data.lesson_id,
      course_id: data.course_id,
      question_name: data.question_name,
      option_A: data.option_A,
      option_B: data.option_B,
      option_C: data.option_C,
      option_D: data.option_D,
      correct_option: data.correct_option
    })
    .then(function (response) {
      console.log(response);
      setIsLoading(false)
      setErrorMessage("Quiz Added Successfully");
    })
    .catch(function (error) {
      console.log(error);
      setIsLoading(false)
    });
  };
  return (
    <>
      <TeacherSidebar />

      <div className="p-4 sm:ml-64" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 border-1 border-gray-100 rounded-lg dark:border-gray-700 mt-14">
          <form className="max-w-4xl mx-auto">
            <div className="mb-9">
              <label
                for="lesson_id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lesson Id:
              </label>
              <input
                type="text"
                readOnly
                value={lessonId}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("lesson_id")}
                required
              />
            </div>
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
                value={courseId}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("course_id")}
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="question_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Question:
              </label>
              <input
                type="text"
                {...register("question_name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Question"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="option_A"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option A:
              </label>
              <input
                type="text"
                {...register("option_A")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option A"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="option_B"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option B:
              </label>
              <input
                type="text"
                {...register("option_B")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option B"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="option_C"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option C:
              </label>
              <input
                type="text"
                {...register("option_C")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option C"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="option_D"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option D:
              </label>
              <input
                type="text"
                {...register("option_D")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option D"
                required
              />
            </div>
            <div className="mb-9">
              <label
                for="correct_option"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correct Option:
              </label>
              <input
                type="text"
                {...register("correct_option")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Correct Option"
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

export default TeacherAddQuiz;
