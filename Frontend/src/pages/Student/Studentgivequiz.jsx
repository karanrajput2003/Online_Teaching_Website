import React from "react";
import StudentNavbar from "../../components/Student/StudentNavbar";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function StudentGiveQuiz() {
  const email = useSelector((state) => state.email);
  const [isLoading, setIsLoading] = useState(false);
  const [length, setLength] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const lessonId = new URLSearchParams(location.search).get("lesson_id");
  const [quiz, setQuiz] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    // Loop through all questions and submit their answers
    for (let index = 0; index < length; index++) {
      axios
        .post("http://localhost:8080/api/data/submitquiz", {
          selected_ans: data[`select_option_${index}`],
          email: email,
          q_id: data[`q_id${index}`],
          lesson_id: data[`lesson_id${index}`],
          course_id: data[`course_id${index}`],
          correct_option: data[`correct_option${index}`]
        })
        .then(function (response) {
          console.log(response);
          setIsLoading(false);
          setErrorMessage("Quiz Submitted Successfully");
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
      setErrorMessage("Quiz is already submitted");

        });
    }
  };

  const sendRequest = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/data/getquiz?lesson_id=${lessonId}`
      );

      let data = res.data;
      // console.log(res.data.quiz);
      setLength(res.data.quiz.length);
      setQuiz(res.data.quiz);
    } catch (err) {
      // console.log(err);
      setErrorMessage("Quiz is already submitted");
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div>
      <StudentNavbar />
      <div className="h-full w-3/5 w-auto p-10 mt-10 mx-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <h1 className="font-bold text-2xl p-4">Quiz Topic {quiz[0]}</h1> */}
        {quiz &&
          quiz.map((c, index) => (
            <form
              key={index}
              className="max-w-4xl mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-9">
                <label
                  htmlFor={`question_${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Question {index + 1} : {c.question_name}
                </label>
              </div>
              <input
                type="hidden"
                {...register(`q_id${index}`)}
                id={`q_id${index}`}
                className="mr-1"
                value={c._id}
              />
              <input
                type="hidden"
                {...register(`lesson_id${index}`)}
                id={`lesson_id${index}`}
                className="mr-1"
                value={c.lesson_id}
              />
              <input
                type="hidden"
                {...register(`course_id${index}`)}
                id={`course_id${index}`}
                className="mr-1"
                value={c.course_id}
              />
              <div className="mb-9">
                <label
                  htmlFor={`option_A_${index}`}
                  className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <input
                    type="radio"
                    {...register(`select_option_${index}`, { required: true })}
                    id={`option_A_${index}`}
                    className="mr-1"
                    value={c.option_A}
                  />{" "}
                  {c.option_A}
                </label>
                <br />
                <label
                  htmlFor={`option_B_${index}`}
                  className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <input
                    type="radio"
                    {...register(`select_option_${index}`, { required: true })}
                    id={`option_B_${index}`}
                    className="mr-1"
                    value={c.option_B}
                  />{" "}
                  {c.option_B}
                </label>
                <br />
                <label
                  htmlFor={`option_C_${index}`}
                  className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <input
                    type="radio"
                    {...register(`select_option_${index}`, { required: true })}
                    id={`option_C_${index}`}
                    className="mr-1"
                    value={c.option_C}
                  />{" "}
                  {c.option_C}
                </label>
                <br />
                <label
                  htmlFor={`option_D_${index}`}
                  className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <input
                    type="radio"
                    {...register(`select_option_${index}`, { required: true })}
                    id={`option_D_${index}`}
                    className="mr-1"
                    value={c.option_D}
                  />{" "}
                  {c.option_D}
                </label>
              </div>
              <input
                type="hidden"
                {...register(`correct_option${index}`)}
                id={`correct_option${index}`}
                className="mr-1"
                value={c.correct_option}
              />
            </form>
          ))}
        {errorMessage && (
          <div className="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <button
          className="px-8 mx-10 py-1 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default StudentGiveQuiz;
