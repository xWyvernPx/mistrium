import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginFormWrapper = styled.div`
  width: 80%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Headline = styled.h1``;
const AuthFormWrapper = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  return (
    <LoginFormWrapper>
      <Headline>MISTRIUM</Headline>
      {hasAccount ? (
        <LoginForm handleSwitchForm={() => setHasAccount(false)} />
      ) : (
        <RegisterForm handleSwitchForm={() => setHasAccount(true)} />
      )}
    </LoginFormWrapper>
  );
};
export default AuthFormWrapper;
