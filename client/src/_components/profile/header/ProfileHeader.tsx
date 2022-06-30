import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProfileHeaderWrapper = styled.div`
  height: 5rem;
  width: 100%;
  box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  padding: 2rem var(--section-x-padding);
`;
const CustomLink = styled(Link)`
  font-size: 1.6rem;
  width: 3rem;
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--black);
    transition: transform 0.25s linear;
    transform: scale(0);
  }
  &:hover::after {
    width: 100%;
    transform: scale(1);
  }
`;
const ProfileHeader = () => {
  return (
    <ProfileHeaderWrapper>
      <CustomLink to={"/profile"}>Profile</CustomLink>
      <CustomLink to={"/profile/orders"}>Orders</CustomLink>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
