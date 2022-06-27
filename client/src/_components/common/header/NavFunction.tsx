import React from "react";
import styled from "styled-components";
import { IconSearch, IconUser, IconBasket } from "@tabler/icons";
import useCart from "../../../_hook/useCart";
import useAuth from "../../../_hook/useAuth";
import UserHeader from "./UserHeader";
import useModal from "../../../_hook/useModal";
const NavFuncContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-self: center;
`;
const FuncButton = styled.button`
  background-color: transparent;
  transform: translateY(0.5rem);
  position: relative;
  svg {
    width: 3rem;
    stroke-width: 1.5px;
  }
`;
const CartTag = styled.div`
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--danger);
  color: var(--white);
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 1.25rem;

  top: 0;
  right: 0;
  transform: translate(40%, -40%);
`;
const NavFunction = () => {
  const { toggleCart, cartSize } = useCart();
  const { user } = useAuth();
  const { setModalState } = useModal();
  return (
    <NavFuncContainer>
      {/* <FuncButton>
        <IconSearch size={30} />
      </FuncButton> */}
      <FuncButton
        onClick={() => {
          toggleCart();
        }}
      >
        <IconBasket size={30} />
        <CartTag>{cartSize}</CartTag>
      </FuncButton>
      {!user ? (
        <FuncButton
          onClick={() => {
            setModalState({ isOpen: true, componentName: "LOGIN" });
          }}
        >
          <IconUser size={30} />
        </FuncButton>
      ) : (
        <UserHeader />
      )}
    </NavFuncContainer>
  );
};

export default NavFunction;
