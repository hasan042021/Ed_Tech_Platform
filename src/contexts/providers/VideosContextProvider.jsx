import React from "react";
import { ModalContextProvider } from "../modalProvider/ModalContextProvider";

const VideosContextProvider = ({ children }) => {
  return (
    <ModalContextProvider initialState={{ showModal: false, mode: "add" }}>
      {children}
    </ModalContextProvider>
  );
};

export default VideosContextProvider;
