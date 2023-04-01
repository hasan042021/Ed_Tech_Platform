import React from "react";
import Layout from "../../components/Layout";
import QuizzItems from "./QuizzItems";

const Quizz = () => {
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <QuizzItems />

          <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
            Submit
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Quizz;
