import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../../contexts/contexts";
import {
  useAddAssingmentMutation,
  useEditAssingmentMutation,
} from "../../features/assignments/assignmentsApi";
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

const AssignmentModal = () => {
  // styling elements inside modal
  let btn, sub, input1, input2, input3;
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
    input3.style.borderRadius = "5px";
    input3.style.marginTop = "10px";
  }
  const { closeModal, showModal, mode, data } = useContext(ModalContext) || {};
  const [
    addAssingment,
    {
      isLoading: isAddAssingmentLoading,
      isError,
      isSuccess: isAddAssingmentSuccess,
    },
  ] = useAddAssingmentMutation();
  const [editAssingment, { isLoading, isSuccess: isEditAssingmentSuccess }] =
    useEditAssingmentMutation();
  const { data: videos, isLoading: isVideosLoading } =
    useGetVideosQuery() || {};

  const [title, setTitle] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoId, setVideoId] = useState(undefined);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    console.log(mode);
    if (mode === "edit" && data?.id) {
      console.log("from here");
      setTitle(data.title);
      setVideoTitle(data.video_title);
      setVideoId(data.video_id);
      setTotal(data.totalMark);
    } else {
      setTitle("");
      setVideoTitle("");
      setVideoId(undefined);
      setTotal(100);
    }
  }, [mode, data]);

  useEffect(() => {
    if (isAddAssingmentSuccess || isEditAssingmentSuccess) {
      closeModal();
    }
  }, [isAddAssingmentSuccess, isEditAssingmentSuccess]);

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
  const handleAddAssingment = (e) => {
    e.preventDefault();

    addAssingment({
      title,
      video_id: videoId,
      video_title: videoTitle,
      totalMark: total,
    });
  };
  const handleEditAssingment = (e) => {
    e.preventDefault();
    editAssingment({
      id: data?.id,
      data: {
        title,
        video_id: videoId,
        video_title: videoTitle,
        totalMark: total,
      },
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
        onSubmit={mode === "edit" ? handleEditAssingment : handleAddAssingment}
        style={{ borderRadius: 50 }}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Assignment Title"
            ref={(_input1) => (input1 = _input1)}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Total Mark"
            ref={(_input3) => (input3 = _input3)}
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
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

export default AssignmentModal;
