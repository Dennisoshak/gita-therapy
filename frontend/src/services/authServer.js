import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;
const node_env = process.env.NODE_ENV;
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
    console.log(baseURL)

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
