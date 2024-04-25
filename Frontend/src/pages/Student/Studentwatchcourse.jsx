import React, { useEffect, useState } from 'react';
import StudentSidebar from '../../components/Student/StudentSidebar';
import StudentNavbar from '../../components/Student/StudentNavbar';
import CourseVideo from '../../components/Student/CourseVideo';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import StudentCourseInfo from '../../components/Student/StudentCourseInfo';

axios.defaults.withCredentials = true;

function Studentwatchcourse() {
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [lessoncontent, setLessoncontent] = useState(null);
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("course_id");
  const lessonId = new URLSearchParams(location.search).get("lesson_id");

  useEffect(() => {
    if (courseId) {
      getCourse();
    }
  }, [courseId]);

  useEffect(() => {
    if (lessonId) {
      getLessonContent();
    }
  }, [lessonId]);

  const getCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/data/getcourseinfo?course_id=${courseId}`);
      setCourse(res.data.course);
      setLesson(res.data.lessons);
      setLessoncontent(null);
    } catch (err) {
      console.error("Error fetching course:", err);
      setCourse(null);
    }
  };

  const getLessonContent = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/data/getlessoncontent?lesson_id=${lessonId}`);
      setLessoncontent(res.data.lesson);
      setLesson(res.data.lessonlist);
      setCourse(null);
    } catch (err) {
      console.error("Error fetching lesson content:", err);
      setCourse(null);
    }
  };

  return (
    <div>
      <StudentNavbar />
      {course && (
        <div className='flex'>
          <StudentSidebar less={lesson} />
          <StudentCourseInfo name={course[0].course_name} desc={course[0].course_description} author={course[0].course_author} duration={course[0].course_duration} />
        </div>
      )}

      {lessoncontent && (
        <div className='flex'>
          <StudentSidebar less={lesson} />
          <CourseVideo id={lessoncontent[0]._id} name={lessoncontent[0].lesson_name} desc={lessoncontent[0].lesson_description} link={lessoncontent[0].lesson_video_link} />
        </div>
      )}
    </div>
  );
}

export default Studentwatchcourse;
