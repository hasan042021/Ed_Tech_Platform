import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/common/Layout";
import AssignmentSection from "../components/coursePlayer/AssignmentSection";
import VideoDescription from "../components/coursePlayer/VideoDescription";
import VideoItems from "../components/coursePlayer/VideoItems";
import VideoPlayer from "../components/coursePlayer/VideoPlayer";
import Loader from "../components/ui/Loader";
import { useGetVideoQuery } from "../features/videos/videosApi";

const CourseVideo = () => {
  const { videoId } = useParams();
  const { data, isLoading, isError, error } = useGetVideoQuery(videoId);
  const [show, setShow] = useState(false);
  // decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <div className="col-span-full flex justify-center items-center w-full space-y-8 lg:col-span-2">
        <Loader />
      </div>
    );
  }
  if (!isLoading && isError) {
    content = (
      <div className="col-span-full flex justify-center items-center w-full space-y-8 lg:col-span-2">
        <Error>{error?.data}</Error>
      </div>
    );
  }
  if (!isLoading && !isError && data.id) {
    content = (
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <VideoPlayer info={data} />
        <VideoDescription setShow={setShow} info={data} />
        <AssignmentSection show={show} />
      </div>
    );
  }
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            {content}
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
              <VideoItems />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseVideo;
