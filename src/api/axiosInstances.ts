import axios from "axios";

 export const dbzApi= axios.create({
    baseURL:import.meta.env.VITE_API_URL_DRAGONBALL,
    timeout:3000,
    headers:{
        "Content-Type":"applicationjson"
    }
})

export const rickAndMortyApi= axios.create({

    baseURL:import.meta.env.VITE_API_URL_RICK_AND_MORTY,
    timeout:1000,
    headers:{
        "Content-Type":"application/json"
    }
})
export const commentsApi= axios.create({

    baseURL:import.meta.env.VITE_API_URL_COMMENTS,
    timeout:1000,
    headers:{
        "Content-Type":"application/json"
    }
})