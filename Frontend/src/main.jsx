import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/index.js';


import App from './App.jsx'
import Login from './pages/Login.jsx'
import TeacherRegister from './pages/TeacherRegister.jsx'
import Register from './pages/Register.jsx'
import Allcourse from './pages/Allcourse.jsx'
import Feedback from './pages/Feedback.jsx'

import Studentdashboard from './pages/Student/Studentdashboard.jsx'
import Studentcourse from './pages/Student/studentcourse.jsx'
import Studentenrollcourses from './pages/Student/Studentenrollcourses.jsx'
import Coursedetails from './pages/Student/Coursedetails.jsx'
import Studentwatchcourse from './pages/Student/Studentwatchcourse.jsx'
import Studentgivequiz from './pages/Student/Studentgivequiz.jsx';


import Teacherdashboard from './pages/Teacher/Teacherdashboard.jsx'
import TeacherCourse from './pages/Teacher/TeacherCourse.jsx'
import TeacherLesson from './pages/Teacher/TeacherLesson.jsx'
import AllStudents from './pages/Teacher/AllStudents.jsx'
import EnrollStudent from './pages/Teacher/EnrollStudent.jsx'
import TeacherAddCourse from './pages/Teacher/TeacherAddCourse.jsx';
import TeacherAddLesson from './pages/Teacher/TeacherAddLesson.jsx'
import TeacherAddQuiz from './pages/Teacher/TeacherAddQuiz.jsx';
import TeacherEditQuiz from './pages/Teacher/TeacherEditQuiz.jsx';


import Error from './pages/Error.jsx'

import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/tregister',
    element: <TeacherRegister />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/course',
    element: <Allcourse />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '/student',
    element: <Studentdashboard />,
  },
  {
    path: '/student/course',
    element: <Studentcourse />,
  },
  {
    path: '/student/mycourse',
    element: <Studentenrollcourses />,
  },
  {
    path: '/student/details',
    element: <Coursedetails/>,
  },
  {
    path: '/student/watchcourse',
    element: <Studentwatchcourse/>,
  },
  {
    path: '/student/givequiz',
    element: <Studentgivequiz />,
  },
  {
    path: '/teacher',
    element: <Teacherdashboard />,
  },
  {
    path: '/teacher/course',
    element: <TeacherCourse />,
  },
  {
    path: '/teacher/lesson',
    element: <TeacherLesson/>,
  },
  {
    path: '/teacher/allstudents',
    element: <AllStudents/>,
  },
  {
    path: '/teacher/enrollstudent',
    element: <EnrollStudent/>,
  },
  {
    path: '/teacher/teacheraddcourse',
    element: <TeacherAddCourse/>,
  },
  {
    path: '/teacher/teacheraddlesson',
    element: <TeacherAddLesson />,
  },
  {
    path: '/teacher/teacheraddquiz',
    element: <TeacherAddQuiz />,
  },
  {
    path: '/teacher/teachereditquiz',
    element: <TeacherEditQuiz />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider >
)
