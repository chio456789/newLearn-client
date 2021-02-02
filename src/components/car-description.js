import React, { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import {Showimage} from './ShowImage';
import { addAssig, addPoints,getCursosUser} from "./apicomp";
import {withRouter} from 'react-router-dom';
import {UserContext} from './context';
import swal from 'sweetalert';

  const CardCourse = (props) => {
    let { user,setUser }=useContext(UserContext);

    const [usuario, setUsuario] = useState(()=>{
      const aux3 = JSON.parse(localStorage.getItem('jwt'));
      if (!aux3) {
        return "";
      }
      const userid = aux3.user._id;
      const initialState = userid;
      return initialState;
    });
 

    useEffect(()=>{
      const course = props.match.params.cursoId; 
      setAddCurso({cursos_inventory:course});
    },[props.match.params.cursoId])
    /*cargar cursos de usuario*/ 
    useEffect(()=>{
      const loadCourseUs = ()=>{

        if (user !== false) {
          getCursosUser(usuario).then((data)=>{
            if (data.error) {
              console.log(data.error)
            }
            else{
              setCompare(data.cursos_inventory);
           
            }
          })
        }
      }
    
      loadCourseUs();
    
     
  
    },[])

    useEffect(()=>{

      const comparison = ()=>{
        const del = compare.filter(inv=> inv._id === addcurso.cursos_inventory)
     console.log(del.length>0)
        if (!del) {
          setExist(true)
        }
        
 
       // const diseño = curso.filter(cursos=> cursos.category.name === "Diseño" )
  
        }

      comparison();
    })
  
  

 
  const [curse,setTCurse]= useState(true); 
  const [teach,setTeach]= useState(false);
  const [plan,setPlan]= useState(false);
  const [compare, setCompare] = useState([]);
  const [exist,setExist] = useState(false);
  const [addcurso, setAddCurso] = useState({cursos_inventory:" " })
  const [addper, setAddper] = useState({
    idcurso:"",
    porcent:"0"})

 useEffect(()=>{
  const ss =addcurso.cursos_inventory;
  setAddper({...addper,idcurso:ss})
 },[addcurso.cursos_inventory])

  const addAssignature = (event)=>{
    
  event.preventDefault();
 if (user != false) {
 // const course = props.match.params.cursoId; 
 //setAddCurso({cursos_inventory:course});
 //console.log(addcurso);
 // const ss =addcurso.cursos_inventory;

 if (exist) {
  swal("!Ya estas inscrito en este curso¡")
 }
 else{
  addAssig(usuario,addcurso);
  //setAddper({...addper,idcurso:ss})
  addPoints(usuario,addper);
  swal("Te has inscrito a una materia")
 }

 }
 if(user === null || user === false){
swal("!No has iniciado sesion¡")
 }
 
  }
   return (
    
            <div className="container m-10 my-5" id="tarjeta1">
                  <h2 className="card-title">{props.curso.name}</h2>
                          <ul className="nav nav-tabs">
                            <li className="nav-item">
                              <button className="nav-link" onClick={()=>{
                                setPlan(false)
                                setTeach(false)
                                setTCurse(true)
                              }
                              }>Acerca del Curso</button>
                            </li>
                            <li className="nav-item">
                              <button className="nav-link" onClick={()=>{
                                setTeach(true)
                                setTCurse(false)
                                setPlan(false)
                                
                              }}>Instructores</button>
                            </li>
                            <li className="nav-item">
                              <button className="nav-link" onClick={()=>{
                                  setPlan(true)
                                  setTeach(false)
                                  setTCurse(false)
                              }}>Programa de avance</button>
                            </li>
                          
                          </ul>
                <div className="card-body">
                  <Showimage item={props.curso} className="card-img-top" alt="..." url="cursos"/>
                { curse ? ( 
                <p className="card-text">{props.curso.description}</p>
                )
                :("")
                }
                 { teach ? (
                <p className="card-text">mmmmm</p>
                 )
                 :("")
                }
                 { plan ? (
                <p className="card-text">nnnnnnnn</p>
                 )
                 :("")
                }
                <Link to={`./curso/${props.curso._id}`}>
                  <button className="btn btn-primary" onClick={addAssignature}>Incribirse al curso</button>
                </Link>
                 </div>
            </div>
    );

    }
    export default withRouter(CardCourse);   