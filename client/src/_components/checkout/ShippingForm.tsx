import React from "react";
import styled from "styled-components";
import ShippingServiceCard from "../common/card/ShippingServiceCard";
const FormLayout = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const ShippingForm = () => {
  return (
    <FormLayout>
      <ShippingServiceCard
        service_img="http://static.ybox.vn/2020/6/6/1591409825512-ghn.png"
        service="GHN"
        chosen
        fee={0}
      />
      <ShippingServiceCard
        service_img="http://static.ybox.vn/2020/6/6/1591409825512-ghn.png"
        service="GHN"
        chosen
        fee={0}
      />
      <ShippingServiceCard
        service_img="http://static.ybox.vn/2020/6/6/1591409825512-ghn.png"
        service="GHN"
        chosen
        fee={0}
      />
    </FormLayout>
  );
};

export default ShippingForm;
