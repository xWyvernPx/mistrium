import React, { useMemo } from "react";
import useCart from "../../_hook/useCart";
import CartItemCard from "../common/card/CartItemCard";
import styled from "styled-components";
import useCheckout from "../../_hook/useCheckout";

const OrderReviewArea = styled.div`
  flex: 0 0 40rem;
  padding: 2rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  max-height: 80vh;
  h3 {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1023.98px) {
    flex: 0 0 35rem;
  }
`;
const OrderReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const OrderReviewInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const OrderPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  span {
    font-size: 1.5rem;
    font-weight: 400;
    &::before {
      content: "$";
    }
  }
`;
const OrderReview = () => {
  const { cartItems } = useCart();
  const { checkoutPayload } = useCheckout();
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
    <OrderReviewArea>
      <h3>Order Review</h3>
      <OrderReviewList>
        {cartItems?.map((item) => (
          <CartItemCard key={item?.id} item={item} />
        ))}
      </OrderReviewList>
      <OrderReviewInfo>
        <OrderPrice>
          <h2>Total</h2>
          <span> {total}</span>
        </OrderPrice>
        <OrderPrice>
          <h2>Shipping Fee</h2>
          <span>{fee || 0}</span>
        </OrderPrice>
        <OrderPrice>
          <h2>Subtotal</h2>
          <span>{fee ? total + fee : total}</span>
        </OrderPrice>
      </OrderReviewInfo>
    </OrderReviewArea>
  );
};

export default OrderReview;
