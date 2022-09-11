import React, { useEffect, useState } from "react";
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
import useAddress from "../../../_hook/useAddress";
import { accountAPI } from "../../../_api/account.api";
import { values } from "lodash";
import { toast } from "react-toastify";
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
  const { getDistricts, getProvinces, getWards } = useAddress();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getProvinces().then((provinces: any) => setProvinces(provinces));
  }, []);
  useEffect(() => {
    getDistricts(user?.account_detail?.province).then((districts: any) =>
      setDistricts(districts)
    );
  }, [user?.account_detail?.province]);
  useEffect(() => {
    getWards(user?.account_detail?.district).then((wards: any) =>
      setWards(wards)
    );
  }, [user?.account_detail?.district]);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all", resolver: yupResolver(ProfileSchema) });
  const [isChange, setIsChange] = useState<boolean>(false);
  return (
    <ProfileDetailWrapper
      onSubmit={handleSubmit(async (value) => {
        const name = value?.name ? value?.name : user?.account_detail?.name;
        const phone = value?.phone ? value?.phone : user?.account_detail?.phone;
        const gender = value?.gender
          ? value.gender === "true"
          : user?.account_detail?.gender;
        const province = value?.province
          ? value?.province
          : user?.account_detail?.province;
        const district = value?.district
          ? value?.district
          : user?.account_detail?.district;
        const ward = value?.ward ? value?.ward : user?.account_detail?.ward;
        const result: any = await accountAPI.updateProfile({
          name,
          phone,
          province,
          district,
          ward,
          gender,
        });
        if (result.data) {
          toast.success(result.message);
          window.location.reload();
        } else {
          toast.error(result.message);
        }
      })}
    >
      <HeadlineSection>
        <PersonalInfomation>
          <AvatarWrapper>
            <img src="https://source.unsplash.com/random" alt="" />
          </AvatarWrapper>
          <span>{user?.account_detail?.name || "User"}</span>
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
          <TextField>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <select
                  value={user?.account_detail?.gender}
                  placeholder=" "
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                >
                  <option>Choose gender</option>
                  <option
                    selected={user?.account_detail?.gender}
                    value={"true"}
                  >
                    Male
                  </option>
                  <option
                    selected={!user?.account_detail?.gender}
                    value={"false"}
                  >
                    Female
                  </option>
                </select>
              )}
            />

            {/* <label htmlFor="">Phone</label> */}
          </TextField>
        </MultipleTextField>
        <TextField>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder=" "
                {...field}
                disabled
                defaultValue={user?.email}
              />
            )}
          />
          <label htmlFor="">Email</label>
        </TextField>
        <h3>Address</h3>
        <MultipleTextField>
          <TextField>
            <Controller
              name="province"
              control={control}
              render={({ field }) => (
                <select
                  placeholder=" "
                  {...field}
                  onChange={(e) => {
                    getDistricts(Number.parseInt(e.target.value)).then(
                      (districts) => setDistricts(districts)
                    );
                    field.onChange(e);
                  }}
                >
                  <option
                    selected={user?.account_detail?.province === -1}
                    value={-1}
                  >
                    Choose Province
                  </option>

                  {provinces?.map((province: any) => (
                    <option
                      selected={
                        user?.account_detail?.province === province?.ProvinceID
                      }
                      value={province?.ProvinceID}
                    >
                      {province?.ProvinceName}
                    </option>
                  ))}
                </select>
              )}
            />
          </TextField>
          <TextField>
            <Controller
              name="district"
              control={control}
              render={({ field }) => (
                <select
                  placeholder=" "
                  {...field}
                  onChange={(e) => {
                    getWards(Number.parseInt(e.target.value)).then(
                      (districts) => setWards(districts)
                    );
                    field.onChange(e);
                  }}
                >
                  <option value={-1}>Choose District</option>
                  {districts?.map((district: any) => (
                    <option
                      selected={
                        user?.account_detail?.district === district?.DistrictID
                      }
                      value={district?.DistrictID}
                    >
                      {district?.DistrictName}
                    </option>
                  ))}{" "}
                </select>
              )}
            />
          </TextField>
          <TextField>
            <Controller
              name="ward"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value={-1}>Choose Ward</option>

                  {wards?.map((ward: any) => (
                    <option
                      selected={user?.account_detail?.ward == ward?.WardCode}
                      value={ward?.WardCode}
                    >
                      {ward?.WardName}
                    </option>
                  ))}
                </select>
              )}
            />
          </TextField>
        </MultipleTextField>
      </MainSection>
    </ProfileDetailWrapper>
  );
};

export default ProfileDetail;
