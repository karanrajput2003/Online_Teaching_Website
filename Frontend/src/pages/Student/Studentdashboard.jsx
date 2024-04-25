import React, { useEffect, useState } from 'react'
import StudentNavbar from '../../components/Student/StudentNavbar';
import {useNavigate} from 'react-router-dom'

import Homecontent from '../../components/Homecontent';
import axios from 'axios';
// axios.defaults.withCredentials = true;


function Studentdashboard() {
  // const [user, setUser] = useState();
  // const history = useNavigate();

  // const sendRequest = async () => {
  //   const res = await axios.get('http://localhost:8080/api/test/user', {
  //     withCredentials: true
  //   }).catch(err => console.log(err));
  //   const data = await res.data;
  //   return data;
  // }

  // useEffect(() => {
  //   sendRequest().then((data) => setUser(data.user))
  // }, [])
  return (
    <>

      <StudentNavbar />
      {/* {user && <h1>{user.username}</h1>} */}
      <Homecontent title="Explore Courses" link="/student/course"/>

    </>
  )
}

export default Studentdashboard