import { sendSignUp, sendLogin } from "../services/authServer";
import { logout, setUser } from "../store/authSlice";
import { setError, setIsLoading } from "../store/mainSlice";
import { setAllWorkouts } from "../store/workoutSlice";

export const getSignUp = (name ,email, password) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await sendSignUp(name,email, password);
    console.log(response);
    if (response.name === "AxiosError") {
      dispatch(setIsLoading(false));
      dispatch(setError(response.response.data.message));
    } else {
      console.log(response.data)
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setUser(response.data));
      dispatch(setIsLoading(false));
      dispatch(setError(""));
    }
  };
};

export const getLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await sendLogin(email, password);
    if (response.name === "AxiosError") {
      dispatch(setIsLoading(false));
      console.log(response);
      dispatch(setError(response.response.data.message));
      return response;
    } else {
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setUser(response.data));
      dispatch(setIsLoading(false));
      dispatch(setError(""));
    }
  };
};

export const getLogout = () => {
  return async (dispatch) => {
    localStorage.removeItem("user");
    dispatch(logout());
    dispatch(setAllWorkouts(null));
  };
};
