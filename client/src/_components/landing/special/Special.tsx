import React from "react";
import styled from "styled-components";
const SpecialSection = styled.div`
  width: 100%;
  display: flex;
  max-height: 35rem;
`;
const LeftSection = styled.div`
  flex: 1 1 50%;
  display: flex;
  padding: 2rem 7rem;
  /* justify-content: space-between; */
  /* align-items: center; */
  background-color: var(--secondary-pink);
  @media screen and (max-width: 1023.98px) {
    padding: 1.5rem 5rem;
  }
`;
const RightSection = styled.div`
  flex: 1 1 50%;
  display: flex;
  padding: 2rem 7rem;
  /* align-items: center; */
  background-color: red;
  background-color: var(--secondary-orange);
  @media screen and (max-width: 1023.98px) {
    padding: 1.5rem 5rem;
  }
  @media screen and (max-width: 767.98px) {
    padding: 1rem 3rem;
  }
`;
const ContentWrapper = styled.div`
  margin: 3rem 0;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  h3,
  button {
    text-align: left;
  }
  h3 {
    font-size: 3.4rem;
    line-height: 4.4rem;
    flex: 1 1 auto;
    @media screen and (max-width: 1023.98px) {
      font-size: 2.6rem;
      line-height: 2.6rem;
    }
    @media screen and (max-width: 1023.98px) {
      font-size: 2.2rem;
      line-height: 2.2rem;
    }
  }
  button {
    font-size: 2rem;
    line-height: 2rem;
    flex: 0 0 auto;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  max-height: 32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 34rem;
    height: 100%;
    object-fit: cover;
  }
`;
const Special = () => {
  return (
    <SpecialSection>
      <LeftSection>
        <ContentWrapper>
          <h3>Residential Furniture</h3>
          <button>Browse Collection</button>
        </ContentWrapper>
        <ImgWrapper>
          <img src="/imgs/RightImage.png" alt=""></img>
        </ImgWrapper>
      </LeftSection>
      <RightSection>
        <ContentWrapper>
          <h3>Residential Furniture</h3>
          <button>Browse Collection</button>
        </ContentWrapper>
        <ImgWrapper>
          <img src="/imgs/LeftImage.png" alt=""></img>
        </ImgWrapper>
      </RightSection>
    </SpecialSection>
  );
};

export default Special;
