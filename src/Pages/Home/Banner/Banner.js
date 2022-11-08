import React from 'react';
import banner from '../../../assests/Images/Banner/Banner-2.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative w-full mx-auto bannerimg'>
            <img className=' w-screen' src={banner} alt="" />
            <div className='absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4'>

                <h2 className='text-xl text-black md:text-7xl mb-8 font-semibold '>Hey beautiful</h2>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-64">

                    <p className=' text-black text-2xl mt-12  text-left '>

                        I,m Stella. A fashion/shopping/beauty loving personal stylist passionate about helping you love the way you look. Welcome to my website glam girl.

                    </p>
                </div>

            </div>

        </div>
    );
};

export default Banner;