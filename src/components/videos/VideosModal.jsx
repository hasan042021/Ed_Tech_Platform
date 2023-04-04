import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ModalContext } from "../../contexts/contexts";
import {
  useAddVideoMutation,
  useEditVideoMutation,
} from "../../features/videos/videosApi";

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

const VideosModal = () => {
  // styling elements inside modal
  let btn, sub, input, input1, input2, input3, input4;
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
    input.style.borderRadius = "5px";
    input.style.marginTop = "10px";
    input1.style.borderRadius = "5px";
    input1.style.marginTop = "10px";
    input2.style.borderRadius = "5px";
    input2.style.marginTop = "10px";
    input3.style.borderRadius = "5px";
    input3.style.marginTop = "10px";
    input4.style.borderRadius = "5px";
    input4.style.marginTop = "10px";
  }

  const { closeModal, showModal, mode, data } = useContext(ModalContext) || {};
  const [
    addVideo,
    { isLoading: isAddVidoLoading, isError, isSuccess: isAddVideoSuccess },
  ] = useAddVideoMutation();
  const [editVideo, { isLoading, isSuccess: isEditVideoSuccess }] =
    useEditVideoMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    console.log(mode);
    if (mode === "edit" && data?.id) {
      console.log("from here");
      setTitle(data.title);
      setDescription(data.description);
      setUrl(data.url);
      setViews(data.views);
      setDuration(data.duration);
    } else {
      setTitle("");
      setDescription("");
      setUrl("");
      setViews("");
      setDuration("");
    }
  }, [mode, data]);

  useEffect(() => {
    if (isAddVideoSuccess || isEditVideoSuccess) {
      closeModal();
    }
  }, [isAddVideoSuccess, isEditVideoSuccess]);

  const handleAddVideo = (e) => {
    e.preventDefault();
    addVideo({
      title,
      description,
      url,
      views,
      duration,
      createdAt: new Date().toISOString(),
    });
  };
  const handleEditVideo = (e) => {
    e.preventDefault();
    editVideo({
      id: data.id,
      data: {
        title,
        description,
        url,
        views,
        duration,
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
        onSubmit={mode === "edit" ? handleEditVideo : handleAddVideo}
        style={{ borderRadius: 50 }}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Video Title"
            ref={(_input1) => (input1 = _input1)}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-4 rounded">
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Description"
            ref={(_input2) => (input2 = _input2)}
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="mb-4 rounded">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Video Url"
            ref={(_input3) => (input3 = _input3)}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div class="mb-4 rounded">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Views"
            ref={(_input4) => (input4 = _input4)}
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Video duration"
            ref={(_input) => (input = _input)}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div
          ref={(_sub) => (sub = _sub)}
          class="flex items-center justify-between"
        >
          <button ref={(_btn) => (btn = _btn)} type="submit">
            {mode === "edit" ? "Edit Video" : "Add Video"}
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default VideosModal;
