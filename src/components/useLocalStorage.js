import  { useState,useEffect } from 'react';



const useLocalStorage = (key, initialState)=>{

    const [value, setValue] = useState(localStorage.getItem(key));
    useEffect(()=>{
        localStorage.setItem(key,value);

    },[key,value]);

    return [value,setValue];
    
} 

export default useLocalStorage;
