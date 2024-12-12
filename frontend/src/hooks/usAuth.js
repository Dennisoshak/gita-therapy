import { useEffect } from "react";
import { useAppSelector } from "./redux-hooks";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { isTokenExpired } from "../services/authServer";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const getUserData = () => {
    const userFromStorage = localStorage.getItem("user");
    if (!userFromStorage || userFromStorage === "undefined") return "";

    return JSON.parse(userFromStorage);
  };
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserData();

    const isExpired = isTokenExpired(userData?.token);
    if (isExpired) {
      navigate("/login");
      return;
    }
    dispatch(setUser(userData));
  }, []);

  return user;
};
