
import swal from "sweetalert";

const useSweetAlert = () => {
  const createAccount = () => {
    swal({
      title: "Account created!",
      text: "You can  go now anywhere",
      icon: "success",
      button: "OK",
    });
  };

  const passwordDidntMatch = () => {
    swal({
      title: "Password didn't match",
      text: "Please try again",
      icon: "error",
      button: "OK",
    });
  };

  const sucessfullyLogin = () => {
    swal({
      title: "Successfully Login",
      text: "You have successfully logged in",
      icon: "success",
      button: "Ok",
    });
  };

  const sucessfullyLogout = () => {
    swal({
      title: "Logout",
      text: "You have successfully logged out",
      icon: "success",
      button: "Ok",
    });
  };

  const loginError = () => {
    swal({
      title: "Login Error",
      text: "You have entered an invalid username or password",
      icon: "error",
      button: "Ok",
    });
  };

  const confirmations = () => {
    swal({
      title: "Confirmed",
      text: "Submitted Order Successfully!",
      icon: "success",
      button: "Okay",
    });
  };

  const reviewSent = () => {
    swal({
      title: "Sent",
      text: "Your review Sent! Thank you",
      icon: "success",
      button: "Okay",
    });
  };

  const enterEmailPassword = () => {
    swal({
      title: "Enter Email and Password",
      text: "Email or Password Can't be Empty",
      icon: "warning",
      button: "OK",
    });
  };

  const emptyFields = () => {
    swal({
      title: "Empty Fields",
      text: "Please fill all the fields",
      icon: "warning",
      button: "OK",
    });
  };


  const sameEmail = () => {
    swal({
      title: "Same User",
      text: "Email already exists to Admin",
      icon: "warning",
      button: "OK",
    });
  };

  const emailNotFound = () => {
    swal({
      title: "User Not Found",
      text: "With this Email User not found! Try With Another",
      icon: "error",
      button: "OK",
    });
  };

  const congratulations = () => {
    swal({
      title: "Congratulations",
      text: "Admin successfully registered",
      icon: "success",
      button: "OK",
    });
  };

  const updateStatus = () => {
    swal({
      title: "Status Changed",
      icon: "success",
      button: "OK",
    });
  };

  return {
    createAccount,
    sucessfullyLogin,
    loginError,
    sucessfullyLogout,
    confirmations,
    passwordDidntMatch,
    enterEmailPassword,
    sameEmail,
    emailNotFound,
    congratulations,
    emptyFields,
    reviewSent,
    updateStatus,
  };
};

export default useSweetAlert;
