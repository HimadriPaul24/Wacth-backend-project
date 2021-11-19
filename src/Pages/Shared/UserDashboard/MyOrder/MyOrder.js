import React, { useEffect, useState } from 'react';
import useAlert from '../../../Hooks/useAlert';

import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';
import './MyOrder.css'
const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    const { confirmations } = useAlert();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://obscure-peak-86560.herokuapp.com/orders/${user.email}`)
          .then((res) => res.json())
          .then((data) => setMyOrder(data), setLoading(false));
    }, [loading, user.email]);


    const deleteConfirmation = () => {
        setLoading(true);
        confirmations();
    }



    return (
        <div className='container'>
            <h2 className='my-5 text-info'>You Order {myOrder.length } items</h2>
            <div className='row'>
                {
                    myOrder.map(order =><Order key={order._id} deleteConfirmation={deleteConfirmation} order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrder;