import React, { useEffect, useState } from 'react';

const Review = ({ id }) => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?serviceId=${id}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [id])
    return (
        <div>
            <h2>{reviews.length}</h2>
        </div>
    );
};

export default Review;