import React,{useContext,useState,useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { getCursosUser } from "./apicomp";
import { Link } from 'react-router-dom';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import  Update  from "./updateData";

import {UserContext} from './context';
//import { getPorcent } from "./apicomp";
//import user from '../../../backend/models/user';



export default function Dashboard(){
       // let { level,setLevel }=useContext(UserContext);
        const [cursoinv, setCursosInv] = useState({});

        const [next, setnext] = useState([]);
        const [cat, setCat] =useState([0]);
        const [error,setError] = useState(false);
        const [view,setView] = useState(false);
        

        const token = localStorage.getItem('jwt');
        const converse = JSON.parse(token);
        const tok_user = converse.user._id;
        useEffect(()=>{
                getCursosUser(tok_user).then(data=>{
                        if (data.error) {
                          setError(data.error)     
                        }
                        else{
                                setCat(data.avance)
                        }
                })
        },[tok_user])
   
 
        const loadCursos = () =>{
          getCursosUser(tok_user).then(data => {
            if(data.error) {
              setError(data.error);
            }
            else{
              setCursosInv(data);
              setnext(data.cursos_inventory);
              //setLevel(data.avance);
              //console.log(data)
             // setCat(data.avance)
             // console.log(data.avance)
             // console.log(cat)
            }
          })
        }
        
        useEffect(()=>{
          loadCursos();
        },[])
           
       
    return(
            <>
            <div class="container" id="dash">
                    <div class="row">
                        <div class="col-2 dm-md-block sidebar" id="vasa">
                                <div class="left-sidebar" id="side">
                                        <ul class="nav flex-column sidebar-nav">
                                                <li className="nav-item" id="ss">{converse.user.name}</li>
                                               
                                                <li class="nav-item"><FontAwesomeIcon icon={faCubes} id="ss"/> <button onClick={()=>{setView(false)}} id="ss">Cursos</button></li>
                                                <li class="nav-item"><FontAwesomeIcon icon={faStreetView} id="ss"/><button onClick={()=>{setView(true)}} id="ss">Configuracion</button></li>
                                                
                                        </ul>

                                </div>

                        </div>
                    </div>

             
            </div>


            <div className="container-fluid" id="body-cursos">
                    {view ? 
                    <>
                    <Update dado={cursoinv}/>
                    
                    </>
                    
                    :
                    <>
                   <div class="row"  id="tit">
                        <div class="col-12 justify-content-md-center">
                        <div style={{ paddingLeft:"120px"}}><h1>Tus Asignaturas</h1></div>
                                <div class="row" style={{ paddingLeft:"120px"}}>
                             
                                        {
                                                next.map((curso,i)=>(<div key={i} id="tarjeta2" className="card col-lg-4 col-md-4 col-sm-6 my-3 mx-2">
                                              {curso.name}
                                             
                                              <div className="card-body">
                                                <CircularProgressbar value={cat[i].porcent} text={`${cat[i].porcent}%`} strokeWidth={10} />
                                              </div>
                                              <Link to={
                                                     {
                                                     pathname: `/topics/${curso._id}`,
                                                     state:{
                                                             levels: i
                                                     }
                                                         }
                                                      
                                                      } > <button className="btn btn-primary">Ir curso</button></Link>
                                              </div>))
                                
                                        }
                                
                        </div>
                        </div>
                </div>
                    </>
                    
                    }
                
          
            </div>
           
            </> 
       
     
    );


}
