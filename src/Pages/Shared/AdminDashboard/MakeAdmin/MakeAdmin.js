import React, { useState } from 'react';
import './MakeAdmin.css'
import addAdmin from '../../../../img/Universal_(437).jpg'
import useAlert from '../../../Hooks/useAlert';
const MakeAdmin = () => {

    const { sameEmail, emailNotFound, congratulations } = useAlert();

    const [email, setEmail] = useState('');

    const handleOnBlur = (e) => {
        
        setEmail(e.target.value);
        e.target.value = '';
    }

    const handleOnClick = () => {
        const user = { email };
        fetch("https://obscure-peak-86560.herokuapp.com/users/admin", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount === 0 && data.matchedCount === 1) {
              sameEmail();
            } else if (data.matchedCount === 0) {
              emailNotFound();
            } else {
              congratulations();
            }
          });
    };


    return (
      <div className='mt-5'>
        <img src={addAdmin} alt="addAdmin" className="addAdmin" />
        <h2 className='mb-5'>Add New Admin?</h2>
        <input onBlur={handleOnBlur} type="text" placeholder="Enter Email" className="email" />
        <button onClick={handleOnClick} className="addAdminBtn btn btn-info text-white">Add</button>
      </div>
    );
};

export default MakeAdmin;