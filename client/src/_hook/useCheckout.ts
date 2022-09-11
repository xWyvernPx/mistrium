import React, { useState, useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkoutAPI, OrderPostBody } from "../_api/checkout.api";
import authAtom from "../_atom/authAtom";
import checkoutAtom from "../_atom/checkoutAtom";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const useCheckout = (init: boolean = true) => {
  const [checkoutPayload, setCheckoutPayload] = useRecoilState(checkoutAtom);
  const nav = useNavigate();
  useEffect(() => {
    // if (init && user.user) {
    //   console.log("render here");
    //   const accountDetail = user.user;
    //   setCheckoutPayload({
    //     ...checkoutPayload,
    //     name: accountDetail.name ? accountDetail.name : null,
    //     phone: accountDetail.phone ? accountDetail.phone : null,
    //     province_id: accountDetail.province ? accountDetail.province : null,
    //     district_id: accountDetail.district ? accountDetail.district : null,
    //     ward_id: accountDetail.ward_id ? accountDetail.ward_id : null,
    //   });
    // }
  }, []);
  useEffect(() => {
    console.log("state change", checkoutPayload);
  }, [checkoutPayload]);
  const setProvinceId = useCallback(
    (province_id: number) => {
      setCheckoutPayload({ ...checkoutPayload, province_id: province_id });
    },
    [checkoutPayload]
  );
  const setDistrictId = useCallback(
    (district_id: number) => {
      setCheckoutPayload({ ...checkoutPayload, district_id: district_id });
    },
    [checkoutPayload]
  );
  const setWardId = useCallback(
    (ward_id: number) => {
      setCheckoutPayload({ ...checkoutPayload, ward_id: ward_id });
    },
    [checkoutPayload]
  );
  const setName = useCallback(
    debounce((name: string) => {
      setCheckoutPayload({ ...checkoutPayload, name });
    }, 500),
    [checkoutPayload]
  );
  const setPhone = useCallback(
    (phone: string) => {
      setCheckoutPayload({ ...checkoutPayload, phone });
    },
    [checkoutPayload]
  );
  const setAddressDetail = useCallback(
    (address_detail: string) => {
      setCheckoutPayload({ ...checkoutPayload, details: address_detail });
    },
    [checkoutPayload]
  );
  const setDelivery = useCallback(
    (type: string, metadata: any) => {
      setCheckoutPayload({
        ...checkoutPayload,
        delivery: { type, metadata: { ...metadata, fee: metadata.fee } },
      });
    },
    [checkoutPayload]
  );
  const setMethod = useCallback(
    (type: string, metadata: Object) => {
      setCheckoutPayload({ ...checkoutPayload, method: { type, metadata } });
    },
    [checkoutPayload]
  );
  const getAvailableDelivery = useCallback(async () => {
    const district_id = checkoutPayload.district_id;
    const ward_id = checkoutPayload.ward_id;
    const services = await checkoutAPI.getDeliveryServices(district_id);
    // service: {
    //   service_id : number,
    //   service_type_id : number,
    // }
    const promises = services.map((service: any) => {
      return checkoutAPI.getDeliveryMethod(
        ward_id,
        district_id,
        service.service_type_id
      );
    });
    const methods = await Promise.all(promises);
    return methods;
  }, [checkoutPayload]);
  const createOrder = async (order: OrderPostBody) => {
    setProcess(true);
    const response = await checkoutAPI
      .createOrder(order)
      .then((response: any) => {
        setProcess(false);
        if (response.status === "SUCCESS")
          toast.success("Order has been created successfully.");
        // nav("/profile/orders",);
        window.location.replace("/profile/orders");
      });
    console.log(response);
  };
  const setProcess = useCallback(
    (state: boolean) => {
      setCheckoutPayload({ ...checkoutPayload, isProcessing: state });
    },
    [checkoutPayload]
  );

  return {
    checkoutPayload,
    setAddressDetail,
    setName,
    setPhone,
    setProvinceId,
    setDistrictId,
    setWardId,
    setMethod,
    setDelivery,
    getAvailableDelivery,
    createOrder,
  };
};

export default useCheckout;
