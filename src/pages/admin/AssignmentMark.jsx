import React, { useEffect, useState } from "react";
import MarkTable from "../../components/assignmentMark/MarkTable";
import Layout from "../../components/common/Layout";
import { useGetAllAssignmentMarkQuery } from "../../features/assignmentMark/assignmentMarkApi";
import { calculateTotalPending } from "../../utils/calculateTotalPending";

const AssignmentMark = () => {
  const result = useGetAllAssignmentMarkQuery() || {};
  const { data } = result || {};
  const [pending, setPending] = useState();
  useEffect(() => {
    if (data?.length > 0) {
      const pending = calculateTotalPending(data);
      setPending(pending);
    }
  }, [data]);

  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <ul className="assignment-status">
              <li>
                Total <span>{data?.length}</span>
              </li>
              <li>
                Pending <span>{pending}</span>
              </li>
              <li>
                Mark Sent <span>{data?.length - pending}</span>
              </li>
            </ul>
          </div>
          <MarkTable result={result} />
        </div>
      </section>
    </Layout>
  );
};

export default AssignmentMark;
