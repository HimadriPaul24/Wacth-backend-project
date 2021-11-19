import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./OrderNow.css";
import { Col, Container, Row } from "react-bootstrap";
import useAlert from "../../Hooks/useAlert";
import swal from "sweetalert";

const OrderNow = () => {
  const [item, setItem] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const { user, admin } = useAuth();

  const { confirmations } = useAlert();

  useEffect(() => {
    fetch(`https://obscure-peak-86560.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const onSubmit = (data) => {

    if (admin) {
       swal({
         title: "Sorry",
         text: "You are not allowed to order from this page",
         icon: "error",
         button: "Ok",
       });
    } else {
      fetch("https://obscure-peak-86560.herokuapp.com/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          confirmations();
        });
    }

    

    reset();
  };

  const { title, price, description, image } = item;

  return (
    <Container className="mb-5">
      <h2 className="text-primary mt-3">Please fillup the form</h2>
      <Row className="align-items-center justify-content-center">
        <Col sx={12} lg={6} className="">
          <div>
            <div>
              <img className="w-75" src={image} alt="" />
            </div>
            <div>
              <h3>{title}</h3>
              <h3>{price} Tk</h3>
              <p>{description}</p>
            </div>
          </div>
        </Col>

        <Col sx={12} lg={6}>
          <div className="mx-auto mt-5">
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
              {user.displayName && (
                <input defaultValue={user.displayName} {...register("name")} />
              )}

              {user.email && (
                <input
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
              )}
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <fieldset disabled>
                {title && <input defaultValue={title} {...register("title")} />}
              </fieldset>
              <fieldset disabled>
                {price && <input defaultValue={price} {...register("price")} />}
              </fieldset>
              <input
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              
                <input className="bg-secondary text-white" type="submit" />
              
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderNow;
