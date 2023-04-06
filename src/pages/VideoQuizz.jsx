import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/common/Layout";
import QuizzItems from "../components/videoQuizz/QuizzItems";
import { useAddQuizMarkMutation } from "../features/quizMark/quizMarkApi";
import { useGetQuizzesQuery } from "../features/quizzes/quizzesApi";
import { useGetVideoQuery } from "../features/videos/videosApi";
import { calculateQuizMark } from "../utils/calculateQuizMark";

const VideoQuizz = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { data } = useGetQuizzesQuery(videoId) || {};
  const { data: video } = useGetVideoQuery(videoId) || {};
  const [formData, setFormData] = useState({});
  const { id: student_id, name: student_name } = useSelector(
    (state) => state.auth.user
  );
  const [addQuizMark, { isSuccess }] = useAddQuizMarkMutation();
  useEffect(() => {
    const initialState = data?.map((q) => {
      return {
        question: q.id,
        answers: [
          { id: 1, checked: false },
          { id: 2, checked: false },
          { id: 3, checked: false },
          { id: 4, checked: false },
        ],
      };
    });
    setFormData(initialState);
    // console.log(formData);
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/course-player");
    }
  }, [isSuccess]);

  const handleQuizSubmission = () => {
    const { correct, wrong, mark, totalQuiz } = calculateQuizMark(
      formData,
      data
    );
    const dataToSubmit = {
      student_id,
      student_name,
      video_id: video.id,
      video_title: video.title,
      totalQuiz,
      totalCorrect: correct,
      totalWrong: wrong,
      totalMark: totalQuiz * 5,
      mark,
    };
    addQuizMark(dataToSubmit);
  };

  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <QuizzItems
            data={data}
            formData={formData}
            setFormData={setFormData}
          />

          <button
            type="button"
            onClick={handleQuizSubmission}
            className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 "
          >
            Submit
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default VideoQuizz;
