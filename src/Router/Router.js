import Main from "../Layout/Layout";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home/Home";
import AllService from "../Pages/Home/Services/AllService";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
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
            }
        ]
    }
])


export default router;