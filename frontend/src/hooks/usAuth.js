import { useEffect } from "react";
import { useAppSelector } from "./redux-hooks";
import { useDispatch } from "react-redux";

import { setUser } from "../store/authSlice";

export const useAuth = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(userData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
};
