import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../common/button/Button";
import { TextField } from "../common/form/TextField";
import PaymentMethodItem, {
  CODMethod,
  CreditCardMethod,
} from "./PaymentMethodItem";

const FormLayout = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  align-items: center;
`;
const CustomButton = styled(PrimaryButton)`
  padding: 1rem 2rem;
  &:hover {
    font-weight: 400;
  }
`;
const PaymentForm = () => {
  const [method, setMethod] = useState<{
    type: "COD" | "CARD";
    card_payload?: Object;
  }>({
    type: "COD",
    card_payload: null,
  });
  return (
    <FormLayout>
      <CODMethod
        active={method.type === "COD"}
        onClick={() => setMethod({ ...method, type: "COD" })}
      />
      <CreditCardMethod
        active={method.type === "CARD"}
        onClick={() => setMethod({ ...method, type: "CARD" })}
      />
      <CustomButton>Complete Order</CustomButton>
    </FormLayout>
  );
};

export default PaymentForm;
