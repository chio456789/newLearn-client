import React,{useContext, useEffect,useState} from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import {UserContext} from './context';
import {signout} from './apicomp';
import { getCursos } from "./apicomp";
import { Link} from 'react-router-dom';
function Nav ({history}) {

let { user,setUser }=useContext(UserContext);
const [data ,setData] = useState([]);
const [filtered ,setFilterd] = useState([]);
const [error,setError]= useState("")
const [result , setResult] = useState("");
const [chose,setChose] = useState(true)
//const anchor= doument.qryselecto('#some-id')
//anchor.scrolltoview({behavior:'smoth'})

const handleChange = (event)=>{
  setResult(event.target.value);
  setChose(true)
}

useEffect(()=>{
  if (Object.keys(result).length !== 0)
  {
    console.log("amen")
  }
},[result])

useEffect(()=>{
const fetchData = async ()=>{
  await getCursos().then(data => {
    if(data.error) {
      
      setError(data.error);
    }
    else{
      setData(data);
      setFilterd(data);
     
 
    }
  })
}
fetchData();
},[])

useEffect(()=> {
  const results = filtered.filter(res=> res.name.toLowerCase().includes(result)
  );
  setData(results)

  } ,[result])


//const anchor = document.querySelectorAll('#tit');

//console.log(anchor)

    return (


          <div className="container">    

          <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="cc">
           
              
            <Link to="/home" className="navbar-brand" id="mm"><h1 id="mm">Learning Platform</h1></Link>
         
            <button className="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarTogglerDemo02" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              
            <div className="input-group">
            <input type="text" className="form-inline" id="border" placeholder="Buscar cursos" value={result} onChange={handleChange}/>
            { result && chose ?

                  <div className="dropdown-menu" id="none">
                    {data.map((res,i)=>(
                    <Link to={`/curso/${res._id}`} onClick={()=>{setChose(false)}} className="dropdown-item" key={i}>
                    {res.name}
                   
                    </Link>
                    
                    ))}
                  
                  </div>
              : 

              "" 
            }
          
                <span className="form-inline" id="none">
                <FontAwesomeIcon icon={faSearch}/>
                </span>
             
            </div>
        
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto">
                
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="drop" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/cursos/#finanzas" >Finanzas</a>
                      <a className="dropdown-item" href="/cursos/#diseño">Diseño</a>
                      <a className="dropdown-item" href="/cursos/#tecnologia">Tecnologia</a>
                    
                    </div>
                  </li>
                  </ul>
            <ul className="navbar-nav mr-auto">
              {!user ?
                  <>
               
                  <li className="nav-item">

                  <Link to="/login" className="nav-link active mx-3 px-3" id="reg1"  >Iniciar Sesion</Link>
 
                  </li>
                  
              
                  <li className="nav-item">
                  <Link to="/registro" className="nav-link active" id="reg">Registrarse</Link>
                  </li>
                  
                  </>
              : 
               <>
                
              <li className="nav-item">

              <Link to="/dashboard"  className="nav-link active mx-3 px-3" id="reg">Profile</Link>

              </li>
              <li className="nav-item">
              <button  className="nav-link active mx-3 px-3" id="reg" onClick={()=>signout(()=>{
                history.push("/home")
                setUser(false);
                })} >Sign out</button>
              </li>
              </>
      
              }
          
            
            </ul>
            </div>
        
            
          
          </nav>

          </div>   
          
    );
}
export default withRouter(Nav);