import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedData, setStoredData] = useState<T>(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
     
    const setValue = (value: T | ((val: T) => T)) => {
       
        const valueToStore = value instanceof Function ? value(storedData) : value;
        
        setStoredData(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
    };
    
    return { storedData, setValue };
}
