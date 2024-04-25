import React from "react";
import { useEffect, useState } from 'react'
import collegelogo from "../../assets/CRCE.svg";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import { authActions } from "../../store";
axios.defaults.withCredentials = true;

function StudentNavbar() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const  dispatch = useDispatch();

  const [user, setUser] = useState();
  const history = useNavigate();

  const sendlogout = async () => {
    console.log("ll")
    const res = await axios.post('http://localhost:8080/api/auth/logout',{
      // userId: user.id
    },{
      withCredentials: true
    });
    if(res.status == 200){
      return res;
    }
    return new Error("Unable to logout")
  }

  const handlelogout = () => {
    // console.log("ll");
    sendlogout().then(() => {
      dispatch(authActions.logout())
    })
  }

  const sendRequest = async () => {
    const res = await axios.get('http://localhost:8080/api/test/user', {
      withCredentials: true
    }).catch(err => {
      alert("Login to your account");
      history("/login")
    });
    const data = await res.data;
    return data;
  }

  useEffect(() => {
    // if(!isLoggedIn){
    //   history("/login")
    // }
    sendRequest().then((data) => setUser(data.user))
  }, [isLoggedIn])
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/student"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={collegelogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={collegelogo}
                alt="user photo"
              />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                {user && <h1>{user.username}</h1>}
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {user && <h1>{user.email}</h1>}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onSubmit={handlelogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/student"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/student/course"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/student/mycourse"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/student/feedback"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Feedback
                </Link>
              </li>
              <li>
              <Link
                type="submit"
                to="/"
                onClick={handlelogout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Logout
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default StudentNavbar;