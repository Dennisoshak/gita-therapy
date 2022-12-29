import axios from "axios";

const baseURL = "http://localhost:4000";

export const fetchWorkouts = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.get(`${baseURL}/api/workouts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const deleteWorkout = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.delete(`${baseURL}/api/workouts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const postWorkout = async (workout, token) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.post(`${baseURL}/api/workouts`, workout, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
