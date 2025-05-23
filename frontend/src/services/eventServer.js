import axios from "axios";

const baseURL = process.env.NODE_ENV === 'development'? process.env.REACT_APP_API_URL : ''

export const fetchEvents = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.get(`${baseURL}/events/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
console.log(response)
    return response;
  } catch (error) {
    console.log(error)
    return error;
  }
};
console.log(baseURL);

export const deleteEvent = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.delete(`${baseURL}/events/${id}`, {
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

    const response = await axios.post(`${baseURL}/events`, event, {
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
