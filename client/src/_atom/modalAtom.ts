import { atom } from "recoil";

const modalAtom = atom({
  key: "modal",
  default: {
    isOpen: true,
    componentName: "LOGIN",
  },
});
export default modalAtom;
