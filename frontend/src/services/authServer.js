import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL ||'http://localhost:4000';
console.log(baseURL)
export const sendSignUp = async (name, email, password) => {
  try {
    const response = await axios.post(`${baseURL}/api/user/signup`, {
      name,
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
