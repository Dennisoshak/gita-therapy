import { fetchEvents } from "../services/eventServer";
import { setError } from "../store/mainSlice";
import { setAllEvents } from "../store/eventSlice";

export const setEvents = () => {
  return async (dispatch) => {
    const response = await fetchEvents();
    if (response.name === "AxiosError") {
      dispatch(setError(response.response.data.message));
    }
    if (!response.name) {
      dispatch(setAllEvents(response.data));
    }
  };
};
