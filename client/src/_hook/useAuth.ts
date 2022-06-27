import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { authAPI } from "../_api/auth.api";
import authAtom from "../_atom/authAtom";

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  useEffect(() => {
    authAPI.getMe().then((me) => {
      if (me) setAuth({ isAuthenticated: true, user: me });
      else setAuth({ isAuthenticated: false, user: null });
    });
  }, []);
  const logout = useCallback(() => {
    authAPI.logout();
  }, []);
  const login = useCallback(async (email: string, password: string) => {
    const res = await authAPI.login(email, password);
    console.log(res);
  }, []);
  const registerAccount = useCallback(
    async (email: string, password: string) => {
      const res = await authAPI.register(email, password);
      console.log(res);
    },
    []
  );
  return {
    user: auth.user,
    user_details: auth.user?.account_detail,
    logout,
    login,
    registerAccount,
  };
};

export default useAuth;
