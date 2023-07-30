import { useEffect } from "react";
import { useAppSelector } from "./redux-hooks";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { isTokenExpired } from "../services/authServer";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
 const isExpired = isTokenExpired(userData.token)
 if (isExpired) {
  navigate("/login")
  return
 }
    dispatch(setUser(userData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
};
