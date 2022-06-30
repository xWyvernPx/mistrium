import { atom } from "recoil";

const modalAtom = atom({
  key: "modal",
  default: {
    isOpen: false,
    componentName: "",
  },
});
export default modalAtom;
