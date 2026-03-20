import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import DragonBall from "../pages/DragonBall";
import RikAndMorty from "../pages/RickAndMorty";
import NoFoundPage from "../pages/NoFoundPage";
import DetailPageDragonBall from "../pages/DetailPageDragonBall";
import { DetailPageRickAndMorty } from "../pages/DetailPageRickAndMorty";
import CommenPage from "../pages/CommentPage";
import QuizzPage from "../pages/QuizzPage";

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
                path:"dragonball/:id",
                element:<DetailPageDragonBall/>

            },
            {
                path:"rickandmorty/:id",
                element:<DetailPageRickAndMorty/>

            },
            {
                path:"comments",
                element:<CommenPage/>
            },
            {
                path:"quizz",
                element:<QuizzPage/>
            },
            {
                path:"*",
                element:<NoFoundPage/>
            }

        ]
    
        
    },
    
    

])
