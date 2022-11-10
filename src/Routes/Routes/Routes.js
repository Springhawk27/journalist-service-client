import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Services from "../../Pages/Services/Services";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services'),

            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services'),

            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)


            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },



        ],


    },
]);