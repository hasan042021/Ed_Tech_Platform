import React, { useState } from "react";
import { ModalContext } from "../contexts";

// Create a provider component
export const ModalContextProvider = ({ children, initialState }) => {
  // Define the state that you want to share across components
  const [showModal, setShowModal] = useState(initialState?.showModal);
  const [mode, setMode] = useState(initialState?.mode);
  const [data, setData] = useState(undefined);
  function closeModal() {
    console.log(data);
    setData(undefined);
    setShowModal(false);
    setMode("add");
    console.log(data);
  }

  return (
    // Pass the state and any functions you want to share to the value prop
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        closeModal,
        mode,
        setMode,
        data,
        setData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
