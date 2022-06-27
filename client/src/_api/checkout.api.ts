import axios from "axios";
import axiosClient from "./axiosClient";

const GHN_KEY = {
  shop_id: 115290,
  district_id: 1459,
  token: "2702a8e1-f233-11ec-ad26-3a4226f77ff0",
};
export const checkoutAPI = {
  getDeliveryServices: async (district_id: number) => {
    const url =
      "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services";
    const response = await axios.get(url, {
      params: {
        shop_id: GHN_KEY.shop_id,
        from_district: GHN_KEY.district_id,
        to_district: district_id,
      },
      headers: {
        token: GHN_KEY.token,
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  },
  getDeliveryMethod: async (
    ward_id: number,
    district_id: number,
    service_type_id: number
  ) => {
    const url =
      "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee";
    const response = await axios.get(url, {
      params: {
        shop_id: GHN_KEY.shop_id,
        from_district_id: GHN_KEY.district_id,
        to_district_id: district_id,
        to_ward_code: ward_id,
        weight: 1000,
        length: 50,
        width: 50,
        height: 20,
        service_type_id,
      },
      headers: {
        token: GHN_KEY.token,
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    return response.data.data;
  },
  getPublicKey: async () => {
    const url = "/checkout/config";
    const response = await axiosClient.get(url);
    return response.data;
  },
  createPaymentIntent: async (amount: number) => {
    const url = "/payment_intents";
    const response = await axiosClient.post(url, { amount });
    return response.data;
  },
};
