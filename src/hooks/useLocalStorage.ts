import { useState, useEffect } from "react"

export const useLocalStorage = (key: string) => {
    const [data, setData] = useState(localStorage.getItem(key))
    if (!data) {
        localStorage.setItem(key, "")
    }
    useEffect(() => {
        setData(localStorage.getItem(key))
    }, [key])

    return { data, setData }
}