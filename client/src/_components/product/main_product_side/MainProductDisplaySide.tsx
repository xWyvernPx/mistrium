import { IconAlignCenter, IconSearch } from "@tabler/icons";
import React, { useCallback } from "react";
import styled from "styled-components";
import useProduct from "../../../_hook/useProduct";
import LandingProductCard from "../../common/card/LandingProductCard";
import ProductCard from "../../common/card/ProductCard";
import { debounce } from "lodash";
import { PrimaryButton } from "../../common/button/Button";
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
  justify-content: space-between;
`;
const SearchSide = styled.div`
  width: 65%;
  display: flex;
  height: fit-content;
  border: 2px solid var(--gray);
  transition: all 0.3s linear;
  &:focus-within {
    border: 2px solid var(--primary);
    .icon {
      stroke: var(--primary);
    }
  }
`;
const SortSide = styled.div`
  width: 20%;
  display: flex;
  height: fit-content;
  border: 2px solid var(--gray);
  &:focus-within {
    border: 2px solid var(--primary);
    .icon {
      stroke: var(--primary);
    }
  }
`;
const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
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
  width: 100%;
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
  row-gap: 15rem;
  place-items: center;
`;
const MainProductDisplaySide: React.FC<{ slug: string }> = ({ slug }) => {
  const { products, loadMore, setTerm } = useProduct(slug);
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
          <SortField>
            <option value="">price</option>
          </SortField>
        </SortSide>
      </FunctionSide>
      <ProductsSide>
        {products?.data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsSide>
      <LoadmoreButton onClick={loadMore}>Load More</LoadmoreButton>
    </MainSideWrapper>
  );
};
const LoadmoreButton = styled(PrimaryButton)`
  border-radius: 5px;
  position: relative;
`;
export default MainProductDisplaySide;
