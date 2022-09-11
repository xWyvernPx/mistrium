import { IconAlignCenter, IconSearch } from "@tabler/icons";
import React, { useCallback } from "react";
import styled from "styled-components";
import useProduct from "../../../_hook/useProduct";
import LandingProductCard from "../../common/card/LandingProductCard";
import ProductCard from "../../common/card/ProductCard";
import { debounce } from "lodash";
import { PrimaryButton } from "../../common/button/Button";

const MainProductDisplaySide: React.FC<{ slug: string }> = ({ slug }) => {
  const { products, loadMore, setTerm, setFilter } = useProduct(slug);
  const debounceSearch = useCallback(
    debounce((term: string) => setTerm(term), 500),
    []
  );
  console.log(products);
  return (
    <MainSideWrapper>
      <Header>Products</Header>
      <FunctionSide>
        <SearchSide>
          <IconWrapper>
            <IconSearch className="icon" />
          </IconWrapper>
          <SearchField
            placeholder="Search..."
            onChange={(e) => debounceSearch(e.target.value)}
          />
        </SearchSide>
        <SortSide>
          <IconWrapper>
            <IconAlignCenter />
          </IconWrapper>
          <SortField
            onChange={(e) => {
              const [order_by, order] = e.target.value.split("-");
              setFilter(order, order_by);
            }}
          >
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="name-asc">Name ↑</option>
            <option value="name-desc">Name ↓</option>
            <option value="created_at-asc">Recent ↑</option>
            <option value="created_at-desc">Recent ↓</option>
          </SortField>
        </SortSide>
      </FunctionSide>
      <ProductsSide>
        {products?.data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsSide>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <LoadmoreButton onClick={() => loadMore()}>Load More</LoadmoreButton>
      </div>
    </MainSideWrapper>
  );
};
const LoadmoreButton = styled(PrimaryButton)`
  border-radius: 5px;
  position: relative;
  margin-top: 15rem;
  margin-bottom: 2rem;
`;
const MainSideWrapper = styled.div`
  flex: 1 1 auto;
`;
const Header = styled.h1``;
const FunctionSide = styled.div`
  margin-top: 3rem;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  height: fit-content;
  /* justify-content: space-between; */
  gap: 3rem;
`;
const SearchSide = styled.div`
  width: 65%;
  display: flex;
  height: fit-content;
  border: 2px solid var(--gray);
  border-radius: var(--radius);
  transition: all 0.3s linear;
  &:focus-within {
    border: 2px solid var(--primary);
    .icon {
      stroke: var(--primary);
    }
  }
  @media screen and (max-width: 599.98px) {
    width: 60%;
  }
`;
const SortSide = styled.div`
  width: fit-content;
  display: flex;
  height: fit-content;
  border: 2px solid var(--gray);
  &:focus-within {
    border: 2px solid var(--primary);
    /* border-radius: var(--; */
    .icon {
      stroke: var(--primary);
    }
  }
`;
const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  /* flex: 0 0 2rem; */
  svg {
    transition: all 0.3s linear;
    color: var(--gray);
  }
`;
const SearchField = styled.input`
  padding-right: 1rem;
  font-size: 2.2rem;
  flex: 1 1 auto;
  &::placeholder {
    color: var(--gray);
  }
`;
const SortField = styled.select`
  width: 12.5rem;
  font-size: 2rem;
  color: var(--black);
`;
const ProductsSide = styled.div`
  padding-top: 5rem;
  margin-top: 10rem;
  --columns: 4;
  --gap: 2rem;
  display: grid;
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  grid-gap: var(--gap);
  row-gap: 20rem;
  place-items: center;
  @media screen and (max-width: 1449.98px) {
    --columns: 3;
  }
  @media screen and (max-width: 925.98px) {
    --columns: 2;
  }
  @media screen and (max-width: 563.98px) {
    --columns: 1;
  }
`;
export default MainProductDisplaySide;
