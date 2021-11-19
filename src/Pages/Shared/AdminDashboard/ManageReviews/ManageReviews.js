import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import './ManageReviews.css'
import ShowReviews from './ShowReviews';
const ManageReviews = () => {
    const [showReviews, setShowReviews] = useState([]);

    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        fetch("https://obscure-peak-86560.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => {
            setShowReviews(data);
            setLoading(false);
          });
    }, [loading]);
    


    
   const handleDeleteOrder = (id) => {
     swal({
       title: "Are you sure to Delete?",
       text: "Once deleted, you will not be able to recover!",
       icon: "warning",
       buttons: true,
       dangerMode: true,
     }).then((willDelete) => {
       if (willDelete) {
         callDeleteApi();
         swal("Delete Confirm", {
           icon: "success",
         });
       } else {
         swal("Data Safe!");
       }
     });

     const callDeleteApi = () => {
       fetch(`https://obscure-peak-86560.herokuapp.com/reviews/${id}`, {
         method: "DELETE",
         headers: {
           "Content-Type": "application/json",
         },
       })
         .then((res) => res.json())
         .then((data) => {
           if (data) {
             setLoading(true);
           }
         });
     };
   };




    return (
      <Container>
        <h2 className='my-5'>Reviews From Our Client</h2>
        <Table  className='reviews-table' responsive bordered hover size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {showReviews.map((review, index) => (
              <ShowReviews
                key={review._id}
                index={index}
                review={review}
                handleDeleteOrder={handleDeleteOrder}
              ></ShowReviews>
            ))}
          </tbody>
        </Table>
      </Container>
    );
};

export default ManageReviews;