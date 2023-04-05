import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAssingmentSubmittedQuery } from "../../features/assignmentMark/assignmentMarkApi";
import { useGetAssignmentQuery } from "../../features/assignments/assignmentsApi";
import AssignmentSection from "./AssignmentSection";

const VideoDescription = ({ info }) => {
  const { title, createdAt, description, id } = info;
  const { id: studentId } = useSelector((state) => state.auth.user);
  const { data, isLoading, isError } = useGetAssignmentQuery(id);

  const [assignmentId, setAssignmentId] = useState(undefined);
  const [shouldCheck, setShouldChekc] = useState(false);
  const { data: assignmentSubmitted } =
    useGetAssingmentSubmittedQuery(
      { assignmentId, studentId },
      {
        skip: !shouldCheck,
      }
    ) || {};
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (data?.length === 0) {
      console.log(data);
      setAssignmentId(undefined);
      setShouldChekc(true);
    }
    if (data?.length > 0) {
      setAssignmentId(data[0].id);
      setShouldChekc(true);
    }
    if (assignmentSubmitted?.length > 0) {
      console.log(assignmentSubmitted[0]);
    }
  }, [data, show, assignmentSubmitted]);
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-100">
        {title}
      </h1>
      <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
        Uploaded on {moment(createdAt).format("DD MMMM YYYY")}
      </h2>

      <div className="flex gap-4">
        <button
          onClick={() => setShow(!show)}
          className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
        >
          এসাইনমেন্ট
        </button>

        <Link
          to={`/quiz/1`}
          className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
        >
          কুইজে অংশগ্রহণ করুন
        </Link>
      </div>
      <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
      {/* {data?.length > 0 && assignmentSubmitted?.length > 0 ? (
        
      ) : data?.length===0 (
       
      )} */}
      {data?.length === 0 ? (
        <h2
          className={`mt-4  text-slate-400 font-semibold ${!show && "hidden"}`}
        >
          No assignment related to this video
        </h2>
      ) : data?.length > 0 && assignmentSubmitted?.length === 0 ? (
        <AssignmentSection assignmentInfo={data} show={show} />
      ) : data?.length > 0 && assignmentSubmitted?.length > 0 ? (
        <div className={`${!show && "hidden"}`}>
          <h2 className={`mt-4  text-slate-400 font-semibold `}>
            You have submitted this assignment already
          </h2>
          <div>
            <span>Your score is </span>
            <span className=" px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
              {assignmentSubmitted[0]?.status === "published"
                ? assignmentSubmitted[0]?.mark
                : "Pending for evaluation"}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default VideoDescription;
