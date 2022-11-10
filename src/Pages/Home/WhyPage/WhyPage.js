import React from 'react';
import image1 from '../../../assests/Images/WhyNeed.jpg'

const WhyPage = () => {
    return (
        <div className="hero min-h-screen bg-rose-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Why you need a personal Stylist</h1>
                    <p className="py-6">
                        A personal stylist will help you find things you love and that fit, no matter what your size and shape! You'll create a signature style that works for you learning more about your style personality and creating a Style Recipe is the key to great style for now and in the future.</p>

                </div>
            </div>
        </div>
    );
};

export default WhyPage;