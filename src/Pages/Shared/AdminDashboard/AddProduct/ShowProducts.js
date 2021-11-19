import React from 'react';

const ShowProducts = (props) => {
    const { _id, title, price, image } = props.product;

    return (
      <tr>
        <td>{props.index + 1}</td>
        <td>{title}</td>
        <td>{price}</td>
        <td className="diplay-none-mb">{image}</td>
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

export default ShowProducts;