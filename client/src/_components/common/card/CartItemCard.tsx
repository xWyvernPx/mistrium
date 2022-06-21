import { IconX } from "@tabler/icons";
import React from "react";
import styled from "styled-components";
import useCart from "../../../_hook/useCart";

const CartItemCardWrapper = styled.div`
  width: 100%;
  flex: 0 0 9rem;
  display: flex;
  scroll-snap-align: center;
`;

const ImgWrapper = styled.div`
  flex: 0 0 9rem;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CartContentWrapper = styled.div`
  padding: 0rem 0.5rem;
  margin-left: 1rem;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ItemTitle = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
`;
const PriceArea = styled.div`
  display: flex;
`;
const CurrentPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  &::before {
    content: "$";
  }
`;
const QuantityWrapper = styled.div`
  display: flex;
  font-size: 1.3rem;
  width: fit-content;
  padding: 0.35rem;
  border: 1px solid var(--gray-light);
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  button {
    padding: 0rem 0.5rem;
  }
`;
const QuantityField = styled.input`
  text-align: center;
  padding: 0 0.75rem;
`;
const RemoveButton = styled.button``;
const CartItemCard: React.FC<{ item: any }> = ({ item }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
  console.log(item);
  return (
    <CartItemCardWrapper>
      <ImgWrapper>
        <img src={item?.product?.thumbnail} alt="" />
      </ImgWrapper>
      <CartContentWrapper>
        <ItemTitle>{item?.product?.name}</ItemTitle>
        <PriceArea>
          '<CurrentPrice>{item?.product?.price}</CurrentPrice>
        </PriceArea>
        <QuantityWrapper>
          <button onClick={() => decreaseQuantity(item?.id, item?.quantity)}>
            -
          </button>
          <QuantityField
            type="number"
            onMouseUp={(e) => e.stopPropagation()}
            value={item?.quantity}
            min={0}
            max={99}
            disabled
          />
          <button onClick={() => increaseQuantity(item?.id, item?.quantity)}>
            +
          </button>
        </QuantityWrapper>
      </CartContentWrapper>
      <RemoveButton onClick={() => removeFromCart(item?.id)}>
        <IconX />
      </RemoveButton>
    </CartItemCardWrapper>
  );
};

export default CartItemCard;
