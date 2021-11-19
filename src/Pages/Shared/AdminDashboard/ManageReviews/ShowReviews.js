import React from 'react';

const ShowReviews = (props) => {
    const {_id, message, rating, user} = props.review;
    return (
      <tr>
        <td>{props.index + 1}</td>
        <td>{user}</td>
        <td>{message}</td>
        <td>{rating}</td>
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

export default ShowReviews;