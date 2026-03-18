import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import DragonBall from "../pages/DragonBall";
import RikAndMorty from "../pages/RickAndMorty";
import NoFoundPage from "../pages/NoFoundPage";

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
                path: "dragonball",
                element: <DragonBall/>
            },
            {
                path: "rickandmorty",
                element: <RikAndMorty/>
            },
            {
                path:"*",
                element:<NoFoundPage/>
            }

        ]
    
        
    },
    
    

])
