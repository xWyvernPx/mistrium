import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../button/Button";
import { IconBasket } from "@tabler/icons";
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
    &::before {
      content: "$";
    }
  }
`;
const AddToCartButton = styled(PrimaryButton)`
  position: absolute;
  background-color: var(--light-primary);
  font-size: 1.4rem;
  padding: 0.75rem 1.4rem;
  line-height: 1.4rem;
  width: fit-content;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    font-weight: 400; //override default
  }
`;

const ProductImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  bottom: 0;

  transform: translateX(-50%) translateY(11rem);
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const LandingProductCard = () => {
  return (
    <LandingProductCardWrapper>
      <AddToCartButton>
        Add to Cart <IconBasket strokeWidth={1.5} />
      </AddToCartButton>
      <CardContent>
        <h3>Ramen Stool</h3>
        <PriceLine>
          <span className="new">65</span>
          <span className="old">95</span>
        </PriceLine>
      </CardContent>
      <ProductImageWrapper>
        <img src="/imgs/light.png" alt="" />
      </ProductImageWrapper>
    </LandingProductCardWrapper>
  );
};

export default LandingProductCard;
