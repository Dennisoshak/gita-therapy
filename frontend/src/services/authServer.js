import axios from "axios";



const baseURL = process.env.NODE_ENV === 'development'? process.env.REACT_APP_BASEURL : ''

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

export const isTokenExpired = (token) => {
  try {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = tokenPayload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();
    return currentTime > expirationTime;
  } catch (error) {
    return true;
  }
};


