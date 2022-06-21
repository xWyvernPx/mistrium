import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons";
const FooterContainer = styled.div`
  margin-top: 15rem;
  height: var(--header-height);
  padding: 3rem var(--section-x-padding);
  z-index: 100;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all 0.2s linear;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    height: 2px;
    background-color: var(--gray);
  }
`;
const LogoWrapper = styled.img`
  width: 12rem;
  height: auto;
`;
const NavBarContainer = styled.ul`
  width: fit-content;
  display: flex;
  gap: 3rem;
`;
const NavBarItem = styled.li`
  color: var(--black);
  text-transform: lowercase;
  font-size: var(--fs-content);
  font-weight: 400;
  position: relative;
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
const SocialWrapper = styled.div`
  flex: 0 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper src="/imgs/logo.png" />
      <NavBarContainer>
        <NavBarItem>
          <Link to={"/"}>home</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/"}>products</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/"}>about us</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/"}>contact</Link>
        </NavBarItem>
      </NavBarContainer>
      <SocialWrapper>
        <IconBrandFacebook color={"var(--gray)"} />
        <IconBrandInstagram color={"var(--gray)"} />
        <IconBrandYoutube color={"var(--gray)"} />
      </SocialWrapper>
    </FooterContainer>
  );
};

export default Footer;
