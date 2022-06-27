import React from "react";
import styled from "styled-components";
import useCheckout from "../../../_hook/useCheckout";
const CardLayout = styled.div`
  padding: 1rem 0;
  width: 17.5rem;
  height: 22.5rem;
  border-radius: 5px;
  border: 2px solid
    var(
      ${(props: { active: boolean }) =>
        props.active ? "--primary" : "--gray-light"}
    );
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    border: 2px solid var(--primary);
    cursor: pointer;
  }
`;
const ServiceImgWrapper = styled.div`
  flex: 1 1 auto;
  width: 80%;
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
interface CardProps {
  service: string;
  service_img: string;
  chosen?: boolean;
  fee: number;
}
const DeliveryPrice = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--black);
  &::after {
    content: "₫";
  }
`;
const DeliveryTime = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray);
`;
const DeliveryInformation = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ShippingServiceCard: React.FC<CardProps> = ({
  chosen,
  service,
  service_img,
  fee,
}) => {
  const { setDelivery } = useCheckout();
  return (
    <CardLayout active={chosen} onClick={() => setDelivery(service, { fee })}>
      <ServiceImgWrapper>
        <img src={service_img || "https://via.placeholder.com/150"} alt="" />
      </ServiceImgWrapper>
      <DeliveryInformation>
        <DeliveryPrice>{fee || 0}</DeliveryPrice>
        <DeliveryTime>2 - 3 days</DeliveryTime>
      </DeliveryInformation>
    </CardLayout>
  );
};

export default ShippingServiceCard;
