import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    const [allservice, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-service-review-server.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>

                <h2 className="text-5xl font-semibold py-10  text-rose-600">All Services</h2>

            </div>
            <div className='mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allservice.map(ser => <AllServiceCard key={ser._id}
                        ser={ser}></AllServiceCard>)
                }

            </div>



        </div>
    );
};

export default AllService;