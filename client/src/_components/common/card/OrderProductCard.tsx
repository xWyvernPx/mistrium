import React from "react";
import styled from "styled-components";
const CardLayout = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  height: 12rem;
  background-color: var(--white);
  display: flex;
  gap: 2rem;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 17px -3px;
`;
const CardImgWrapper = styled.div`
  width: 20rem;
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const CardContent = styled.div`
  flex: 1 1 auto;
`;
const CardPrice = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const OrderProductCard: React.FC<{ order_detail: any }> = ({
  order_detail,
}) => {
  return (
    <CardLayout>
      <CardImgWrapper>
        <img src={order_detail?.product?.thumbnail} alt="" />
      </CardImgWrapper>
      <CardContent>
        <h3>{order_detail?.product?.name}</h3>
      </CardContent>
      <CardPrice>
        <h3 style={{ fontWeight: 500 }}>${order_detail?.product?.price}</h3>
        <h4 style={{ fontWeight: 400 }}>Qty : {order_detail?.quantity}</h4>
      </CardPrice>
    </CardLayout>
  );
};

export default OrderProductCard;
