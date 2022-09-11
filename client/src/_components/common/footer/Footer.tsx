import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons";
import { TextField } from "../form/TextField";
import { PrimaryButton } from "../button/Button";
const FooterContainer = styled.div`
  background-color: var(--secondary);
  margin-top: 20rem;
  height: fit-content;
  padding: 5rem var(--section-x-padding);
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
  @media screen and (max-width: 599.98px) {
    padding: 4rem 2rem;
  }
`;
const LogoWrapper = styled.img`
  width: 12rem;
  height: auto;
`;
const NavBarContainer = styled.ul`
  /* width: fit-content; */
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  position: relative;
  input {
  }

  button {
    border-radius: 5px;
    padding: 1.5rem 2rem;
    line-height: 1.5rem;
    height: fit-content;
  }
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
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0%;
  right: 0;
`;
const SecondaryFooter = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--secondary-orange);
  padding: 3rem var(--section-x-padding);
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <NavBarContainer>
          <h2 style={{ fontSize: "4.5rem" }}>Subribe for discount or news</h2>
          <TextField style={{ width: "40rem" }}>
            <input type="email" placeholder=" " />
            <label htmlFor="" style={{ backgroundColor: "var(--secondary)" }}>
              Your email
            </label>
          </TextField>
          <PrimaryButton>Subcribe</PrimaryButton>
          <SocialWrapper>
            <IconBrandFacebook color={"var(--gray)"} />
            <IconBrandInstagram color={"var(--gray)"} />
            <IconBrandYoutube color={"var(--gray)"} />
          </SocialWrapper>
        </NavBarContainer>
      </FooterContainer>
      {/* <SecondaryFooter></SecondaryFooter> */}
    </>
  );
};

export default Footer;
