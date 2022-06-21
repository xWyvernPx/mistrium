import React from "react";
import styled from "styled-components";
import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "../../common/button/Button";

const IntroSection = styled.section`
  padding: 2rem var(--section-x-padding);
  position: relative;
`;
const ContentContainer = styled.div`
  margin-top: 2rem;
  @media screen and (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const IntroHeading = styled.h1`
  line-height: normal;
  font-weight: 500;
  @media screen and (max-width: 767.98px) {
    font-size: 7rem;
    text-align: center;
  }
  @media screen and (max-width: 374.98px) {
    font-size: 5rem;
  }
`;
const IntroText = styled.p`
  margin-top: 5.5rem;
  max-width: 50rem;
  text-align: justify;
  color: var(--content-color);
`;
const ButtonsWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
`;
const Intro = () => {
  return (
    <IntroSection>
      <ContentContainer>
        <IntroHeading>
          Modern Furniture For <br />
          Modern Living Style
        </IntroHeading>
        <IntroText>
          {" "}
          In unfeeling existence objection immediate repulsive on he in.
          Imprudence comparison uncommonly me he difficulty diminution
          resolution. Likewise proposal differed scarcely dwelling as on
          raillery. <br /> September few dependent extremity own continued and
          ten prevailed attending. Early to weeks we could. Do commanded an
          shameless we disposing do. Indulgence ten remarkably nor are
          impression out. Power is lived means oh every in we quiet.
        </IntroText>
        <ButtonsWrapper>
          <PrimaryButton>Request a Quote</PrimaryButton>
          <PrimaryOutlineButton>Watch Video</PrimaryOutlineButton>
        </ButtonsWrapper>
      </ContentContainer>
      {/* TODO : 3D later here */}
      <Backdrop>
        <img src="/imgs/intro.png" alt="" />
      </Backdrop>
    </IntroSection>
  );
};
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  img {
  }
`;
export default Intro;
