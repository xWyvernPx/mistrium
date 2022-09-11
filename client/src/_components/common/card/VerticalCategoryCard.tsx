import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const VerticalCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  border: 1px solid var(--gray);
  grid-row: 2;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1023.98px) {
    /* grid-template-areas: "row-1-1 row-1-2" "row-2-1" "row-2-2" "row-3-1 row-3-2"; */
    &:nth-child(3) {
      grid-area: row-2-1;
      /* width: 70%; */
    }
    &:nth-child(4) {
      grid-area: row-2-2;
      /* width: 30%; */
    }
    &:nth-child(5) {
      grid-area: row-3-1;
      /* width: 30%; */
    }
    &:nth-child(6) {
      grid-area: row-3-2;
      /* width: 30%; */
    }
  }
  @media screen and (max-width: 599.98px) {
    /* grid-template-areas: "row-1-1 row-1-2" "row-2-1" "row-2-2" "row-3-1 row-3-2"; */
    &:nth-child(3) {
      grid-area: row-2-2;
      /* width: 70%; */
    }
    &:nth-child(4) {
      grid-area: row-2-3;
      /* width: 30%; */
    }
    &:nth-child(5) {
      grid-area: row-3-1;
      /* width: 30%; */
    }
    &:nth-child(6) {
      grid-area: row-3-2;
      /* width: 30%; */
    }
    padding: 3rem 1rem;
  }
`;
const CardHeadline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h2,
  span {
    font-weight: 400;
    font-size: 2.4rem;
    color: var(--black-title);
  }
`;
const CategoryThumbnail = styled.div`
  position: absolute;
  width: 90%;
  height: 80%;
  top: 25%;
  right: -10%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
interface CategoryCard {
  title: string;
  slug: string;
  thumbnail?: string;
}
const VerticalCategoryCard: React.FC<CategoryCard> = ({
  slug,
  thumbnail,
  title,
}) => {
  const navigate = useNavigate();
  const cardClickHandler = useCallback(() => {
    navigate(`/products/${slug || "all"}`);
  }, []);

  return (
    <VerticalCard onClick={cardClickHandler}>
      <CardHeadline>
        <h2>{title}</h2>
        <span>20</span>
      </CardHeadline>
      <CategoryThumbnail>
        <img src={thumbnail || "https://source.unsplash.com/random"} alt="" />
      </CategoryThumbnail>
    </VerticalCard>
  );
};

export default VerticalCategoryCard;
