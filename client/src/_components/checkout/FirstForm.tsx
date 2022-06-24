import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactNumberFormat from "react-number-format";
import { Component } from "react";
import { MultipleTextField, TextField } from "../common/form/TextField";
import { UseFormRegister, Control, Controller } from "react-hook-form";
import useAddress from "../../_hook/useAddress";
const FormLayout = styled.div`
  flex: 0 0 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 80%;
`;
interface FormProps {
  register: UseFormRegister<any>;
  control: Control;
}
const FirstForm: React.FC<FormProps> = ({ register, control }) => {
  const { getDistricts, getProvinces, getWards } = useAddress();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  useEffect(() => {
    getProvinces().then((provinces) => setProvinces(provinces));
  }, []);
  return (
    <FormLayout>
      <MultipleTextField>
        <TextField>
          <input type="text" placeholder=" " {...register("fullname", {})} />
          <label htmlFor="">Full name</label>
        </TextField>
        <TextField>
          <ReactNumberFormat
            placeholder=" "
            format={"#### ### ###"}
            mask={"_"}
            {...register("phone")}
          />
          <label htmlFor="">Phone</label>
        </TextField>
      </MultipleTextField>
      <MultipleTextField>
        <TextField>
          <label htmlFor=""></label>
          <Controller
            control={control}
            name="province"
            render={({ field }) => (
              <select
                {...field}
                onChange={(e) => {
                  getDistricts(Number.parseInt(e.target.value)).then(
                    (districts) => setDistricts(districts)
                  );
                }}
              >
                {provinces?.map((province: any) => (
                  <option value={province?.ProvinceID}>
                    {province?.ProvinceName}
                  </option>
                ))}
              </select>
            )}
          />
        </TextField>
        <TextField>
          <label htmlFor=""></label>
          <Controller
            control={control}
            name="province"
            render={({ field }) => (
              <select
                {...field}
                onChange={(e) => {
                  getWards(Number.parseInt(e.target.value)).then((districts) =>
                    setWards(districts)
                  );
                }}
              >
                {districts?.map((district: any) => (
                  <option value={district?.DistrictID}>
                    {district?.DistrictName}
                  </option>
                ))}
              </select>
            )}
          />
        </TextField>
        <TextField>
          <label htmlFor=""></label>
          <select>
            {wards?.map((ward: any) => (
              <option value={ward?.WardID}>{ward?.WardName}</option>
            ))}
          </select>
        </TextField>
      </MultipleTextField>
      <TextField>
        <input type={"text"} placeholder=" " />
        <label htmlFor="">Detail Address</label>
      </TextField>
    </FormLayout>
  );
};

export default FirstForm;
