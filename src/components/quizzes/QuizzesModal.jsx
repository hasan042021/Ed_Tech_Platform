import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../../contexts/contexts";

import {
  useAddQuizMutation,
  useEditQuizMutation,
} from "../../features/quizzes/quizzesApi";
import { useGetVideosQuery } from "../../features/videos/videosApi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: window.innerWidth < 600 ? "0%" : "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#080E1B",
    margin: 20,
    padding: 20,
    width: window.innerWidth < 600 ? 340 : 560,
    color: "black",
    borderRadius: 10,
  },
};

const QuizzesModal = () => {
  // styling elements inside modal
  let btn, sub, input1, input2, opt1, opt2, opt3, opt4;
  function afterOpenModal() {
    btn.style.color = "black";
    btn.style.fontWeight = "bold";
    btn.style.backgroundColor = "#35B3EE";
    btn.style.padding = "5px 10px";
    btn.style.borderRadius = "5px";
    sub.style.display = "flex";
    sub.style.justifyContent = "center";
    sub.style.alignItems = "center";
    sub.style.padding = "20px";
    input1.style.borderRadius = "5px";
    input1.style.marginTop = "10px";
    input2.style.borderRadius = "5px";
    input2.style.marginTop = "10px";
    opt1.style.borderRadius = "5px";
    opt1.style.width = "90%";
    opt2.style.width = "90%";
    opt3.style.width = "90%";
    opt4.style.width = "90%";
    opt2.style.borderRadius = "5px";
    opt3.style.borderRadius = "5px";
    opt4.style.borderRadius = "5px";
  }

  const { closeModal, showModal, mode, data } = useContext(ModalContext) || {};
  const [
    addQuizz,
    { isLoading: isAddQuizzLoading, isError, isSuccess: isAddQuizzSuccess },
  ] = useAddQuizMutation();
  const [editQuizz, { isLoading, isSuccess: isEditQuizzSuccess }] =
    useEditQuizMutation();
  const { data: videos, isLoading: isVideosLoading } = useGetVideosQuery();

  const [question, setQuestion] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoId, setVideoId] = useState(undefined);
  const [option1, setOption1] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [option2, setOption2] = useState("");
  const [checked2, setChecked2] = useState(false);
  const [option3, setOption3] = useState("");
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [option4, setOption4] = useState("");

  useEffect(() => {
    console.log(mode);
    if (mode === "edit" && data?.id) {
      console.log(data);
      const sorted = data.options;
      setQuestion(data.question);
      setVideoTitle(data.video_title);
      setVideoId(data.video_id);

      setChecked1(sorted[0].isCorrect);
      setOption1(sorted[0].option);
      setChecked2(sorted[1].isCorrect);
      setOption2(sorted[1].option);
      setChecked3(sorted[2].isCorrect);
      setOption3(sorted[2].option);
      setChecked4(sorted[3].isCorrect);
      setOption4(sorted[3].option);
    } else {
      setQuestion("");
      setVideoTitle("");
      setVideoId(undefined);

      setChecked1(false);
      setOption1("");
      setChecked2(false);
      setOption2("");
      setChecked3(false);
      setOption3("");
      setChecked4(false);
      setOption4("");
    }
  }, [mode, data]);

  useEffect(() => {
    if (isAddQuizzSuccess || isEditQuizzSuccess) {
      closeModal();
    }
  }, [isAddQuizzSuccess, isEditQuizzSuccess]);

  const handleVideoChange = (e) => {
    setVideoTitle(e.target.value);
    if (!e.target) {
      console.error("Error: target not found in event object");
      return;
    }
    const dataset = e.target.options[e.target.selectedIndex].dataset;

    const video = JSON.parse(dataset.video);
    console.log(video.id);
    setVideoId(video.id);
  };
  const handleAddQuizz = (e) => {
    e.preventDefault();
    console.log("adding");
    const data = {
      question,
      video_id: videoId,
      video_title: videoTitle,
      options: [
        { id: 1, option: option1, isCorrect: checked1 },
        { id: 2, option: option2, isCorrect: checked2 },
        { id: 3, option: option3, isCorrect: checked3 },
        { id: 4, option: option4, isCorrect: checked4 },
      ],
    };
    console.log(data);
    addQuizz(data);
  };
  const handleEditQuizz = (e) => {
    e.preventDefault();
    const data = {
      question,
      video_id: videoId,
      video_title: videoTitle,
      options: [
        { id: 1, option: option1, isCorrect: checked1 },
        { id: 2, option: option2, isCorrect: checked2 },
        { id: 3, option: option3, isCorrect: checked3 },
        { id: 4, option: option4, isCorrect: checked4 },
      ],
    };
    console.log(data);
    editQuizz({
      id: data?.id,
      videoId,
      data,
    });
  };

  return (
    <ReactModal
      style={customStyles}
      isOpen={showModal}
      onRequestClose={closeModal}
      bodyOpenClassName="rounded"
      onAfterOpen={afterOpenModal}
      Style={customStyles}
      ariaHideApp={false}
    >
      <form
        onSubmit={mode === "edit" ? handleEditQuizz : handleAddQuizz}
        style={{ borderRadius: 50 }}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter questions"
            ref={(_input1) => (input1 = _input1)}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div class="mb-4 rounded">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            ref={(_input2) => (input2 = _input2)}
            value={videoTitle}
            onChange={handleVideoChange}
          >
            <option value="" hidden selected>
              Select Video
            </option>
            {videos?.map((video) => {
              const dataAttr = JSON.stringify(video);
              return (
                <option
                  key={video.id}
                  value={video.title}
                  data-video={dataAttr}
                >
                  {video.title}
                </option>
              );
            })}
          </select>
        </div>
        <div class="mb-4 rounded">
          <p className="text-white font-bold mb-1 mt-3">
            Options{" "}
            <span
              className="text-sm "
              style={{ fontWeight: 500, color: "gray" }}
            >
              (check if the answer is correct)
            </span>
          </p>
          <div className="flex mt-2 justify-center gap-3">
            <input
              type="checkbox"
              class="appearance-none default:ring-2  indeterminate:bg-gray-300 "
              value={checked1}
              onChange={(e) => setChecked1(e.target.checked)}
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Option 1"
              ref={(_opt1) => (opt1 = _opt1)}
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
            />
          </div>
          <div className="flex mt-2  justify-center gap-3">
            <input
              type="checkbox"
              class="appearance-none indeterminate:bg-gray-300 "
              value={checked2}
              onChange={(e) => setChecked2(e.target.checked)}
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Option 2"
              ref={(_opt2) => (opt2 = _opt2)}
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />
          </div>
          <div className="flex mt-2  justify-center gap-3">
            <input
              type="checkbox"
              class="appearance-none indeterminate:bg-gray-300 "
              value={checked3}
              onChange={(e) => setChecked3(e.target.checked)}
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Option 3"
              ref={(_opt3) => (opt3 = _opt3)}
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
            />
          </div>
          <div className="flex mt-2  justify-center gap-3">
            <input
              type="checkbox"
              class="appearance-none indeterminate:bg-gray-300 ml-2"
              value={checked4}
              onChange={(e) => setChecked4(e.target.checked)}
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Option 4"
              ref={(_opt4) => (opt4 = _opt4)}
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
            />
          </div>
        </div>

        <div
          ref={(_sub) => (sub = _sub)}
          class="flex items-center justify-between"
        >
          <button ref={(_btn) => (btn = _btn)} type="submit">
            {mode === "edit" ? "Edit Assignment" : "Add Assignment"}
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default QuizzesModal;
