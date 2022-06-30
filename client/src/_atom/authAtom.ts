import { atom } from "recoil";

const authAtom = atom({
  key: "auth",
  default: {
    isAuthenticated: false,
    user: null,
    isLoaded: false,
  },
});
export default authAtom;
