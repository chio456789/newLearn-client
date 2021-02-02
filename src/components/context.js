import React, {useState} from 'react';
import {isAuthenticated } from './apicomp';
import { getCursosUser } from "./apicomp";
let UserContext= React.createContext();
let {Provider,Consumer}= UserContext;


function UserProvider({children}){


  
  let [user,setUser]=useState(isAuthenticated);
  let [level,setLevel]= useState({})
  let [disbleds,setDisableds] = useState(false);
  

 return (
<Provider value={{user,setUser,level,setLevel,disbleds,setDisableds}}>
  {children}
</Provider>

 )
}

export {UserProvider,Consumer as UserConsumer, UserContext};