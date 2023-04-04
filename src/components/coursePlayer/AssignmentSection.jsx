import React from "react";

const AssignmentSection = ({ show }) => {
  return (
    show && (
      <>
        <hr
          className="mt-4"
          style={{ backgroundColor: "#35B3EE", height: "1px", border: "none" }}
        />
        <div class="w-full max-w-xs my-4 bg-transparent">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
              <span>Total mark of this assignment </span>
              {"    "}
              <button className="px-4 mx-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                100
              </button>
            </div>
            <div className="mb-4">
              <p className="font-bold text-slate-400 py-2 my-2">
                Enter your github repository link
              </p>
              <input
                className=" input-mark shadow appearance-none border rounded bg-transparent w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                style={{
                  marginBottom: 10,
                  borderRadius: 5,
                  color: "black",
                  padding: 5,
                }}
                placeholder="Username"
              />
            </div>

            <div class="flex items-center justify-between my-2">
              <button class="btn" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    )
  );
};

export default AssignmentSection;
