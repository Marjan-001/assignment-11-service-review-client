import React from 'react';
// import { Link } from 'react-router-dom';

const ServiceCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src='' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">k</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: </p>
                <div className="card-actions justify-end">
                    {/* <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;