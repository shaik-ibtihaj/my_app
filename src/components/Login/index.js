import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken) {
      navigate("/");
    }
  }, [navigate]);

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSuccess = (jwtToken) => {
    setIsLoading(false);
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/");
  };

  const onSubmitFailure = (errorMsg) => {
    setIsLoading(false);
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const userDetails = { username, password };
    const url = "https://registerloginbackend.onrender.com/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        onSubmitSuccess(data.jwt_token);
      } else {
        onSubmitFailure(data.error_msg);
      }
    } catch (error) {
      onSubmitFailure("Something went wrong. Please try again.");
    }
  };

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
        required
      />
    </>
  );

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
        required
      />
    </>
  );

  return (
    <div className="login-form-container">
      <div className="nav-logo">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="logo-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></svg>
        <h1 className="blog-title">HealthPlus</h1>
      </div>
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        {showSubmitError && (
          <>
            <p className="error-message">*{errorMsg}</p>
            <p className="error-message">Register to login</p>
            <button
              type="button"
              className="register-button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
