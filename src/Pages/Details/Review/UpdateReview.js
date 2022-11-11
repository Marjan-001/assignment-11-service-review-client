import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const reviewOld = useLoaderData();
    const [updateReview, setUpdateReview] = useState({});
    const handleUpdateReview = event => {
        event.preventDefault();
        fetch(`https://assignment-11-service-review-server.vercel.app/myreviews/${reviewOld._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success('Review Updated')

                }
                console.log(data)
            })

    }

    const handleInputOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...reviewOld };
        newReview[field] = value;
        setUpdateReview(newReview);


    }

    return (
        <div>
            <form onSubmit={handleUpdateReview}>
                <h2 className="text-2xl text-rose-500">Write your review for: {reviewOld.serviceName}</h2>
                <h4 className="text-xl text-rose-500">Price: {reviewOld.price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input onChange={handleInputOnChange} name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" defaultValue={reviewOld.customer} />
                    <input onChange={handleInputOnChange} name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" defaultValue={reviewOld.customer} />
                    <input onChange={handleInputOnChange} name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" defaultValue={reviewOld.phone} required />
                    <input onChange={handleInputOnChange} name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <input onChange={handleInputOnChange} name="PhotoURL" type="text" placeholder="Your image Url" className="input input-ghost w-full  input-bordered" defaultValue={reviewOld.photo} />
                </div>
                <textarea onChange={handleInputOnChange} name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" defaultValue={reviewOld.message} required></textarea>

                <input className='btn btn-error' type="submit" value="Update" />
            </form>
            <ToastContainer />
        </div>
    );

};

export default UpdateReview;