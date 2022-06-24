import { IconCreditCard, IconId, IconTruckDelivery } from "@tabler/icons";
import React from "react";
import styled from "styled-components";

const CheckoutProgressBarWrapper = styled.div`
  width: ${(props: { width: string }) => props.width || "100%"};
  height: 7px;
  border: 1px solid var(--gray-light);
  border-radius: 5px;
  position: relative;
  align-self: center;
`;
const ProgressBar = styled.div`
  width: calc(25% * ${(props: { index: number }) => props.index});
  height: 100%;
  background-color: var(--primary);
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;

const ProgressMark = styled.div`
  position: absolute;
  top: 0;
  left: calc(
    25% * ${(props: { index: number; active: boolean }) => props.index}
  );
  transform: translate(-50%, -50%);
  padding: 1rem;
  border: 2px solid
    var(
      ${(props: { index: number; active: boolean }) =>
        props.active ? "--primary" : "--gray-light"}
    );
  transition: all 0.2s ease-in-out;
  transition-delay: 0.475s;
  border-radius: 50%;
  background-color: var(--white);
`;
const CheckoutProgressBar: React.FC<{ width: string; step: number }> = ({
  step,
  width,
}) => {
  return (
    <CheckoutProgressBarWrapper width={width}>
      <ProgressBar index={step} />
      <ProgressMark index={1} active={step >= 1 ? true : false}>
        <IconId />
      </ProgressMark>
      <ProgressMark index={2} active={step >= 2 ? true : false}>
        <IconTruckDelivery />
      </ProgressMark>
      <ProgressMark index={3} active={step >= 3 ? true : false}>
        <IconCreditCard />
      </ProgressMark>
    </CheckoutProgressBarWrapper>
  );
};

export default CheckoutProgressBar;
