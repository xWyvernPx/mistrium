import { IconX } from "@tabler/icons";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import modalAtom from "../../../_atom/modalAtom";

const ModalContainer = styled.div`
  padding: 2rem;
  position: fixed;
  inset: 5%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px,
    rgba(100, 100, 111, 0.5) 0px 0px 0px 20rem;
`;
interface ModalProps {
  render: Function;
}
const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  svg {
  }
`;

const Modal: React.FC<ModalProps> = ({ render }) => {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  return (
    <ModalContainer>
      <CloseButton
        onClick={() => setModalState({ componentName: "", isOpen: false })}
      >
        <IconX />
      </CloseButton>
      <>{render()}</>
    </ModalContainer>
  );
};

export default Modal;
