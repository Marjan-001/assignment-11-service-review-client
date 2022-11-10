import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const Review = ({ id }) => {

    const [reviews, setReview] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-service-review-server.vercel.app/review?serviceId=${id}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [id])

    return (
        <div>
            <h2 className="text-3xl text-rose-600">Total Reviews {reviews.length} </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(rev => <ReviewRow rev={rev}></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;