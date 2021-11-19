import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAlert from "../Hooks/useAlert";
const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, registerUser } = useAuth();
  const { passwordDidntMatch, emptyFields } = useAlert();
  const history = useHistory();

  const onSubmit = (data) => {
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirmPassword === ""
    ) {
      emptyFields();
    } else if (data.password === data.confirmPassword) {
      const { name, email, password } = data;
      registerUser(email, password, name, history);
      reset();
    } else {
      passwordDidntMatch();
    }
  };

  return (
    <div className="border border-1 mx-auto mt-5 mb-5 login-form">
      <h2 className="mt-4 text-primary">Create Your Account</h2>
      {!isLoading && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column w-1 p-5 mx-auto"
        >
          <label className="label-title text-primary">Enter Your Name</label>
          <input
            className="mb-4 input-items"
            {...register("name", { required: true, maxLength: 20 })}
          />
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
          <label className="label-title text-primary">Confirm Password</label>
          <input
            type="password"
            className="mb-4 input-items"
            {...register("confirmPassword")}
          />
          <input className="submit-btn" type="submit" />
        </form>
      )}
      {isLoading && (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="mb-5">
        <h3>Already Have An Account</h3>
        <Link to="./login">
          <Button className="w-75 mt-4 p-2" variant="secondary">
            SIGN IN
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
