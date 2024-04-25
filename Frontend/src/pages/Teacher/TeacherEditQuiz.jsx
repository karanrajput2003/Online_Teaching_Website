import React from "react";
import TeacherSidebar from "../../components/Teacher/TeacherSidebar";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';


function TeacherEditQuiz() {
const location = useLocation();
  const lessonId = new URLSearchParams(location.search).get("lesson_id");

  const [quiz, setQuiz] = useState(null);


  const sendrequest = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/data/getquiz?lesson_id=${lessonId}`);
    
        let data = res.data;
        console.log(res.data.quiz);
        setQuiz(res.data.quiz);
        console.log
      } catch (err) {
        console.log(err);
      }
  };

  useEffect(() => {
    sendrequest();
  }, [])
  return (
    <>
      <TeacherSidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-1 border-gray-100 rounded-lg dark:border-gray-700 mt-14">
          {quiz && quiz.map((c, index) => (
            <form className="max-w-4xl mx-auto">
            <div className="mb-7">
              <label
                for="question_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <b>Question No{index+1}:</b> 
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Question"
                value={c.question_name}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                for="option_A"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option A:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option A"
                value={c.question_name}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                for="option_B"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option B:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option B"
                value={c.question_name}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                for="option_C"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option C:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option C"
                value={c.question_name}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                for="option_D"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Option D:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Option D"
                value={c.question_name}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                for="correct_option"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correct Option:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Correct Option"
                value={c.question_name}
                readOnly
              />
            </div>
            <hr className="mb-4"/>
          </form>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default TeacherEditQuiz;
