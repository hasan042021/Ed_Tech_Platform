import React from "react";
import Layout from "../../components/Layout";
import MarkTable from "./MarkTable";

const AssignmentMark = () => {
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <ul className="assignment-status">
              <li>
                Total <span>4</span>
              </li>
              <li>
                Pending <span>3</span>
              </li>
              <li>
                Mark Sent <span>1</span>
              </li>
            </ul>
          </div>
          <MarkTable />
        </div>
      </section>
    </Layout>
  );
};

export default AssignmentMark;
