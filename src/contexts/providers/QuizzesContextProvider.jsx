import React from "react";
import { ModalContextProvider } from "../modalProvider/ModalContextProvider";

const QuizzesContextProvider = ({ children }) => {
  return (
    <ModalContextProvider initialState={{ showModal: false, mode: "add" }}>
      {children}
    </ModalContextProvider>
  );
};

export default QuizzesContextProvider;
