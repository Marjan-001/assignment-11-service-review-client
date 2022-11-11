import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const PostReview = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('Glam Girl/Write Review');

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const photo = form.PhotoURL.value

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
            photo

        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('https://assignment-11-service-review-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Posted')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-2xl text-rose-500">Write your review for: {title}</h2>
                <h4 className="text-xl text-rose-500">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="PhotoURL" type="text" placeholder="Your image Url" className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn btn-error' type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default PostReview;