import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCart from "../../../_hook/useCart";
import NavFunction from "./NavFunction";
import ShoppingCart from "./ShoppingCart";
import { IconMenu2, IconX } from "@tabler/icons";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  padding: 2rem var(--section-x-padding);
  z-index: 10090;

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
  svg {
    display: none;
  }
  transition: all 0.2s linear;
  @media screen and (max-width: 609.98px) {
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    left: ${({ active }: { active: boolean }) => {
      return active ? "0" : "-21rem";
    }};
    background-color: var(--white);
    padding: 4rem 3rem;
    border-radius: 0px 0px 5px 0px;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.5);
    svg {
      display: block;
      right: 0;
      top: 0;
    }
  }
`;
const NavBarItem = styled.li`
  /* color: var(--black); */
  color: inherit;
  text-transform: lowercase;
  font-size: var(--fs-content);
  font-weight: 400;
  position: relative;
  width: fit-content;
  text-align: center;
  a {
    color: inherit;
  }
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
  @media screen and (max-width: 609.98px) {
    font-size: 2.25rem;
  }
`;
const MenuButton = styled.button`
  display: none;
  @media screen and (max-width: 609.98px) {
    display: block;
  }
`;
const Heaeder = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { isActive } = useCart();
  const [menuActive, setMenuActive] = useState(false);
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
          headerRef.current.style.color = "var(--black)";
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
      <MenuButton onClick={() => setMenuActive(true)}>
        <IconMenu2></IconMenu2>
      </MenuButton>
      <LogoWrapper src="/imgs/logo.png" />
      <NavBarContainer active={menuActive}>
        <IconX
          style={{ cursor: "pointer" }}
          onClick={() => setMenuActive(false)}
        />
        <NavBarItem>
          <Link to={"/"} onClick={() => setMenuActive(false)}>
            home
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/products"} onClick={() => setMenuActive(false)}>
            products
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/"} onClick={() => setMenuActive(false)}>
            about us
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={"/"} onClick={() => setMenuActive(false)}>
            contact
          </Link>
        </NavBarItem>
      </NavBarContainer>
      <NavFunction />
      <ShoppingCart />
    </HeaderContainer>
  );
};

export default Heaeder;
