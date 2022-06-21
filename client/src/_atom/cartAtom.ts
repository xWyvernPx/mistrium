import { atom } from "recoil";

const cartAtom = atom({
  key: "cart",
  default: {
    id: -1,
    cartItems: [],
    cartTotal: 0,
    isOpen: false,
  },
});
export default cartAtom;
