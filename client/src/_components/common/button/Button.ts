import styled from "styled-components";

interface ButtonProps {
  width?: String;
}

export const PrimaryButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border: none;
  padding: 2rem 3rem;
  font-size: 1.7rem;
  line-height: 2.6rem;
  /* transition: all 0.2s linear; */
  width: ${(props: ButtonProps) =>
    props.width ? props.width.toString() : "auto"};
  &:hover {
    font-weight: 500;
  }
`;

export const PrimaryOutlineButton = styled.button`
  background-color: var(--white);
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 2rem 3rem;
  font-size: 1.7rem;
  line-height: 2.6rem;
  width: ${(props: ButtonProps) =>
    props.width ? props.width.toString() : "auto"};
`;
