import { atom } from "recoil";

const checkoutAtom = atom({
  key: "checkoutAtom",
  default: {
    name: "",
    phone: "",
    province_id: -1,
    district_id: -1,
    ward_id: -1,
    details: null,
    delivery: {
      type: "",
      metadata: {},
    },
    method: {
      type: "",
      metadata: {},
    },
  },
});
export default checkoutAtom;
