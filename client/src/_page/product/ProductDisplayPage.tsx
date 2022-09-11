import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FilterSidebar from "../../_components/product/filter_sidebar/FilterSidebar";
import { IconFilter } from "@tabler/icons";
import MainProductDisplaySide from "../../_components/product/main_product_side/MainProductDisplaySide";
const ProductDisplayPageWrapper = styled.div`
  margin-top: var(--header-height);

  padding: 0rem var(--section-x-padding);
  display: flex;
  position: relative;
  @media screen and (max-width: 599.98px) {
    padding: 0rem 1.5rem;
  }
`;
const SidebarToggle = styled.button`
  padding: 2rem 1rem;
  place-self: center;
  height: 7rem;
  grid-area: button;
  border: 2px solid var(--light-primary);

  border-radius: 0 2rem 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  svg {
    stroke: var(--light-primary);
  }
  &:hover {
    border: 2px solid var(--accent);
    svg {
      stroke: var(--accent);
    }
  }
`;
const FilterSide = styled.div`
  position: fixed;
  left: 0;
  top: var(--header-height);
  display: flex;
  z-index: 10;
`;
const ProductDisplayPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const params = useParams();
  console.log(params);
  return (
    <ProductDisplayPageWrapper>
      <FilterSide>
        <FilterSidebar isActive={isSidebarOpen} />
        <SidebarToggle
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <IconFilter />
        </SidebarToggle>
      </FilterSide>
      <MainProductDisplaySide slug={params.slug === "all" ? "" : params.slug} />
    </ProductDisplayPageWrapper>
  );
};

export default ProductDisplayPage;
