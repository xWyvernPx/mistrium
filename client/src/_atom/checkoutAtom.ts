import { atom, selector } from "recoil";
import cartAtom from "./cartAtom";

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
      metadata: {
        fee: 0,
      },
    },
    method: {
      type: "",
      metadata: {},
    },
    isProcessing: false,
  },
});
export default checkoutAtom;

export const cartTotalPriceState = selector({
  key: "cartTotalPriceState",
  get: ({ get }) => {
    const cart = get(cartAtom);
    const order = get(checkoutAtom) as any;

    const cartTotal = cart.cartItems?.reduce(
      (acc, curr) => acc + curr?.product?.price * curr?.quantity,
      0
    );

    const total = cartTotal + (order?.delivery?.metadata?.fee || 0);
    return total;
  },
});
