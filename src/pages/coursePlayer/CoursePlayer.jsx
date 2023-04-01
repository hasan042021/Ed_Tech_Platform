import React from "react";
import Layout from "../../components/Layout";
import VideoDescription from "./VideoDescription";
import VideoItems from "./VideoItems";
import VideoPlayer from "./VideoPlayer";

const CoursePlayer = () => {
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer />
              <VideoDescription />
            </div>
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
              <VideoItems />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoursePlayer;
