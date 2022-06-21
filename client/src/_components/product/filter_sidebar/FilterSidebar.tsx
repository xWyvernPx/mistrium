import React from "react";
import styled from "styled-components";

const FilterSidebarWrapper = styled.div`
  display: flex;
  width: ${(props: { isActive: boolean }) => (props.isActive ? "20rem" : "0")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-area: sidebar;
  height: calc(100vh - var(--header-height));
  transition: all 0.3s ease-in-out;

  background-color: red;
`;
const FilterSidebar: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return <FilterSidebarWrapper isActive={isActive}></FilterSidebarWrapper>;
};

export default FilterSidebar;
