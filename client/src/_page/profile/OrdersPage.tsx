import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TextField } from "../../_components/common/form/TextField";
import OrderCard from "../../_components/common/card/OrderCard";
import useOrder from "../../_hook/useOrder";
const OrdersPageLayout = styled.div`
  margin-top: var(--header-height);
  padding: 2rem var(--section-x-padding);
`;
const OrderTypes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const OrderType = styled.button`
  font-size: 2.2rem;
  color: var(--black);
  font-weight: 500;
  position: relative;
  transition: all 0.2s linear;
  &::after {
    transition: all 0.2s linear;
    content: "";
    height: 2px;
    transform: scale(0);
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    background-color: var(--primary);
  }
  &:hover {
    color: var(--primary);
  }
  &:hover::after {
    color: var(--primary);
    transform: scale(1);
  }
`;
const PageHeadline = styled.h1`
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 3rem;
`;
const DateFilterSection = styled.div`
  display: flex;
  justify-content: center;

  gap: 4rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
`;
const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  gap: 2rem;
  width: 80%;
`;
const OrdersPage = () => {
  const {
    orderList,
    setPagination,
    reorder,
    cancelOrder,
    setStatus,
    setFromDateFilter,
    setToDateFilter,
  } = useOrder();
  return (
    <OrdersPageLayout>
      <PageHeadline>My Orders</PageHeadline>
      <OrderTypes>
        <OrderType onClick={() => setStatus(-1)}>ALL</OrderType>
        <OrderType onClick={() => setStatus(1)}>PROCESSING</OrderType>
        <OrderType onClick={() => setStatus(0)}>CANCEL</OrderType>
        <OrderType onClick={() => setStatus(3)}>DONE</OrderType>
      </OrderTypes>
      <DateFilterSection>
        <TextField width="30%">
          <input
            type="date"
            onChange={(e) => {
              const dateValue = e.target.value.split("-").reverse();
              const temp = dateValue[1];
              dateValue[1] = dateValue[0];
              dateValue[0] = temp;
              setFromDateFilter(dateValue.join("/"));
            }}
            placeholder=" "
          />
          <label htmlFor="">From</label>
        </TextField>
        <TextField width="30%">
          <input
            type="date"
            onChange={(e) => {
              const dateValue = e.target.value.split("-").reverse();
              const temp = dateValue[1];
              dateValue[1] = dateValue[0];
              dateValue[0] = temp;
              setToDateFilter(dateValue.join("/"));
            }}
            placeholder=" "
          />
          <label htmlFor=""> To</label>
        </TextField>
      </DateFilterSection>
      <OrdersList>
        {orderList &&
          orderList.map((order: any, i: any) => (
            <OrderCard
              handleCancel={cancelOrder}
              handleReorder={reorder}
              order={order}
              key={i}
            />
          ))}
      </OrdersList>
    </OrdersPageLayout>
  );
};

export default OrdersPage;
