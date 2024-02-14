import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  authorizedUserActions,
  unauthorizedUserActions,
} from "../store/userData";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dummy login
    if (
      data.name === "user" &&
      data.email === "user@gmail.com" &&
      data.password === "user"
    ) {
      dispatch(authorizedUserActions.setData(data));
      localStorage.setItem("UserID", data.email);
      navigate("/game");
    } else {
      dispatch(unauthorizedUserActions.setData(data));
      setData({
        name: "",
        email: "",
        password: "",
      });
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Login Form
          </h1>
          <p className="col-lg-10 fs-4">
            Please Fill the details and get SignIn...
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                type="test"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="form-control"
                id="floatingName"
                placeholder="Rohit Sharma"
                required
              />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="form-control"
                id="floatingEmail"
                placeholder="RohitS@example.com"
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                autoComplete="true"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <hr className="my-4" />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
