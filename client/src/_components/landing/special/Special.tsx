import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const SpecialSection = styled.div`
  width: 100%;
  display: flex;
  /* max-height: 35rem; */
`;
const LeftSection = styled.div`
  flex: 1 1 50%;
  display: flex;
  padding: 2rem 7rem;
  align-items: center;
  flex-direction: column-reverse;
  /* justify-content: space-between; */
  /* align-items: center; */
  background-color: var(--secondary-pink);
  @media screen and (max-width: 1023.98px) {
    padding: 1.5rem 5rem;
  }
  @media screen and (max-width: 767.98px) {
    padding: 0.75rem 2rem;
  }
`;
const RightSection = styled.div`
  flex: 1 1 50%;
  display: flex;
  padding: 2rem 7rem;
  align-items: center;

  flex-direction: column-reverse;

  /* align-items: center; */
  background-color: red;
  background-color: var(--secondary-orange);
  @media screen and (max-width: 1023.98px) {
    padding: 1.5rem 5rem;
  }
  @media screen and (max-width: 767.98px) {
    padding: 0.75rem 2rem;
  }
`;
const ContentWrapper = styled.div`
  margin: 3rem 0;
  /* max-width: 20rem; */
  flex: 1 1 auto;
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;
  /* justify-content: space-between; */
  h3,
  button {
    text-align: center;
  }
  h3 {
    font-size: 3.4rem;
    line-height: 4.4rem;
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
  width: 50%;
  aspect-ratio: 1;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Special = () => {
  const nav = useNavigate();
  return (
    <SpecialSection>
      <LeftSection>
        <ContentWrapper>
          <h3>Residential Table</h3>
          <button onClick={() => nav("/products/table")}>
            Browse Collection
          </button>
        </ContentWrapper>
        <ImgWrapper>
          <img src="/imgs/RightImage.png" alt=""></img>
        </ImgWrapper>
      </LeftSection>
      <RightSection>
        <ContentWrapper>
          <h3>Residential Chair</h3>
          <button onClick={() => nav("/products/chair")}>
            Browse Collection
          </button>
        </ContentWrapper>
        <ImgWrapper>
          <img src="/imgs/LeftImage.png" alt=""></img>
        </ImgWrapper>
      </RightSection>
    </SpecialSection>
  );
};

export default Special;
