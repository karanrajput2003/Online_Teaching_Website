import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TeacherSidebar from "../../components/Teacher/TeacherSidebar";
import { Link } from "react-router-dom";

import axios from "axios";
import { authActions } from "../../store";
axios.defaults.withCredentials = true;

function TeacherCourse() {
  const username = useSelector((state) => state.username);

  const [course, setCourse] = useState();

  const handledelete =  async (id) => {
    
      const res = await axios.post("http://localhost:8080/api/data/deletecourse", {
        params: {
          _id: id,
        },
      },{
        withCredentials: true
      });
      window.location.reload();
    console.log("click")
  }
  const deletecourse = (id) => {
    // console.log("ll");
    handledelete(id).catch((err) => {
      console.log(err);
    })
  }

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/data/getcourse", {
        params: {
          course_author: username,
        },
      });
  
      // console.log(res.data);
      const data = res.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setCourse(data.course));
  }, []);

  return (
    <>
      <TeacherSidebar />
      {/* { course.course[1]._id && <h1>{course.course[1]._id}</h1> } */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-1 border-gray-100 rounded-lg dark:border-gray-700 mt-14">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-1000 uppercase bg-gray-1000 dark:bg-gray-700 dark:text-gray-1000">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Course Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Course Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                course &&
                  course.map((c) => (
                    <tr key={c._id}>
                      <th
                        scope="row"
                        className="px-6 py-4"
                      >
                        {c._id}
                      </th>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{c.course_name}</td>
                      <td className="px-6 py-4">{c.course_author}</td>
                      <td className="px-6 py-4">
                        <Link
                          to="/"
                          className="mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-green-600 rounded-md"
                        >
                          View
                        </Link>
                        <Link
                          onClick={() => deletecourse(c._id)}
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
            to="/teacher/teacheraddcourse"
            className="absolute bottom-24 right-24 mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-yellow-600 rounded-md"
          >
            Add
          </Link>
        </div>
      </div>
    </>
  );
}

export default TeacherCourse;
