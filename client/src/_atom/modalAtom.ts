import { atom } from "recoil";

const modalAtom = atom({
  key: "modal",
  default: {
    isOpen: false,
    Component: null,
  },
});
export default modalAtom;
