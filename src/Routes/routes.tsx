import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import { Goku } from "../pages/Goku";
import { Riky } from "../pages/Riky";
import { NoFoundPage } from "../pages/NoFoundPage";

export const routes = createBrowserRouter([

    {
       
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />

            },
            {
                path: "goku",
                element: <Goku />
            },
            {
                path: "riky",
                element: <Riky />
            },
            {
                path:"*",
                element:<NoFoundPage/>
            }

        ]
    
        
    },
    
    

])
