import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const MyReviewRow = ({ order, handleDelete }) => {

    const { _id, serviceName, phone, email, customer, price, service, photo, message } = order;
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`https://assignment-11-service-review-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {

                                <img src={photo} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{message}</td>
            <div className='py-8'>
                <Link className='btn btn-error' to={`/update/${service}`}><button>Edit Review</button> </Link>
            </div>
        </tr>

    );
};

export default MyReviewRow;