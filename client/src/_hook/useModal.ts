import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import modalAtom from "../_atom/modalAtom";
import AuthFormWrapper from "../_components/common/form/AuthFormWrapper";
import LoginForm from "../_components/common/form/LoginForm";

const useModal = () => {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  useEffect(() => {
    if (modalState.isOpen)
      window.document.children[0].classList.add("stop_scroll");
    else window.document.children[0].classList.remove("stop_scroll");
  }, [modalState.isOpen]);

  return {
    componentName: modalState.componentName,
    isOpen: modalState.isOpen,
    setModalState,
  };
};

export default useModal;
