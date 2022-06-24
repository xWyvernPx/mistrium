import styled from "styled-components";

interface TextFieldProps {
  width?: string;
}

export const TextField = styled.div`
  width: ${(props: TextFieldProps) => props.width || "100%"};
  margin: 1rem 0;
  border: 2px solid #ccc;
  border-radius: 5px;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:focus-within {
    border-color: var(--primary);
    box-shadow: 0px 0px 10px -4px var(--primary);
  }
  label {
    transition: all 0.2s ease-in-out;
    padding: 0 0.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: var(--gray);
    user-select: none;
    pointer-events: none;
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    color: var(--primary);
    top: 0;
    font-size: 1.5rem;
    transform: translateY(-60%);
    background-color: var(--white);
    padding: 0 0.5rem;
  }

  input,
  select {
    width: 100%;
    font-size: 2rem;
    padding: 0.75rem 1.25rem;
  }
`;
export const MultipleTextField = styled.div`
  width: ${(props: TextFieldProps) => props.width || "100%"};
  display: flex;
  gap: 2rem;
`;
