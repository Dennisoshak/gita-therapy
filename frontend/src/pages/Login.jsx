import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../actions/authActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setError } from "../store/mainSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useAppSelector((state) => state.error);
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getLogin(email, password));
  };

  useEffect(() => {
    dispatch(setError(""));
    user && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, user]);

  return (
    <form className="login" onSubmit={(e) => handleSubmit(e)}>
      <h3>Log in</h3>
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
      <p>
        Don't have an account?
        <span
          onClick={() => navigate("/signup")}
          style={{ marginLeft: "1rem" }}
        >
          Sign up
        </span>
      </p>
      <button>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
