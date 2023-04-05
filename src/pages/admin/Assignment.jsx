import React, { useContext } from "react";
import QuizzesModal from "../../components/assignment/AssignmentModal";
import AssignmentTable from "../../components/assignment/AssignmentTable";
import Layout from "../../components/common/Layout";
import { ModalContext } from "../../contexts/contexts";

const Assignment = () => {
  const { showModal, setShowModal } = useContext(ModalContext) || {};
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <button
                onClick={() => setShowModal(!showModal)}
                className="btn ml-auto"
              >
                Add Assignment
              </button>
            </div>
            <div className="overflow-x-auto mt-4">
              <AssignmentTable />
            </div>
          </div>
        </div>
      </section>
      <QuizzesModal />
    </Layout>
  );
};

export default Assignment;
