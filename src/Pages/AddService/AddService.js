import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const AddService = () => {
    useTitle('Glam Girl/add service')
    const { user } = useContext(AuthContext);
    // const notify = () => toast("Service Added!");

    const handleAddService = event => {

        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;
        const email = user?.email || 'unregistered';


        const add = {


            title,
            img,
            description,
            price,
            email
        }
        fetch('https://assignment-11-service-review-server.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Service Added ')


                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }


    return (
        <div>
            <form onSubmit={handleAddService} >

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                </div>
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                <input name="title" type="text" placeholder="service name" className="input input-ghost w-full mb-2  input-bordered" required />
                <input name="price" type="number" placeholder="price" className="input input-ghost w-full mb-2  input-bordered" required />
                <input name="img" type="text" placeholder="Your image Url" className="input input-ghost w-full mb-2  input-bordered" required />
                <textarea name="description" className="textarea textarea-bordered h-24 mb-2 w-full" placeholder="Your Message" required></textarea>

                <input className='btn btn-error' type="submit" value="Submit Service" />
            </form>
            <ToastContainer />

        </div>
    );
};

export default AddService;