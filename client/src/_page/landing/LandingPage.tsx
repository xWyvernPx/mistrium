import React from "react";

import styled from "styled-components";
import Footer from "../../_components/common/footer/Footer";
import Clients from "../../_components/landing/clients/Clients";
import Intro from "../../_components/landing/intro/Intro";
import ProductDisplay from "../../_components/landing/product_display/ProductDisplay";
import Special from "../../_components/landing/special/Special";

const PageLayout = styled.div`
  margin-top: var(--header-height);
`;

const LandingPage = () => {
  return (
    <PageLayout>
      <Intro />
      <Clients />
      <Special />
      <ProductDisplay />
    </PageLayout>
  );
};

export default LandingPage;
