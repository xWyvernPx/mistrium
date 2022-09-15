import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../../_hook/useAuth";
const UserAreaWrapper = styled.span`
  height: 4rem;
  width: fit-content;
  padding: 0rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s linear;
  position: relative;
  &:hover,
  &:active {
    border: 1px solid var(--primary);
  }
  /* box-shadow: 0px 0px 10px -5px var(--danger); */
`;
const AvatarWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1;
  padding: 0.5rem;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const UsernameSpan = styled.span`
  font-size: 1.5rem;
  padding: 0rem 0.5rem;
`;
const UserHeader = () => {
  const { user_details, logout } = useAuth();
  const [menu, setMenu] = useState(false);
  return (
    <UserAreaWrapper
      onClick={() => setMenu(!menu)}
      onBlur={() => setMenu(false)}
    >
      <AvatarWrapper>
        <img
          src={
            user_details?.avatar_url
              ? user_details?.avatar_url
              : "https://source.unsplash.com/random"
          }
          alt=""
        />
      </AvatarWrapper>
      <UsernameSpan>{user_details?.name || "User"}</UsernameSpan>
      <UserMenu active={menu} />
    </UserAreaWrapper>
  );
};
const UserMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  right: ${(props: { active: boolean }) => (props.active ? "0" : "10rem")};
  bottom: 0;
  height: fit-content;
  padding: 1rem 0.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  background-color: var(--secondary-pink);
  border-radius: 5px;
  transition: all 0.2s linear;

  opacity: ${(props: { active: boolean }) => (props.active ? 1 : 0)};
  transform: translateY(
    ${(props: { active: boolean }) =>
      props.active ? "calc(100% + 0.25rem)" : "85%"}
  );
  box-shadow: -2px 2px 10px -6px rgba(0, 0, 0, 0.75);
`;
const CustomLink = styled(Link)`
  font-size: 1.5rem;
  transition: all 0.15s linear;
  align-self: center;
  &:hover {
    color: var(--primary);
  }
`;
const LogoutLink = styled.button`
  font-size: 1.5rem;
  transition: all 0.15s linear;
  &:hover {
    color: var(--primary);
  }
`;
const UserMenu: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <UserMenuWrapper active={active} style={{}}>
      <CustomLink to="/profile">Profile</CustomLink>
      <CustomLink to="/profile/orders">Orders</CustomLink>
      <LogoutLink
        onClick={() =>
          window.open(import.meta.env.VITE_BE_URL + "/logout", "_self")
        }
      >
        Logout
      </LogoutLink>
    </UserMenuWrapper>
  );
};
export default UserHeader;
