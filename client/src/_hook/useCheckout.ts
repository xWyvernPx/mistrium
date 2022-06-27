import React, { useState, useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkoutAPI } from "../_api/checkout.api";
import authAtom from "../_atom/authAtom";
import checkoutAtom from "../_atom/checkoutAtom";
import { debounce } from "lodash";
const useCheckout = () => {
  const user = useRecoilValue(authAtom);
  const [checkoutPayload, setCheckoutPayload] = useRecoilState(checkoutAtom);

  useEffect(() => {
    if (user.user) {
      const accountDetail = user.user;
      setCheckoutPayload({
        ...checkoutPayload,
        name: accountDetail.name ? accountDetail.name : null,
        phone: accountDetail.phone ? accountDetail.phone : null,
        province_id: accountDetail.province ? accountDetail.province : null,
        district_id: accountDetail.district ? accountDetail.district : null,
        ward_id: accountDetail.ward_id ? accountDetail.ward_id : null,
      });
    }
  }, [user.user]);
  useEffect(() => {
    console.log(checkoutPayload);
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
    (type: string, metadata: Object) => {
      setCheckoutPayload({ ...checkoutPayload, delivery: { type, metadata } });
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
  };
};

export default useCheckout;
