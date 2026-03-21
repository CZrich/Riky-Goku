import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedData, setStoredData] = useState<T>(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
     
    const setValue = (value: T | ((val: T) => T)) => {
        // Permitimos que 'value' sea una función para tener el estado más fresco ("prev")
        const valueToStore = value instanceof Function ? value(storedData) : value;
        
        setStoredData(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
    };
    
    return { storedData, setValue };
}
