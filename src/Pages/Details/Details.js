import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Review from "./Review/Review";
// import Review from "./Review/Review";


const Details = () => {

    const { _id, title, img, description, price, facility } = useLoaderData();
    useTitle('service details')

    return (
        <div>
            <div className='text-center mb-4'>

                <h2 className="text-5xl text-center font-semibold py-10  text-rose-600">Detail Of My Service</h2>

            </div>
            <div className="hero min-h-screen mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl  text-rose-600 font-bold"> {title}</h1>
                        <p className="py-6  text-rose-900">{description}</p>
                        <h4 className="text-3xl  text-rose-600 font-bold"> Facilities</h4>
                        <p className="py-6  text-rose-600">{facility[0].name}</p>
                        <p className="py-2 text-rose-900">{facility[0].details}</p>
                        <p className="py-6  text-rose-600">{facility[1]?.name}</p>
                        <p className="py-2 text-rose-900">{facility[1]?.details}</p>

                        <p className="text-rose-600 py-4 text-2xl">Price:{price}</p>

                        <Link to='/'><button className="btn btn-error">Back to Home</button></Link>
                    </div>
                </div>
            </div>
            <Review id={_id}></Review>
            <div className=' py-10  flex flex-col items-center'>
                <Link to={`/postreview/${_id}`}> <button className='btn btn-error '>Write Review</button></Link>
            </div>

        </div>
    );
};

export default Details;