import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useCart from "../../../_hook/useCart";
import { PrimaryButton, PrimaryOutlineButton } from "../button/Button";
import { IconArrowRight } from "@tabler/icons";
import CartItemCard from "../card/CartItemCard";
import { cartAPI } from "../../../_api/cart.api";
import { useRecoilState } from "recoil";
import cartAtom from "../../../_atom/cartAtom";
import { useNavigate } from "react-router-dom";
const ShoppingCartWrapper = styled.div`
  height: 75vh;
  width: 35rem;
  background-color: var(--white);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  padding: 2rem;
  position: absolute;
  right: -37rem;
  top: 0;

  display: flex;
  flex-direction: column;
  transition: all 0.2s linear;
`;
const CloseButton = styled.button`
  /* position: absolute;
  top: 1rem;
  right: 1rem; */
  background-color: transparent;
`;
const CartHeadline = styled.span`
  font-size: 2.5rem;
  flex: 0 0 auto;
  text-transform: capitalize;
`;
const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--gray-light);
  margin-bottom: 2rem;
  flex: 0 0 2px;
`;
const CartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1 1 auto;
  overflow-y: scroll;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TotalArea = styled.div`
  flex: 0 0 2rem;
  display: flex;
  margin-top: 1rem;
  padding-top: 0.5rem;
  flex-direction: column;
  border-top: 2px solid var(--gray-light);
`;
const HeadlineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;
const CheckoutButton = styled(PrimaryButton)`
  padding: 1rem 2rem;
  &:hover {
    font-weight: 400;
  }
`;
const TotalPrice = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: var(--black);
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const TotalTitle = styled.span``;

const TotalPriceText = styled.span`
  &::before {
    content: "$";
  }
`;
const ShoppingCart = () => {
  const { toggleCart, isActive } = useCart();
  const [cart, setCart] = useRecoilState(cartAtom);
  const navigate = useNavigate();
  const cartRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(isActive);
    console.log(window.document.children);
    if (cartRef.current && isActive) {
      cartRef.current.style.right = "0";
      window.document.children[0].classList.add("stop_scroll");
    }
    if (!isActive && cartRef.current) {
      cartRef.current.style.right = "-37rem";
      window.document.children[0].classList.remove("stop_scroll");
    }

    return () => {
      cartRef.current.style.right = "-37rem";
      window.document.children[0].classList.remove("stop_scroll");
    };
  }, [isActive]);
  useEffect(() => {
    cartAPI
      .getCart()
      .then((cartFetched) =>
        setCart({ ...cart, id: cartFetched.id, cartItems: cartFetched.details })
      );
  }, []);
  return (
    <ShoppingCartWrapper
      ref={cartRef}
      //   className={`${isActive ? "cart_active" : ""}`}
    >
      <HeadlineWrapper>
        <CartHeadline>Your Cart</CartHeadline>
        <CloseButton
          onClick={() => {
            toggleCart();
          }}
        >
          <IconArrowRight />
        </CloseButton>
      </HeadlineWrapper>
      <Divider />
      <CartListWrapper>
        {cart?.cartItems?.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </CartListWrapper>
      <TotalArea>
        <TotalPrice>
          <TotalTitle>Total</TotalTitle>
          <TotalPriceText>
            {cart?.cartItems?.reduce(
              (acc, curr) => acc + curr?.product?.price * curr?.quantity,
              0
            )}
          </TotalPriceText>
        </TotalPrice>
        <CheckoutButton
          onClick={() => {
            toggleCart();
            navigate("/checkout");
          }}
        >
          Checkout
        </CheckoutButton>
      </TotalArea>
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
