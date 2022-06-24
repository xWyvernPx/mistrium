import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

const useAddress = () => {
  const baseUrl = "https://online-gateway.ghn.vn/shiip/public-api/master-data";
  const token = "2702a8e1-f233-11ec-ad26-3a4226f77ff0";
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const getProvinces = useCallback(async () => {
    const url = baseUrl + "/province";
    const res = await axios.get(url, {
      headers: {
        Token: token,
      },
    });
    console.log(res.data.data);
    return res.data.data;
  }, []);
  const getDistricts = useCallback(async (province_id: number) => {
    const url = baseUrl + "/district?province_id=" + province_id;
    const res = await axios.get(url, {
      headers: {
        Token: token,
      },
    });
    console.log(res.data.data);
    return res.data.data;
  }, []);
  const getWards = useCallback(async (district_id: number) => {
    const url = baseUrl + "/ward?district_id=" + district_id;
    const res = await axios.get(url, {
      headers: {
        Token: token,
      },
    });
    console.log(res.data.data);
    return res.data.data;
  }, []);
  return {
    getDistricts,
    getWards,
    getProvinces,
  };
};

export default useAddress;
