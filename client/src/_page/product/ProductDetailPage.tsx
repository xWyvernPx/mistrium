import { IconShoppingCart } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductAPI from "../../_api/product.api";
import { PrimaryButton } from "../../_components/common/button/Button";
import RichTextView from "../../_components/editor/RichTextView";
import useCart from "../../_hook/useCart";
import useProduct from "../../_hook/useProduct";
const DetailWrapper = styled.div`
  padding: 0rem var(--section-x-padding);
  margin-top: var(--header-height);
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const ContentArea = styled.section`
  flex: 0 0 20rem;
  width: 100%;
  display: flex;
  /* justify-content: center; */
`;
const DescriptionArea = styled.section`
  flex: 1 1 auto;
`;
const ProductImgWrapper = styled.div`
  flex: 0 0 50%;
  aspect-ratio: 1 !important;
  /* padding: 7rem; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const ProductInfo = styled.div`
  display: flex;

  padding: 2rem 0;
  padding-left: 5rem;

  font-weight: 500;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 7rem;
`;
const Buyed = styled.span`
  font-weight: 400;
  color: var(--gray);
  font-size: 2rem;
  text-decoration: underline;
  &::after {
    content: " buyed";
  }
`;
const InfoLine = styled.div`
  display: flex;
  margin: 1rem 0;
  /* gap: 1rem; */
  font-size: 2.2rem;
  font-weight: 400;

  span:first-child {
    font-weight: 500;
    padding: 0.75rem 2rem;
    color: var(--white);
    background-color: var(--black);
  }
  span:nth-child(2) {
    font-weight: 500;
    padding: 0.75rem 2rem;
    color: var(--black);
    border: 2px solid var(--black);
  }
`;
const Break = styled.div`
  flex: 1 1 auto;
`;
const CartFuncWrapper = styled.div`
  display: flex;
  margin: 3rem 0;
  gap: 1rem;
`;
const CustomButton = styled(PrimaryButton)`
  display: flex;
  gap: 1rem;
`;
const DescriptionHeadline = styled.h1`
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 600;
  text-align: center;
`;
const ProductDetailPage = () => {
  const { addToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState<any>();
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    const { id }: any = params;
    ProductAPI.getDetail(id).then((data) => {
      setProduct(data);
    });
  }, [params]);

  return (
    <DetailWrapper>
      <ContentArea>
        <ProductImgWrapper>
          <img src={product?.thumbnail} alt="thumbnail" />
        </ProductImgWrapper>
        <ProductInfo>
          <Title>{product?.name}</Title>
          <Buyed>20</Buyed>
          <InfoLine>
            <span>Category </span>
            <span>{product?.category?.name}</span>
          </InfoLine>
          <InfoLine>
            <span>Stock </span>
            <span>{product?.stock}</span>
          </InfoLine>
          <InfoLine>
            <span>Price </span>
            <span>{product?.price + "₫"}</span>
          </InfoLine>
          {/* <Break /> */}
          <CartFuncWrapper>
            <QuantityWrapper>
              <button
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <QuantityField
                type="number"
                onMouseUp={(e) => e.stopPropagation()}
                value={quantity}
                min={0}
                max={99}
                disabled
              />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </QuantityWrapper>
            <CustomButton onClick={() => addToCart(product?.id, quantity)}>
              <IconShoppingCart></IconShoppingCart>Add to cart
            </CustomButton>
          </CartFuncWrapper>
        </ProductInfo>
      </ContentArea>
      <DescriptionArea>
        <DescriptionHeadline>Description</DescriptionHeadline>
        <RichTextView value={product?.desc} />
      </DescriptionArea>
    </DetailWrapper>
  );
};
const QuantityWrapper = styled.div`
  display: flex;
  font-size: 1.8rem;
  width: fit-content;
  padding: 0rem 1rem;
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
  font-size: 1.8rem;
`;
export default ProductDetailPage;
