import React from "react";
import TeacherSidebar from "../../components/Teacher/TeacherSidebar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function TeacherLesson() {
  const username = useSelector((state) => state.username);
  console.log(username);
  const [course_name, setCourseName] = useState("");
  const [course, setCourse] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/data/searchlesson",
        {
          params: {
            course_author: username,
            course_name: course_name,
          },
        }
      );

      // console.log(res.data);
      setCourse(res.data.course);
    } catch (err) {
      setCourse("");
      console.log(err);
    }
  };
  useEffect(() => {
    if (course_name.trim() !== "") {
      handleSubmit();
    }
  }, [course_name]);

  return (
    <>
      <TeacherSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-1 border-gray-100 rounded-lg dark:border-gray-700 mt-14">
          <form className="max-w-6xl mx-auto">
            <div className="mb-9">
              <label
                for="course_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Course Name:
              </label>
              <input
                type="text"
                id="course_name"
                name="course_name"
                value={course_name}
                onChange={(e) => setCourseName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Name"
                required
              />
              {/* <input className='mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                type='submit'
              /> */}
            </div>
            {/* <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button> */}
          </form>
          {course ? (
            <div>
              <div className="relative overflow-x-auto">
                <h2 class="text-4xl font-bold dark:text-white">
                  {course && (
                    <h2 className="text-4xl font-bold dark:text-white">
                      Course Name: {course[0].course_name}
                    </h2>
                  )}
                </h2>
                <br />
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-1000 uppercase bg-gray-1000 dark:bg-gray-700 dark:text-gray-1000">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Lesson No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Lesson Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quiz
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {course &&
                      course.map((l, index) => (
                        <tr
                          key={index+1} 
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index}
                          </td>
                          <td className="px-6 py-4">{l.lesson_name}</td>
                          <td className="px-6 py-4">
                            <Link
                              to={`/teacher/teacheraddquiz?lesson_id=${l._id}&course_id=${l.course_id}`}
                              className="mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-green-600 rounded-md"
                            >
                              Add
                            </Link>
                            <Link
                              to={`/teacher/teachereditquiz?lesson_id=${l._id}`}
                              className="mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-blue-600 rounded-md"
                            >
                              View
                            </Link>
                          </td>
                          <td className="px-6 py-4">
                            <Link
                              to={`/lessons/${l._id}`}
                              className="mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-green-600 rounded-md"
                            >
                              View
                            </Link>
                            <Link
                              to={`/lessons/${l._id}/delete`}
                              className="mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-red-600 rounded-md"
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Link
                to={`/teacher/teacheraddlesson?course_id=${course[0].course_id}`}
                className="absolute bottom-10 right-10 mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-yellow-600 rounded-md"
              >
                Add Lesson
              </Link>
            </div>
          ) : (
            <div>
              <p>No lessons found for this course.</p>
              <Link
                to={`/teacher/teacheraddlesson?course_id=`}
                className="absolute bottom-10 right-10 mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-yellow-600 rounded-md"
              >
                Add Lesson
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TeacherLesson;
