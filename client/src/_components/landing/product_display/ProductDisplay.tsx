import React, { useState } from "react";
import styled from "styled-components";
import { IconArrowRight } from "@tabler/icons";
const ProductDisplaySection = styled.div`
  padding: 2rem var(--section-x-padding);
`;
const ProductDisplayHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CategoryListWrapper = styled.ul`
  display: flex;
  gap: 2rem;
`;
const CategoryListItem = styled.li``;
const ProductDisplay = () => {
  // prototype :  "ALL", "CHAIR", "TABLE"
  const [type, setType] = useState<String>("ALL");

  return (
    <ProductDisplaySection>
      <ProductDisplayHeading>
        <h2>Products</h2>
        <button>
          See all
          <IconArrowRight />
        </button>
      </ProductDisplayHeading>
      <CategoryListWrapper></CategoryListWrapper>
    </ProductDisplaySection>
  );
};

export default ProductDisplay;
