import Main from "../Layout/Layout";
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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/postreview/:id',
                element: <PostReview></PostReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            }

            // {
            //     path: '/reviews/:id',
            //     element: <Review></Review>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            // }
        ]
    }
])


export default router;