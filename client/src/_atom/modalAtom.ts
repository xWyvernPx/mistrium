import { atom } from "recoil";

const modalAtom = atom({
  key: "modal",
  default: {
    isOpen: false,

    componentName: "",
    payload: null,
  },
});
export default modalAtom;
