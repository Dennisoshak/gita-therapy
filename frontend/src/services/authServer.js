import axios from "axios";

const baseURL = "http://localhost:4000";

export const sendSignUp = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/api/user/signup`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const sendLogin = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/api/user/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
