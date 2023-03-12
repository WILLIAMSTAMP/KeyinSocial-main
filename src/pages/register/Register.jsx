import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const toLogin = () => {
    let path = `/`;
    navigate(path);
  };

  return (
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton" onClick={toLogin}>
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={toLogin}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
