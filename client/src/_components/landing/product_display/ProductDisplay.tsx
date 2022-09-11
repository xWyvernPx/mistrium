import { IconArrowRight } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductAPI from "../../../_api/product.api";
import ProductCard from "../../common/card/ProductCard";
const ProductDisplaySection = styled.div`
  margin-top: 10rem;
  padding: 2rem var(--section-x-padding);
`;
const ProductDisplayHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 5rem;
    line-height: 5rem;
  }
  button {
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 1.7rem;
    line-height: 1.7rem;
  }
`;

const CategoryListWrapper = styled.ul`
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  line-height: 1.8rem;
  gap: 6rem;
  margin-bottom: 5rem;
  .type_active {
    color: var(--black);
  }
`;
const CategoryListItem = styled.li`
  button {
    font-weight: 400;
    transition: all 0.3s ease-in-out;
    color: var(--gray);
    text-transform: capitalize;
  }
`;
const ProductDisplayWrapper = styled.div`
  --columns: 3;
  --gap: 20px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  grid-gap: var(--gap);
  row-gap: 17rem;
  @media screen and (max-width: 1023.98px) {
    --columns: 2;
  }
  @media screen and (max-width: 590.98px) {
    --columns: 1;
  }
`;
const CateList = [
  {
    title: "All",
    value: "",
  },
  {
    title: "Bed",
    value: "bed",
  },
  {
    title: "Chair",
    value: "chair",
  },
  {
    title: "Light",
    value: "light",
  },
];
const ProductDisplay: React.FC = () => {
  // prototype :  "ALL", "CHAIR", "TABLE"
  const [type, setType] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    ProductAPI.search(
      { limit: 6, page: 1, order_by: "price", order: "desc" },
      "",
      type
    ).then((data) => {
      setData(data.data.data);
    });
  }, [type]);

  const nav = useNavigate();

  return (
    <ProductDisplaySection>
      <ProductDisplayHeading>
        <h2>Products</h2>
        <button onClick={() => nav("/products/all")}>
          See all
          <IconArrowRight />
        </button>
      </ProductDisplayHeading>
      <CategoryListWrapper>
        {CateList.map((item) => (
          <CategoryListItem key={item.value}>
            <button
              className={item.value === type ? "type_active" : ""}
              onClick={() => setType(item.value)}
            >
              {item.title}
            </button>
          </CategoryListItem>
        ))}
      </CategoryListWrapper>
      <ProductDisplayWrapper>
        {data?.slice(0, 6).map((product: any) => (
          <ProductCard product={product} />
        ))}
      </ProductDisplayWrapper>
    </ProductDisplaySection>
  );
};

export default ProductDisplay;
