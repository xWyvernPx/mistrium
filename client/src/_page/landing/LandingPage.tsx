import React from "react";

import styled from "styled-components";
import Footer from "../../_components/common/footer/Footer";

const Intro = React.lazy(() => import("../../_components/landing/intro/Intro"));
import ProductDisplay from "../../_components/landing/product_display/ProductDisplay";
import Special from "../../_components/landing/special/Special";

const PageLayout = styled.div`
  margin-top: var(--header-height);
`;
const ClientsLazy = React.lazy(
  () => import("../../_components/landing/clients/Clients")
);
const LandingPage = () => {
  return (
    <PageLayout>
      <Intro />
      <ClientsLazy />
      <Special />
      <ProductDisplay />
    </PageLayout>
  );
};

export default LandingPage;
