import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>

                <h2 className="text-5xl font-semibold py-10  text-rose-600">My Services</h2>

            </div>
            <div className='mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <div className=' py-10  flex flex-col items-center'>
                <Link to='/allservice'> <button className='btn btn-error '>See All</button></Link>
            </div>


        </div>
    );
};

export default Services;