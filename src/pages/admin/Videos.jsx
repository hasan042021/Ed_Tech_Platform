import React, { useContext } from "react";
import Layout from "../../components/common/Layout";
import VideoTable from "../../components/videos/VideoTable";
import VideosModal from "../../components/videos/VideosModal";
import { ModalContext } from "../../contexts/contexts";

const Videos = () => {
  const { showModal, setShowModal } = useContext(ModalContext) || {};

  return (
    <Layout>
      <div className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <button
                onClick={() => setShowModal(!showModal)}
                className="btn ml-auto"
              >
                Add Video
              </button>
            </div>
          </div>
          <div className="absolute z-60 overflow-x-auto mt-4">
            <VideoTable />
          </div>
        </div>
      </div>
      <VideosModal />
    </Layout>
  );
};

export default Videos;
