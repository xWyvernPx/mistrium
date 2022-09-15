import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons";
import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { PrimaryButton } from "../button/Button";
import { FieldError, TextField } from "./TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../../../_hook/useAuth";
import { authAPI } from "../../../_api/auth.api";
import { debounce, sortedUniq } from "lodash";
import OkFlag from "./OkFlag";
import axiosClient from "../../../_api/axiosClient";
const loginSchema = yup.object({
  email: yup
    .string()
    .required()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email invalid"),
  password: yup.string().required(),
});

const LoginForm: React.FC<{ handleSwitchForm: Function }> = ({
  handleSwitchForm,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({ mode: "onSubmit", resolver: yupResolver(loginSchema) });
  const { login } = useAuth();

  return (
    <FormWrapper
      onSubmit={handleSubmit((value) => {
        const { email, password } = value;
        if (email && password) login(email, password);
      })}
    >
      <TextField isValid={errors.email ? false : true}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              // onChange={async (e) => {

              //   field.onChange(e);
              // }}
              type="text"
              placeholder=" "
            />
          )}
        />
        <label htmlFor="">Email</label>
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </TextField>
      <TextField>
        <input {...register("password")} type="password" placeholder=" " />
        <label htmlFor="">Password</label>
      </TextField>
      <PrimaryButton>Login</PrimaryButton>
      <CustomSpan>
        You don't have an acccount.{" "}
        <CustomButton onClick={() => handleSwitchForm()}>
          Let's start
        </CustomButton>
      </CustomSpan>
      <CustomSpan>or</CustomSpan>
      <OauthButtons>
        <OauthButton
          onClick={async () => {
            // window.open(import.meta.env.VITE_BE_URL + "auth/google", "_self")
            let xhr = new XMLHttpRequest();
            xhr.open("GET", import.meta.env.VITE_BE_URL + "auth/google");
            xhr.setRequestHeader(
              "Access-Control-Allow-Origin",
              "https://mistrium.vercel.app"
            );
            xhr.setRequestHeader(
              "Access-Control-Allow-Methods",
              "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            );
            xhr.withCredentials = true;
            xhr.onreadystatechange = function () {
              // request completed?
              if (xhr.readyState !== 4) return;
              window.open(xhr.responseURL, "_self");

              if (xhr.status === 200) {
                // request successful - show response
                window.open(xhr.responseURL, "_self");
              } else {
                // request error
                console.log("HTTP error", xhr.status, xhr.statusText);
              }
            };
            xhr.send();
          }}
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
  font-size: 1.6rem;
  margin: 1rem 0;
  margin-bottom: 0.5rem;
`;

const CustomButton = styled.button`
  color: var(--primary);
`;
const OauthButton = styled.a`
  border: 2px solid var(--primary);
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
`;
const OauthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
const FormWrapper = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default LoginForm;
