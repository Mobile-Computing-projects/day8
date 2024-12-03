import { Studentdata } from "../data/data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [Credential, setCredentails] = useState({
    username: "",
    password: "",
    error: "",
  });

  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlelogin = (e) => {
    e.preventDefault();

    // Check if user exists in Studentdata
    const user = Studentdata.find(
      (user) =>
        user.name === Credential.username &&
        user.password === Credential.password
    );

    if (user) {
      console.log("Login Successful");
      setCredentails({ username: "", password: "", error: "" });
      navigate("/dashboard");
    } else {
      setCredentails((prev) => ({
        ...prev,
        error: "Please check your username and password!",
      }));
    }
  };

  return (
    <>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>{Credential.error}</p>
          <h3>Name:</h3>
          <input type="text" name="username" onChange={handlechange} />
          <h3>Password:</h3>
          <input type="password" name="password" onChange={handlechange} />
          <br></br>
          <button onClick={handlelogin}>Login</button>
        </div>
      </div>
    </>
  );
}
