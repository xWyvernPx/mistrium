import React, { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const HorizontalCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 3rem;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  border: 1px solid var(--gray);
  &:first-child {
    grid-column: 1 / span 2;
  }
  &:nth-child(2) {
    grid-column: 3 / span 2;
  }
  &:hover {
    cursor: pointer;
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
  thumbnail?: String;
}
const HorizontalCategoryCard: React.FC<CategoryCard> = ({
  slug,
  thumbnail,
  title,
}) => {
  const navigate = useNavigate();
  const cardClickHandler = useCallback(() => {
    navigate(`/products/${slug || "all"}`);
  }, []);

  return (
    <HorizontalCard onClick={cardClickHandler}>
      <CardHeadline>
        <h2>{title}</h2>
        <span>20</span>
      </CardHeadline>
      <CategoryThumbnail>
        <img src="https://source.unsplash.com/random" alt="" />
      </CategoryThumbnail>
    </HorizontalCard>
  );
};

export default HorizontalCategoryCard;
