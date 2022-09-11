import { IconCheck } from "@tabler/icons";
import React from "react";
import styled from "styled-components";
type Props = {};

const Wrapper = styled.div`
  padding: 0.15rem;
  border-radius: 50%;
  border: 1px solid var(--success);
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;
const OkFlag = (props: Props) => {
  return (
    <Wrapper>
      <IconCheck color={"var(--success)"} />
    </Wrapper>
  );
};

export default OkFlag;
