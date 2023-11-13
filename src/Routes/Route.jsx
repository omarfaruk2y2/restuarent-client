import {
    createBrowserRouter
} from "react-router-dom";
import Root from '../Root/Root'
import Home from '../Pages/Home/Home'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Dashboard from '../Pages/Dashboard/Dashboard'
import OurShop from '../Pages/OurShop/OurShop'
import OurMenu from '../Pages/OurMenu/OurMenu'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/ourshop",
                element: <OurShop />,
            },
            {
                path: "/ourmenu",
                element: <OurMenu />,
            },
        ],
    },
]);