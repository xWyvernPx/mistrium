import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCheckout from "../../_hook/useCheckout";
import ShippingServiceCard from "../common/card/ShippingServiceCard";
const FormLayout = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const ShippingForm = () => {
  const { getAvailableDelivery } = useCheckout();
  const [methods, setMethods] = useState([]);
  useEffect(() => {
    getAvailableDelivery().then((data) => setMethods(data));
  }, []);
  return (
    <FormLayout>
      {methods?.map((method, i) => (
        <ShippingServiceCard
          key={i}
          service_img="http://static.ybox.vn/2020/6/6/1591409825512-ghn.png"
          service="GHN"
          fee={method?.total}
        />
      ))}
    </FormLayout>
  );
};

export default ShippingForm;
