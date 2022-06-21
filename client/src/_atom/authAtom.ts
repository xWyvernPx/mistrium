import { atom } from "recoil";

const authAtom = atom({
  key: "auth",
  default: {
    isAuthenticated: false,
    user: null,
  },
});
export default authAtom;
