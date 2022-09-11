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
import { useRecoilValue } from "recoil";
import checkoutAtom, { cartTotalPriceState } from "../../_atom/checkoutAtom";
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
  const {
    name,
    phone,
    province_id,
    district_id,
    ward_id,
    delivery: {
      type,
      metadata: { fee },
    },
    details,
  } = useRecoilValue(checkoutAtom);

  const [clientSecret, setClientSecret] = useState();
  const checkoutTotal = useRecoilValue(cartTotalPriceState);
  const { createOrder } = useCheckout();

  useEffect(() => {
    checkoutAPI
      .createPaymentIntent(checkoutTotal)
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
      {methodType.type === "COD" && (
        <CustomButton
          onClick={() => {
            createOrder({
              name,
              phone,
              province_id,
              district_id,
              ward_id,
              details,
              delivery_type: type,
              delivery_cost: fee,
              method_type: "COD",
              payment_intent_id: clientSecret,
            });
          }}
        >
          Complete Order
        </CustomButton>
      )}
    </FormLayout>
  );
};

export default PaymentForm;
