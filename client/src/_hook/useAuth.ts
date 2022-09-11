import React, { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { authAPI } from "../_api/auth.api";
import authAtom from "../_atom/authAtom";

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  useEffect(() => {
    authAPI.getMe().then((me) => {
      console.log(me);
      if (me) setAuth({ isAuthenticated: true, user: me, isLoaded: true });
      else setAuth({ isAuthenticated: false, user: null, isLoaded: true });
    });
  }, []);
  const logout = useCallback(() => {
    authAPI.logout();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res: any = await authAPI.login(email, password);
    if (res.status === "SUCCESS") {
      // toast.success("Successfully registered account");
      window.location.reload();
    } else {
      toast.error(res.message);
    }

    console.log(res);
  }, []);
  const registerAccount = useCallback(
    async (email: string, password: string) => {
      const res: any = await authAPI.register(email, password);

      if (res.status === "SUCCESS") {
        toast.success("Successfully registered account");
        window.location.reload();
      } else {
        toast.error(res.message);
      }
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
    isLoaded: auth.isLoaded,
  };
};

export default useAuth;
