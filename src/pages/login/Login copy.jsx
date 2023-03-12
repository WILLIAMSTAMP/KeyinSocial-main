import { useState } from "react";
import "./Login.css";

export default function Login({ setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const User = {
    username: "admin@admin.com",
    password: "admin",
  };

  const onSubmit = (e) => {
    if (username != User.username) {
      alert("Invalid Username");
      return;
    }
    if (password != User.password) {
      alert("Invalid Password");
      return;
    }
    alert("Valid Login");
    setLogin(true);
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">KeyinSocial</h3>
            <span className="loginDesc">
              Connect with Students and Teachers throughout Keyin with Keyin
              Social{" "}
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                placeholder="Email"
                className="loginInput"
                type="email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="Password"
                className="loginInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="loginButton" type="submit">
                Login
              </button>
              <span className="loginForgot">Forgot Password</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
