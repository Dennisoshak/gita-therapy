import axios from "axios";

const baseURL = process.env.REACT_BASE_URL;

export const fetchEvents = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.get(`${baseURL}/api/events`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.delete(`${baseURL}/api/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const postEvent = async (event, token) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.post(`${baseURL}/api/events`, event, {
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
