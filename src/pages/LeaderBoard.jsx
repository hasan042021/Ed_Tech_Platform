import React from "react";
import Layout from "../components/common/Layout";
import StudentPositionTable from "../components/leaderboard/StudentPositionTable";
import TopResultsTable from "../components/leaderboard/TopResultsTable";

const LeaderBoard = () => {
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <StudentPositionTable />
          <TopResultsTable />
        </div>
      </section>
    </Layout>
  );
};

export default LeaderBoard;
