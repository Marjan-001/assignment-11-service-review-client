import React from 'react';
import im1 from '../../../../assests/Images/recentwork/i1.jpg'
import im2 from '../../../../assests/Images/recentwork/i2.jpg'
import im3 from '../../../../assests/Images/recentwork/i3.jpg'
import im4 from '../../../../assests/Images/recentwork/i4.jpg'

import '../RecentWork/Recent.css'
const RecentWork = () => {
    return (
        <div className='recent'>
            <h2 className=' text-5xl mb-10 text-center text-rose-600 font-semibold'>My Recent Works</h2>
            <div className="hero  ">

                <div className="hero-content flex-col md:flex-row img-container">
                    <img src={im1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <img src={im2} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <img src={im3} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <img src={im4} className="max-w-sm rounded-lg shadow-2xl" alt='' />

                </div>
            </div>
        </div>
    );
};

export default RecentWork;