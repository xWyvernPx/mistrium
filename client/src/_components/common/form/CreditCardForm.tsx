import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { MultipleTextField, TextField } from "./TextField";
import ReactNumberFormat from "react-number-format";
import { PrimaryButton } from "../button/Button";
import { PaymentElement, Elements, CardElement } from "@stripe/react-stripe-js";
import { checkoutAPI } from "../../../_api/checkout.api";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import useCart from "../../../_hook/useCart";
import useCheckout from "../../../_hook/useCheckout";

const FormLayout = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const CreditCardForm: React.FC<{ clientSecret?: string }> = ({
  clientSecret,
}) => {
  const { cartItems } = useCart();
  const { checkoutPayload } = useCheckout();

  const stripe = useStripe();
  const elements = useElements();
  const fee = useMemo(
    () => (checkoutPayload.delivery.metadata as any).fee,
    [checkoutPayload]
  );
  const total = useMemo(
    () =>
      cartItems?.reduce(
        (acc, curr) => acc + curr?.product?.price * curr?.quantity,
        0
      ),
    [cartItems]
  );
  return (
    <FormLayout
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(total + fee);

        // if (!stripe || !elements || !clientSecret) return;
        const { paymentIntent, error } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }
        );
        console.log(paymentIntent);
      }}
    >
      {/* <TextField>
          <ReactNumberFormat format={"#### #### #### ####"} mask={"_"} />
          <label htmlFor="">Card Number</label>
        </TextField>
        <MultipleTextField>
          <TextField>
            <ReactNumberFormat format={"##"} mask={"_"} />
            <label htmlFor="">Exp Month</label>
          </TextField>
          <TextField>
            <ReactNumberFormat format={"##"} mask={"_"} />
            <label htmlFor="">Exp Year</label>
          </TextField>
          <TextField>
            <ReactNumberFormat type={"password"} format={"###"} mask={"_"} />
            <label htmlFor="">CVC</label>
          </TextField>
        </MultipleTextField> */}
      <CardElement />
      <PrimaryButton type="submit">Make a payment</PrimaryButton>
    </FormLayout>
  );
};

export default CreditCardForm;
