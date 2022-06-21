import { IconX } from "@tabler/icons";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import modalAtom from "../../../_atom/modalAtom";

const ModalContainer = styled.div`
  padding: 2rem;
  position: fixed;
  inset: 5%;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
`;
interface ModalProps {
  FormComponent: React.ReactNode;
}
const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  svg {
  }
`;

const Modal: React.FC<ModalProps> = ({ FormComponent }) => {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  return (
    <ModalContainer>
      <CloseButton
        onClick={() => setModalState({ ...modalState, isOpen: false })}
      >
        <IconX />
      </CloseButton>
      {FormComponent}
    </ModalContainer>
  );
};

export default Modal;
