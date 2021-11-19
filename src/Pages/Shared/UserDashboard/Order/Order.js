import React from "react";
import "./Order.css";

import swal from "sweetalert";

const Order = (props) => {
  const { _id, title, price, status } = props.order;

  const handleDeleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        callDeleteApi();
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });

    const callDeleteApi = () => {
      fetch(`https://obscure-peak-86560.herokuapp.com/orders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            props.deleteConfirmation();
          }
        });
    };
  };

  return (
    <div className="col-sm-4 col-lg-4 my-5">
      <div class="card w-75 mx-auto">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h5 class="card-title fs-6 ">{title}</h5>
              <p>{price} Tk</p>
            </div>
            <div className={status === "pending" ? "pending" : "shipped"}>
              <span className="status-item">{status}</span>
            </div>
          </div>
          <button
            onClick={() => {
              handleDeleteOrder(_id);
            }}
            type="button"
            class="btn btn-danger"
          >
            Delete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
