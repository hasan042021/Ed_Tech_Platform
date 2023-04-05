import React, { useContext } from "react";
import Layout from "../../components/common/Layout";
import AssignmentModal from "../../components/quizzes/QuizzesModal";
import QuizzesTable from "../../components/quizzes/QuizzesTable";
import { ModalContext } from "../../contexts/contexts";

const Quizzes = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
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
                Add Quiz
              </button>
            </div>
            <div className="overflow-x-auto mt-4">
              <QuizzesTable />
            </div>
          </div>
        </div>
      </section>
      <AssignmentModal />
    </Layout>
  );
};

export default Quizzes;
