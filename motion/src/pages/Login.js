import axios from "axios";
import { useSelector } from "react-redux";
import tshirtAPI from "../axios/tshirtAPI";

const Login = () => {
  // Prepare the request for login in and getting the token
  const myBody = JSON.stringify({
    email: "rijipak673@v2ssr.com",
    password: "password",
  });

  const myConfig = {
    method: "post",
    data: myBody,
  };

  // Fetch the data and save the token in the local storage
  const handleLogin = async () => {
    try {
      const token = (await tshirtAPI("token/", myConfig)).data.access;
      console.log(token);
      localStorage.setItem("token", token);
    } catch (exception) {
      console.log(exception);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.setItem("token", "");
  };

  return (
    <div className="containerLogin">
      <form onSubmit={(e) => e.preventDefault()}>
        <input placeholder={"email"}></input>
        <input type={"password"} placeholder={"password"}></input>
        <button onClick={() => handleLogin()}>Login</button>
        <button onClick={() => handleLogout()}>Logout</button>
      </form>
    </div>
  );
};

export default Login;
