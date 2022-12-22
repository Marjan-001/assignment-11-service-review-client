import React from 'react';
import banner from '../../../assests/Images/Banner/Banner-2.jpg'
import './Banner.css'

const Banner = () => {

    return (
        <div className="hero mx-auto  bg-rose-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className=" max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-3xl  text-rose-600 lg:text-5xl font-bold">Hello there!</h1>
                    <p className="py-6 text-xl text-rose-600 lg:text-3xl font-semibold text-justify">Welcome to my website glam girl. I,m Stella. A fashion shopping / beauty loving personal stylist passionate about helping you love the way you look.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;