import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import ShowOrder from "../ShowOrder/ShowOrder";
import "./ManageAllOrder.css";
import swal from "sweetalert";
import useAlert from "../../../Hooks/useAlert";


const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    
     const { updateStatus} = useAlert();
     const [loading, setLoading] = useState(false);

  
  
  useEffect(() => {
    fetch("https://obscure-peak-86560.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data), setLoading(false));
  }, [loading]);
    
    
    const handleOrderStatus = (id, status) => {
       

        
             fetch(`https://obscure-peak-86560.herokuapp.com/orders/status`, {
               method: "PUT",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({ id: id, status: status }),
             })
               .then((res) => res.json())
               .then((data) => {
                 setLoading(true);
                 updateStatus();
               });
    }

    
  


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
           fetch(`https://obscure-peak-86560.herokuapp.com/orders/${id}`, {
             method: "DELETE",
             headers: {
               "Content-Type": "application/json",
             },
           })
             .then((res) => res.json())
             .then((data) => {
               if (data) {
                 deleteConfirmation();
               }
             });
         };
    }

      const deleteConfirmation = () => {
        setLoading(true);
      };
    
  return (
    <Container>
      <Table className="reviews-table" bordered hover size="sm">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th className="diplay-none-mb">Email</th>
            <th className="diplay-none-mb">Phone</th>
            <th>Product</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <ShowOrder
              key={order._id}
              order={order}
              index={index}
              handleDeleteOrder={handleDeleteOrder}
              handleOrderStatus={handleOrderStatus}
            ></ShowOrder>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageAllOrder;
