import React from "react";
import './ShowOrder.css'
const ShowOrder = (props) => {
    const {_id, name, email, phone, title, status } = props.order;
    



  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{name}</td>
      <td className="diplay-none-mb">{email}</td>
      <td className="diplay-none-mb">{phone}</td>
      <td>{title}</td>
      <td className={status === "pending" ? "pending" : "shipped"}>
        <button
          onClick={() => {
            props.handleOrderStatus(_id, status);
          }}
        >
          {status}
        </button>
      </td>
      <td class="delete-btn">
        <button
          onClick={() => {
            props.handleDeleteOrder(_id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShowOrder;
