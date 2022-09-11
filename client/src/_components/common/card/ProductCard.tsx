import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../button/Button";
import { IconBasket, IconEye } from "@tabler/icons";
import useCart from "../../../_hook/useCart";
import { useNavigate } from "react-router-dom";
import authAtom from "../../../_atom/authAtom";
import { useRecoilValue } from "recoil";
import useModal from "../../../_hook/useModal";
import { toast } from "react-toastify";
const LandingProductCardWrapper = styled.div`
  width: 31rem;
  padding: 4rem 5rem;
  aspect-ratio: 1;
  background-color: var(--secondary);
  position: relative;
`;
const CardContent = styled.div`
  h3 {
    font-size: 2.6rem;
    line-height: 2.6rem;
    margin-bottom: 3rem;
  }
`;
const PriceLine = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  font-size: 1.9rem;
  color: var(--black);
  font-weight: 500;
  span {
    margin-right: 3rem;
    &:first-child {
    }
    &:last-child {
      font-size: 1.5rem;
      text-decoration: line-through;
      color: var(--gray);
    }
    &::after {
      content: "₫";
    }
  }
`;
const AddToCartButton = styled(PrimaryButton)`
  background-color: var(--light-primary);
  font-size: 1.4rem;
  padding: 0.75rem 1.4rem;
  line-height: 1.4rem;
  width: fit-content;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    font-weight: 400; //override default
  }
`;

const ProductImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 4rem;

  transform: translateX(-50%) translateY(11rem);
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const { addToCart } = useCart();
  const nav = useNavigate();
  const { user } = useRecoilValue(authAtom);
  const { setModalState } = useModal();
  return (
    <LandingProductCardWrapper>
      <ButtonsWrapper>
        <AddToCartButton
          onClick={() => {
            if (user) addToCart(product?.id, 1);
            else {
              toast.error("You must be logged in to add to cart");
              setModalState({
                isOpen: true,
                componentName: "LOGIN",
                payload: null,
              });
            }
          }}
        >
          Add to Cart <IconBasket strokeWidth={1.5} />
        </AddToCartButton>
        <AddToCartButton onClick={() => nav("/products/detail/" + product?.id)}>
          View <IconEye strokeWidth={1.5} />
        </AddToCartButton>
      </ButtonsWrapper>
      <CardContent>
        <h3>{product?.name || "Ramen Stool"}</h3>
        <PriceLine>
          <span className="new">{product?.price}</span>
          <span className="old">{(product?.price * 1.1).toFixed(0)}</span>
        </PriceLine>
      </CardContent>
      <ProductImageWrapper>
        <img src={product?.thumbnail || "/imgs/Product1.png"} alt="" />
      </ProductImageWrapper>
    </LandingProductCardWrapper>
  );
};

export default ProductCard;
