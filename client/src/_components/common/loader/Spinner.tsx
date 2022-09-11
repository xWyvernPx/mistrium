import React from "react";
import styled from "styled-components";

type Props = {};

const SpinnerLayout = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  background-color: var(--primary);
  border-radius: 5rem;
  margin: 2rem auto;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: inherit;
    animation: fade 1s forwards infinite linear;
  }

  @keyframes fade {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
const SpinnerWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerLayout />
    </SpinnerWrapper>
  );
};

export default Spinner;
