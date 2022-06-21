import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCart from "../../../_hook/useCart";
import NavFunction from "./NavFunction";
import ShoppingCart from "./ShoppingCart";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  padding: 2rem var(--section-x-padding);
  z-index: 100;

  // weird bug with the header
  /* overflow: hidden; */

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all 0.2s linear;
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
const Heaeder = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { isActive } = useCart();
  useEffect(() => {
    if (headerRef.current)
      window.onscroll = () => {
        console.log("ok scroll");
        if (window.scrollY > 2) {
          headerRef.current.style.position = "fixed";
          headerRef.current.style.backgroundColor = "var(--secondary)";
          headerRef.current.style.boxShadow =
            "0px 0px 10px -4px rgba(0, 0, 0, 0.75)";
        }
        if (window.scrollY <= 2) {
          headerRef.current.style.position = "absolute";
          headerRef.current.style.backgroundColor = "transparent";
          headerRef.current.style.boxShadow = "none";
        }
      };
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("removed");
      });
    };
  }, [headerRef]);
  return (
    <HeaderContainer ref={headerRef}>
      <LogoWrapper src="/imgs/logo.png" />
      <NavBarContainer>
        <NavBarItem>
          <Link to={"/"}>home</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/products"}>products</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/"}>about us</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/"}>contact</Link>
        </NavBarItem>
      </NavBarContainer>
      <NavFunction />
      <ShoppingCart />
    </HeaderContainer>
  );
};

export default Heaeder;
