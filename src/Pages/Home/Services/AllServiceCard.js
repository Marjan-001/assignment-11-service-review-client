import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const AllServiceCard = ({ ser }) => {

    const { _id, img, price, title, description } = ser;
    return (
        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='h-80 w-full' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p className='text-2xl text-rose-600 font-semibold'>Price:{price} </p>
                <p className='text-xl text-rose-900 py-0 '>Description:{description?.slice(0, 100)} </p>
                <div className="card-actions justify-end">

                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-error">View Details</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default AllServiceCard;