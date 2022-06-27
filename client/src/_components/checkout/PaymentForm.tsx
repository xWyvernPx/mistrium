import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useCheckout from "../../_hook/useCheckout";
import { PrimaryButton } from "../common/button/Button";
import { TextField } from "../common/form/TextField";
import PaymentMethodItem, {
  CODMethod,
  CreditCardMethod,
} from "./PaymentMethodItem";

import { loadStripe } from "@stripe/stripe-js";
import { checkoutAPI } from "../../_api/checkout.api";
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
  const [methodType, setMethodType] = useState<{
    type: "COD" | "CARD";
  }>({
    type: "COD",
  });
  const [clientSecret, setClientSecret] = useState();
  useEffect(() => {
    checkoutAPI
      .createPaymentIntent(10000)
      .then((clientSecret) => setClientSecret(clientSecret));
  }, []);
  useEffect(() => {
    console.log(clientSecret);
  }, [clientSecret]);
  const { setMethod } = useCheckout();
  useEffect(() => {
    setMethod(methodType.toString(), null);
  }, [methodType]);

  return (
    <FormLayout>
      <CODMethod
        active={methodType.type === "COD"}
        onClick={() => setMethodType({ ...methodType, type: "COD" })}
      />
      {clientSecret && (
        <CreditCardMethod
          clientSecret={clientSecret}
          active={methodType.type === "CARD"}
          onClick={() => setMethodType({ ...methodType, type: "CARD" })}
        />
      )}
      <CustomButton>Complete Order</CustomButton>
    </FormLayout>
  );
};

export default PaymentForm;
