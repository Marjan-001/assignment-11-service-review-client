import React from 'react';

const AllServiceCard = ({ ser }) => {

    const { img, price, title, description } = ser;
    return (
        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
            <figure><img className='h-80 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p className='text-2xl text-rose-600 font-semibold'>Price:{price} </p>
                <p className='text-xl text-rose-900 py-0 '>Description:{description.slice(100)} </p>
                <div className="card-actions justify-end">
                    {/* <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Checkout</button>
                </Link> */}
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;