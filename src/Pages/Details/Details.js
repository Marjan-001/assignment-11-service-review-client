import { Link, useLoaderData } from "react-router-dom";


const Details = () => {

    const { title, img, description, price, facility } = useLoaderData();


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

        </div>
    );
};

export default Details;