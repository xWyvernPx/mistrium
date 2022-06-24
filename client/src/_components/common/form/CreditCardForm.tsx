import React from "react";
import styled from "styled-components";
import { MultipleTextField, TextField } from "./TextField";
import ReactNumberFormat from "react-number-format";
const FormLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const CreditCardForm = () => {
  return (
    <FormLayout>
      <TextField>
        <ReactNumberFormat format={"#### #### #### ####"} mask={"_"} />
        <label htmlFor="">Card Number</label>
      </TextField>
      <MultipleTextField>
        <TextField>
          <ReactNumberFormat format={"##"} mask={"_"} />
          <label htmlFor="">Exp Month</label>
        </TextField>
        <TextField>
          <ReactNumberFormat format={"##"} mask={"_"} />
          <label htmlFor="">Exp Year</label>
        </TextField>
        <TextField>
          <ReactNumberFormat type={"password"} format={"###"} mask={"_"} />
          <label htmlFor="">CVC</label>
        </TextField>
      </MultipleTextField>
    </FormLayout>
  );
};

export default CreditCardForm;
