import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import useAuth from "../../../_hook/useAuth";
import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "../../common/button/Button";
import { MultipleTextField, TextField } from "../../common/form/TextField";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const ProfileDetailWrapper = styled.form`
  padding-bottom: 5rem;
`;
const HeadlineSection = styled.section`
  padding: 2rem var(--section-x-padding);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const PersonalInfomation = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
  height: 17rem;
  span {
    font-size: 4.2rem;
  }
`;
const AvatarWrapper = styled.div`
  height: 110%;
  aspect-ratio: 1;
  border: 5px solid var(--white);
  border-radius: 50%;
  transform: translateY(-20%);
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const FormControlButtons = styled.div`
  display: flex;
  gap: 2rem;
  height: 6rem;
  align-self: center;
`;
const CustomButton = styled(PrimaryButton)`
  padding: 0.5rem 2rem;
`;
const CustomOutlineButton = styled(PrimaryOutlineButton)`
  padding: 0.5rem 2rem;
`;
const MainSection = styled.div`
  padding: 0rem var(--section-x-padding);
  width: 70%;
  /* align-self: center; */
  /* background: red; */
  margin: 0 auto;
`;
const Devider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--gray-light);
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
interface IUser {
  email: string;
  account_detail: {
    name: string;
    phone: string;
    gender: boolean;
    province: number;
    ward: number;
    district: number;
  };
}
const ProfileSchema = yup.object({});
const ProfileDetail = () => {
  const { user } = useAuth();
  const {
    register,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(ProfileSchema) });
  const [isChange, setIsChange] = useState<boolean>(false);
  return (
    <ProfileDetailWrapper>
      <HeadlineSection>
        <PersonalInfomation>
          <AvatarWrapper>
            <img src="https://source.unsplash.com/random" alt="" />
          </AvatarWrapper>
          <span>Anita Cruz</span>
        </PersonalInfomation>
        <FormControlButtons>
          <CustomOutlineButton>Cancel</CustomOutlineButton>
          <CustomButton>Save</CustomButton>
        </FormControlButtons>
      </HeadlineSection>
      <MainSection>
        <MultipleTextField>
          <TextField>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  defaultValue={user?.account_detail?.name}
                  placeholder=" "
                  {...field}
                />
              )}
            />
            <label htmlFor="">Name</label>
          </TextField>
          <TextField>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  defaultValue={user?.account_detail?.phone}
                  type="text"
                  placeholder=" "
                  {...field}
                />
              )}
            />

            <label htmlFor="">Phone</label>
          </TextField>
        </MultipleTextField>
        <TextField>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder=" "
                {...field}
                defaultValue={user?.email}
              />
            )}
          />
          <label htmlFor="">Email</label>
        </TextField>
        <span>Address</span>
        <MultipleTextField>
          <TextField>
            <Controller
              name="province"
              control={control}
              render={({ field }) => <select placeholder=" " {...field} />}
            />
            <label htmlFor="">Province</label>
          </TextField>
          <TextField>
            <Controller
              name="district"
              control={control}
              render={({ field }) => <select placeholder=" " {...field} />}
            />
            <label htmlFor="">District</label>
          </TextField>
          <TextField>
            <Controller
              name="ward"
              control={control}
              render={({ field }) => <select placeholder=" " {...field} />}
            />
            <label htmlFor="">Ward</label>
          </TextField>
        </MultipleTextField>
      </MainSection>
    </ProfileDetailWrapper>
  );
};

export default ProfileDetail;
