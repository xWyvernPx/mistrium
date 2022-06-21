import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconArrowLeft, IconArrowRight, IconSearch } from "@tabler/icons";
import { debounce } from "lodash";
import Modal from "../../_components/common/modal/Modal";
import { useRecoilState } from "recoil";
import modalAtom from "../../_atom/modalAtom";
import VerticalCategoryCard from "../../_components/common/card/VerticalCategoryCard";
import HorizontalCategoryCard from "../../_components/common/card/HorizontalCategoryCard";
import { useNavigate } from "react-router-dom";
const ProductPageContainer = styled.div`
  margin-top: var(--header-height);
  padding: 2rem var(--section-x-padding);
`;
const ProductPageHeadline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const BackButton = styled.button`
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
`;
const SearchWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
const SearchField = styled.input`
  border: 1px solid var(--gray);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 2.2rem;
  line-height: 2.4rem;
`;
interface SearchState {
  isActive: boolean;
  term: string;
}
const CategoryGridWrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: 25rem 37.5rem;
  gap: 2rem;
`;

const CardHeadline = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductPage = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    term: "",
    isActive: false,
  });
  const [modalState, setModalState] = useRecoilState(modalAtom);
  const nav = useNavigate();
  return (
    <ProductPageContainer>
      <ProductPageHeadline>
        <BackButton onClick={() => nav("/")}>
          <IconArrowLeft />
        </BackButton>
        <SearchWrapper>
          {searchState && searchState.isActive && (
            <SearchField type={"text"} placeholder=" Search..." />
          )}
          <BackButton onClick={() => nav("/products/all")}>
            See all
            <IconArrowRight />
          </BackButton>
        </SearchWrapper>
      </ProductPageHeadline>
      <CategoryGridWrapper>
        <HorizontalCategoryCard slug="bed" title="Bed" />
        <HorizontalCategoryCard slug="chair" title="Chair" />
        <VerticalCategoryCard slug="light" title="Light" />
        <VerticalCategoryCard slug="table" title="Table" />
        <VerticalCategoryCard slug="bench" title="Bench" />
        <VerticalCategoryCard slug="others" title="Others" />
      </CategoryGridWrapper>
      {modalState.isOpen && <Modal FormComponent={<h1>Hehe</h1>} />}
    </ProductPageContainer>
  );
};

export default ProductPage;
