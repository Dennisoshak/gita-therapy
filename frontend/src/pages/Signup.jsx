import React, { useEffect, useState } from "react";
import { getSignUp } from "../actions/authActions";
import { useAppSelector, useAppDispatch } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setError } from "../store/mainSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useAppSelector((state) => state.main.error);
  const user = useAppSelector((state) => state.user);

  console.log(error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getSignUp(email, password));
  };
  useEffect(() => {
    dispatch(setError(""));

    user && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, user]);

  return (
    <form className="signup" onSubmit={(e) => handleSubmit(e)}>
      <h3>Sign up</h3>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
