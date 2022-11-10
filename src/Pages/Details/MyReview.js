import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`,

            {

                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            }



        )


            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this Review');
        if (proceed) {
            fetch(`http://localhost:5000/myreview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myreviews.filter(odr => odr._id !== id);
                        setMyreviews(remaining);
                    }
                })
        }
    }

    // const handleStatusUpdate = id => {
    //     fetch(`http://localhost:5000/myreview/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //         })
    // }

    return (
        <div>
            <h2 className="text-3xl text-rose-600">Your Reviews {myreviews.length} </h2>
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
                            myreviews.map(order => <MyReviewRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            ></MyReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;