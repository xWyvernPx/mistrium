import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../button/Button";
import { FieldError, TextField } from "./TextField";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import useAuth from "../../../_hook/useAuth";
const FormWrapper = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const registerSchema = yup.object({
  email: yup
    .string()
    .required()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email invalid"),
  password: yup.string().required().min(6),
  repassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegisterForm: React.FC<{ handleSwitchForm: Function }> = ({
  handleSwitchForm,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(registerSchema) });
  const { registerAccount } = useAuth();
  return (
    <FormWrapper
      onSubmit={handleSubmit((value) => {
        registerAccount(value.email, value.password);
      })}
    >
      <TextField isValid={errors.email ? false : true}>
        <input type="text" {...register("email")} id="" placeholder=" " />
        <label htmlFor="">Email</label>
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </TextField>
      <TextField isValid={errors.password ? false : true}>
        <input type="password" {...register("password")} placeholder=" " />
        <label htmlFor="">Password</label>
        {errors.password && <FieldError>{errors.password.message}</FieldError>}
      </TextField>
      <TextField isValid={errors.repassword ? false : true}>
        <input
          type="password"
          {...register("repassword")}
          id=""
          placeholder=" "
        />
        <label htmlFor="">Confirm Password</label>
        {errors.repassword && (
          <FieldError>{errors.repassword.message}</FieldError>
        )}
      </TextField>
      <PrimaryButton type="submit">Register</PrimaryButton>
      <CustomSpan>
        You already have an account ?{" "}
        <CustomButton onClick={() => handleSwitchForm()}>
          Let's comeback
        </CustomButton>
      </CustomSpan>
      <CustomSpan>or</CustomSpan>
      <OauthButtons>
        <OauthButton
          onClick={() =>
            window.open("http://localhost:8080/mistrium/auth/google", "_self")
          }
        >
          <IconBrandGoogle />
        </OauthButton>

        <OauthButton>
          <IconBrandFacebook />
        </OauthButton>
      </OauthButtons>
    </FormWrapper>
  );
};
const CustomSpan = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  margin-top: 0.75rem;
`;

const CustomButton = styled.button`
  color: var(--primary);
`;
const OauthButton = styled.button`
  border: 2px solid var(--primary);
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 0.75rem;
`;
const OauthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
export default RegisterForm;
