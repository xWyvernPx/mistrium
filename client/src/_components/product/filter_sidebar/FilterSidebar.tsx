import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FilterSidebarWrapper = styled.div`
  display: flex;
  width: ${(props: { isActive: boolean }) => (props.isActive ? "20rem" : "0")};
  padding: 2rem 0rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-area: sidebar;
  height: calc(100vh - var(--header-height));
  position: relative;
  left: ${(props: { isActive: boolean }) => (props.isActive ? "0" : "-5rem")};
  transition: all 0.3s ease-in-out;
  background-color: var(--secondary-pink);
  box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.5);
`;
const CustomeLink = styled(Link)``;
const Title = styled.h3`
  font-weight: 500;
`;
const FilterSidebar: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <FilterSidebarWrapper isActive={isActive}>
      <Title>Price Range</Title>
      <Title>Brand</Title>
      <Title>Rating</Title>
    </FilterSidebarWrapper>
  );
};

export default FilterSidebar;
