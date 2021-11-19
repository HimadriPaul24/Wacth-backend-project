import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAlert from "../../Hooks/useAlert";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const { enterEmailPassword } = useAlert();

  const { isLoading, loginUser, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const onSubmit = (data) => {
    if (data.email === "" || data.password === "") {
      enterEmailPassword();
    } else {
      loginUser(data.email, data.password, location, history);
      reset();
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="border border-1 mx-auto mt-5 mb-5 login-form">
      <h2 className="mt-4 text-primary"> Please Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column  p-5 mx-auto"
      >
        <label className="label-title text-primary">Email Address</label>
        <input
          className="mb-4 input-items"
          type="email"
          {...register("email")}
        />
        <label className="label-title text-primary">Password</label>
        <input
          className="mb-4 input-items"
          type="password"
          {...register("password")}
        />
        <input className="submit-btn" type="submit" />
      </form>

      <div class="google-btn">
        <div class="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
        </div>
        <p class="btn-text">
          <b onClick={handleGoogleSignIn}>Sign in with google</b>
        </p>
      </div>

      {isLoading && (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="mb-5">
        <h3>Don't Have An Account</h3>
        <Link to="./register">
          <Button className="w-75 mt-4 p-2" variant="secondary">
            CREATE AN ACCOUNT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
