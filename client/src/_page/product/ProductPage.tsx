import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import modalAtom from "../../_atom/modalAtom";
import HorizontalCategoryCard from "../../_components/common/card/HorizontalCategoryCard";
import VerticalCategoryCard from "../../_components/common/card/VerticalCategoryCard";
import Modal from "../../_components/common/modal/Modal";
const ProductPageContainer = styled.div`
  margin-top: var(--header-height);
  padding: 2rem var(--section-x-padding);
  @media screen and (max-width: 599.98px) {
    padding: 2rem 1rem;
  }
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

  position: relative;
  z-index: 1000;
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
  transition: all 0.25s linear;
  gap: 2rem;
  @media screen and (max-width: 1023.98px) {
    grid-template-areas: "row-1-1 row-1-1  row-1-2" "row-2-1 row-2-2  row-2-2" "row-3-1 row-3-1 row-3-2";
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-template-rows: 37.5rem 37.5rem 37.5rem;
  }
  @media screen and (max-width: 599.98px) {
    grid-template-areas: "row-1-1 row-1-1 row-1-1 row-1-1 row-1-1 row-1-1 " "row-2-1 row-2-1 row-2-2  row-2-2 row-2-3 row-2-3" "row-3-1 row-3-1 row-3-1 row-3-2 row-3-2 row-3-2";
    grid-template-columns: repeat(6, minmax(40px, 1fr));
    grid-template-rows: 37.5rem 25rem 37.5rem;
  }
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
        <HorizontalCategoryCard
          slug="bed"
          thumbnail="/imgs/category/Bed.png"
          title="Bed"
        />
        <HorizontalCategoryCard
          slug="table"
          thumbnail="/imgs/category/Table.png"
          title="Table"
        />
        <VerticalCategoryCard
          slug="light"
          thumbnail="/imgs/category/Light2.png"
          title="Light"
        />
        <VerticalCategoryCard
          slug="chair"
          thumbnail="/imgs/category/Chair.png"
          title="Chair"
        />
        <VerticalCategoryCard
          slug="bench"
          thumbnail="/imgs/category/Bench.png"
          title="Bench"
        />
        <VerticalCategoryCard
          slug="others"
          thumbnail="/imgs/category/Orther.png"
          title="All"
        />
      </CategoryGridWrapper>
      {modalState.isOpen && <Modal render={() => <h1>Hehe</h1>} />}
    </ProductPageContainer>
  );
};

export default ProductPage;
