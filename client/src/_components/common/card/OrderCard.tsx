import { IconDots } from "@tabler/icons";
import React, { useState } from "react";
import styled from "styled-components";
import useOrder from "../../../_hook/useOrder";
import OrderProductCard from "./OrderProductCard";
import { toast } from "react-toastify";
interface CardProps {
  width?: string;
}
const CardWrapper = styled.div`
  width: ${(props: CardProps) => (props.width ? props.width : "100%")};
  height: fit-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: -2px 2px 6px -2px rgba(0, 0, 0, 0.5);
`;
const CardHeadline = styled.div`
  flex: 0 0 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
`;
const CardContent = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  gap: 1rem;
`;
const OrderBrief = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const CardFooter = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;
const OrderId = styled.span`
  font-size: 2.8rem;
`;
const OrderStatus = styled.span`
  padding: 0.25rem 1rem;
  border-radius: 5px;
  height: fit-content;
  display: grid;
  place-items: center;
  color: var(--white);
  background-color: var(
    ${(props: { status: number }) => {
      switch (props.status) {
        case 1:
          return "--warning";
        case 2:
          return "--warning";
        case 3:
          return "--success";
        case 0:
          return "--danger";
        default:
          return "--gray";
      }
    }}
  );
`;
const OrderDate = styled.span`
  font-size: 1.7rem;
  color: var(--gray);
  margin-top: -1rem;
  padding-bottom: 1rem;
  flex: 0 0 fit-content;
`;
const Devider = styled.div`
  flex: 0 0 2px;
  background-color: var(--gray-light);
  width: 100%;
`;
const FooterItems = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;
const CardMenuButton = styled.span`
  cursor: pointer;
  position: relative;
`;
const CardMenu = styled.div`
  padding: 0.75rem 1.25rem;
  min-width: 10rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(100%, 100%);
  border-radius: 5px;
  background-color: var(--white);
  z-index: 10;
  box-shadow: -2px 2px 10px -3px rgba(0, 0, 0, 0.65);
`;
const CardMenuItem = styled.button`
  font-size: 1.6rem;
  transition: all 0.2s linear;
  color: var(
    ${(props: { disabled?: boolean }) =>
      props.disabled ? "--gray" : "--black"}
  );
  &:hover {
    color: var(
      ${(props: { disabled: boolean }) =>
        props.disabled ? "--gray" : "--accent"}
    );
  }
  &:disabled {
    pointer-events: none;
    user-select: none;
    cursor: default;
  }
`;
const OrderCard: React.FC<{
  order: any;
  handleCancel: Function;
  handleReorder: Function;
}> = ({ order, handleCancel, handleReorder }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>();
  return (
    <CardWrapper>
      <CardHeadline>
        <OrderBrief>
          <OrderId>Order#{order?.id}</OrderId>
          <OrderStatus status={order?.process}>
            {order?.process === 0
              ? "Cancel"
              : order?.process === 1
              ? "Processing"
              : order?.process === 2
              ? "Paid"
              : "Done"}
          </OrderStatus>
        </OrderBrief>
        <CardMenuButton
          onClick={(e) => {
            setMenuOpen(!menuOpen);
          }}
          onBlur={() => setMenuOpen(false)}
        >
          <IconDots />
          {menuOpen && (
            <CardMenu>
              <CardMenuItem
                onClick={(e) => {
                  handleCancel(order?.id);
                  setMenuOpen(false);
                }}
                disabled={!(order?.process === 1 || order?.processs === 2)}
              >
                Cancel
              </CardMenuItem>
              <CardMenuItem
                onClick={() => {
                  handleReorder(order?.id);
                  setMenuOpen(false);
                }}
                disabled={!(order?.process === 0)}
              >
                Reorder
              </CardMenuItem>
            </CardMenu>
          )}
        </CardMenuButton>
      </CardHeadline>
      <OrderDate>{order?.created_at}</OrderDate>
      <Devider />
      <CardContent>
        {order?.order_details?.map((order_detail: any, i: number) => (
          <OrderProductCard order_detail={order_detail} />
        ))}
      </CardContent>
      <Devider />
      <CardFooter>
        <FooterItems>Total</FooterItems>
        <FooterItems>Shipping Fee</FooterItems>
        <FooterItems>Subtotal</FooterItems>
      </CardFooter>
    </CardWrapper>
  );
};

export default OrderCard;
