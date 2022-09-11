import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { checkoutAPI } from "../../_api/checkout.api";
import CreditCardForm from "../common/form/CreditCardForm";

const ItemLayout = styled.div`
  width: ${(props: { width: string; active: boolean }) =>
    props.width || "35rem"};
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  border: 2px solid
    var(
      ${(props: { active: boolean }) =>
        props.active ? "--primary" : "--gray-light"}
    );
  padding: 1rem;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--primary);
    color: var(--primary);
  }
`;
interface PaymentMethodItemProps {
  name?: string;
  Form?: React.ReactNode;
  active: boolean;
  onClick?: Function;
  clientSecret?: string;
}
const ItemName = styled.span`
  font-size: 1.8rem;
  background-color: none;
  transition: all 0.2s linear;
  flex: 1 1 auto;
`;
const ItemFormWrapper = styled.div``;
const PaymentMethodItem: React.FC<PaymentMethodItemProps> = ({
  name,
  Form,
  active,
  onClick,
}) => {
  return (
    <ItemLayout active={active} width="50rem" onClick={() => onClick()}>
      <ItemName>{name}</ItemName>
      <ItemFormWrapper>{active && Form}</ItemFormWrapper>
    </ItemLayout>
  );
};

export const CODMethod: React.FC<PaymentMethodItemProps> = ({
  active,
  onClick,
}) => {
  return <PaymentMethodItem name="COD" active={active} onClick={onClick} />;
};

export const CreditCardMethod: React.FC<PaymentMethodItemProps> = ({
  active,
  onClick,
  clientSecret,
}) => {
  const pk_key = useMemo(
    () => checkoutAPI.getPublicKey().then((publicKey: string) => publicKey),
    []
  );

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  const creditCardPayment = useCallback(async () => {}, [clientSecret]);
  return (
    <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
      <PaymentMethodItem
        onClick={onClick}
        name="Credit Card"
        active={active}
        Form={<CreditCardForm clientSecret={clientSecret} />}
      />
    </Elements>
  );
};

export default PaymentMethodItem;
