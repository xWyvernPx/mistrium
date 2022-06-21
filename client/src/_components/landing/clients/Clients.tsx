import React from "react";
import styled from "styled-components";

const ClientsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem var(--section-x-padding);
  position: relative;
  margin-top: 5rem;
  h3 {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
const ClientsLogoDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
  justify-content: center;
  margin-top: 2rem;
`;
const LogoWrapper = styled.div`
  flex: 0 0 12rem;
  aspect-ratio: 16/9;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Clients = () => {
  return (
    <ClientsSection>
      <h3>Some of ours trusted clients</h3>
      <ClientsLogoDisplay>
        <LogoWrapper>
          <img src="https://source.unsplash.com/random" alt="" />
        </LogoWrapper>
        <LogoWrapper>
          <img src="https://source.unsplash.com/random" alt="" />
        </LogoWrapper>
        <LogoWrapper>
          <img src="https://source.unsplash.com/random" alt="" />
        </LogoWrapper>
        <LogoWrapper>
          <img src="https://source.unsplash.com/random" alt="" />
        </LogoWrapper>
        <LogoWrapper>
          <img src="https://source.unsplash.com/random" alt="" />
        </LogoWrapper>
      </ClientsLogoDisplay>
    </ClientsSection>
  );
};

export default Clients;
