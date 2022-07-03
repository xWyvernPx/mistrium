import styled from "styled-components";

interface TextFieldProps {
  width?: string;
  isValid?: boolean;
}

export const AdminTextField = styled.div`
  width: ${(props: TextFieldProps) => props.width || "100%"};
  margin: 1rem 0;
  /* overflow: hidden; */
  outline: none !important;
  border: 2px solid
    var(
      ${({ isValid = true }: TextFieldProps) =>
        isValid ? "--gray-light" : "--danger"}
    );
  border-radius: 5px !important;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:focus-within {
    border-color: var(
      ${({ isValid = true }: TextFieldProps) =>
        isValid ? "--primary" : "--danger"}
    ) !important;
    box-shadow: 0px 0px 10px -4px var(--primary) !important;
  }
  label {
    transition: all 0.2s ease-in-out;
    padding: 0 0.5rem;
    position: absolute;
    left: 0.35rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.1rem;
    color: var(--gray);
    user-select: none;
    pointer-events: none;
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    color: var(
      ${({ isValid = true }: TextFieldProps) =>
        isValid ? "--primary" : "--danger"}
    );
    top: 0;
    font-size: 0.9rem;
    transform: translateY(-60%);
    background-color: var(--white);
    padding: 0 0.35rem;
  }

  input,
  select {
    width: 100%;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }
  &.field_error {
    border-color: var(--danger);
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
      color: var(--danger);
    }
  }
`;
export const FieldError = styled.span`
  padding: 0.7rem 0.8rem;
  background-color: var(--danger);
  color: var(--white);
  font-weight: 500;
  font-size: 1.8rem;
  position: absolute;
  left: 0;
  top: 0;
  /* border-radius: 7px 7px 7px 0px; */
  border-radius: 62% 38% 82% 8% / 51% 56% 46% 50%;
  transform: translateY(calc(-100% - 1rem));
`;
export const MultipleTextField = styled.div`
  width: ${(props: TextFieldProps) => props.width || "100%"};
  display: flex;
  gap: 2rem;
`;
