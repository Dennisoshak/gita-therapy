import { fetchWorkouts } from "../services/workoutServer";
import { setError } from "../store/mainSlice";
import { setAllWorkouts } from "../store/workoutSlice";

export const setWorkouts = () => {
  return async (dispatch) => {
    const response = await fetchWorkouts();
    if (response.name === "AxiosError") {
      dispatch(setError(response.response.data.message));
    }
    if (!response.name) {
      dispatch(setAllWorkouts(response.data));
    }
  };
};
