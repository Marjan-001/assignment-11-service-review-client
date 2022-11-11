import Main from "../Layout/Layout";
import AddService from "../Pages/AddService/AddService";

import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import MyReview from "../Pages/Details/MyReview";
import PostReview from "../Pages/Details/Review/PostReview";
// import Review from "../Pages/Details/Review/Review";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AllService from "../Pages/Home/Services/AllService";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./Private";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allservice',
                element: <AllService></AllService>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://assignment-11-service-review-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/postreview/:id',
                element: <PrivateRoute> <PostReview></PostReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-service-review-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',

                element: <PrivateRoute> <AddService></AddService></PrivateRoute>
            }


            // {
            //     path: '/reviews/:id',
            //     element: <Review></Review>,
            //     loader: ({ params }) => fetch(`https://assignment-11-service-review-server.vercel.app/reviews/${params.id}`)
            // }
        ]
    }
])


export default router;