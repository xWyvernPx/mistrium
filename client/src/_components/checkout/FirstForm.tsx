import React, { useCallback, useEffect, useState } from "react";
import ReactNumberFormat from "react-number-format";
import styled from "styled-components";
import useAddress from "../../_hook/useAddress";
import useCheckout from "../../_hook/useCheckout";
import {
  MultipleTextField,
  TextField,
  FieldError,
} from "../common/form/TextField";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authAtom from "../../_atom/authAtom";
import { useRecoilValue } from "recoil";

const contactSchema = yup.object({
  name: yup.string().required("This field is required"),
  phone: yup.string().required(),
  province_id: yup.number().moreThan(0),
  district_id: yup.number().moreThan(0),
  ward_id: yup.number().moreThan(0),
});

interface FormProps {
  a11y?: any;
}

const FirstForm: React.FC<FormProps> = ({
  a11y: {
    checkoutPayload,
    setProvinceId,
    setDistrictId,
    setWardId,
    setName,
    setPhone,
    setAddressDetail,
    setComplete,
  },
}) => {
  const { getDistricts, getProvinces, getWards } = useAddress();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const user = useRecoilValue(authAtom);
  console.log(user.user);
  useEffect(() => {
    getProvinces().then((provinces) => setProvinces(provinces));
  }, []);
  // useEffect(() => {
  //   getDistricts(user?.user?.account_detail?.province).then((districts: any) =>
  //     setDistricts(districts)
  //   );
  // }, [user?.user?.account_detail?.province]);
  // useEffect(() => {
  //   getWards(user?.user?.account_detail?.district).then((wards: any) =>
  //     setWards(wards)
  //   );
  // }, [user?.user?.account_detail?.district]);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  return (
    <FormLayout
      onSubmit={handleSubmit(() => {
        console.log("submit ok");
      })}
    >
      <FormHeadline>Contact Infomation</FormHeadline>
      <MultipleTextField>
        <TextField isValid={errors.name ? false : true}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                defaultValue={
                  checkoutPayload.name || user.user?.account_detail?.name || ""
                }
                {...field}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                  field.onChange(e);
                }}
                placeholder=" "
              />
            )}
          />

          <label htmlFor="">Full name</label>
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </TextField>
        <TextField>
          <ReactNumberFormat
            placeholder=" "
            format={"#### ### ###"}
            mask={"_"}
            onChange={(e: any) => {
              setPhone(e.target.value);
            }}
            defaultValue={
              checkoutPayload.phone || user.user?.account_detail?.phone || ""
            }
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
            // defaultValue={checkoutPayload.province_id}
            render={({ field }) => (
              <select
                {...field}
                // value={checkoutPayload.province_id}
                onChange={(e) => {
                  getDistricts(Number.parseInt(e.target.value)).then(
                    (districts) => setDistricts(districts)
                  );
                  setProvinceId(Number.parseInt(e.target.value));
                }}
              >
                <option value={-1}>Choose Province</option>
                {provinces?.map((province: any) => (
                  <option
                    // selected={
                    //   user?.user?.account_detail?.province ===
                    //   province?.ProvinceID
                    // }
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
          <label htmlFor=""></label>
          <Controller
            control={control}
            name="district"
            // defaultValue={checkoutPayload.district_id}
            render={({ field }) => (
              <select
                {...field}
                value={checkoutPayload.district_id}
                onChange={(e) => {
                  getWards(Number.parseInt(e.target.value)).then((districts) =>
                    setWards(districts)
                  );
                  setDistrictId(Number.parseInt(e.target.value));
                }}
              >
                <option value={-1}>Choose District</option>
                {districts?.map((district: any) => (
                  <option
                    // selected={
                    //   user?.user?.account_detail?.district ===
                    //   district?.DistrictID
                    // }
                    value={district?.DistrictID}
                  >
                    {district?.DistrictName}
                  </option>
                ))}
              </select>
            )}
          />
        </TextField>
        <TextField>
          <label htmlFor=""></label>
          <Controller
            name="ward"
            control={control}
            // defaultValue={-1}
            render={({ field }) => (
              <select
                {...field}
                onChange={(e) => {
                  setWardId(Number.parseInt(e.target.value));
                }}
              >
                <option value={-1}>Choose Ward</option>
                {wards?.map((ward: any) => (
                  <option
                    // selected={
                    //   user?.user?.account_detail?.ward == ward?.WardCode
                    // }
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
      <TextField>
        <input
          type={"text"}
          placeholder=" "
          onChange={(e) => {
            setAddressDetail(e.target.value);
          }}
        />
        <label htmlFor="">Detail Address</label>
      </TextField>
    </FormLayout>
  );
};
const FormHeadline = styled.span`
  font-size: 3.2rem;
  margin: 5rem auto;
  /* margin-top: 5rem; */
`;
const FormLayout = styled.form`
  /* flex: 0 0 100%; */
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
`;
export default FirstForm;
