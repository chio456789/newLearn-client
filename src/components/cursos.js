import React, {useState,useEffect} from 'react';
import  {Card}  from "./card";
import { getCursos } from "./apicomp";


export default function Cursos() {

const [curso, setCursos] = useState([]);
const [error,setError] = useState(false);
const [cursoDiseño, setCursosDiseño] = useState([]);
const [cursoFinanzas, setCursosFinanzas] = useState([]);
const [cursoTecnologia, setCursosTecnologia] = useState([]);

/*const [curso, setCursos] = useState([]);
const [curso, setCursos] = useState([]);*/


 const loadCursos = () =>{
 getCursos().then(data => {
    if(data.error) 
    {
      setError(data.error);
    }
    else{
      setCursos(data);
     
    }
  })
}
useEffect(()=>{
  loadCursos();
 
},[])

useEffect(()=>{
const diseño = curso.filter(cursos=> cursos.category.name === "Diseño" )
setCursosDiseño(diseño)
const finanzas = curso.filter(cursos=> cursos.category.name === "Finanzas")
setCursosFinanzas(finanzas)
const tecnologia = curso.filter(cursos=> cursos.category.name === "Tecnologia")
setCursosTecnologia(tecnologia)
},[curso])



   
//const tarjetas = () => cursos.map(curso => (<Card curso={curso} key={curso.name} />))

    return(

        <div className="container-fluid" id="hh">

           <div className="row"  id="finanzas">
             <div className="col-12 justify-content-md-center">
              <div className="row"><h3>Cursos Tecnologia</h3></div>
             
             <div className="row">
             {cursoTecnologia.map((curso,i)=>(<div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <Card curso={curso}/>
             </div>))}
             </div>
             </div>

            
           </div>
           <div className="row"  id="diseño">
             <div className="col justify-content-md-center">
              <div className="row"><h3>Cursos Finanzas</h3></div>
             
             <div className="row">
             {cursoFinanzas.map((curso,i)=>(<div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <Card curso={curso}/>
             </div>))}
             </div>
             </div>

            
           </div>
           <div className="row"  id="tecnologia">
             <div className="col justify-content-md-center">
              <div className="row"><h3>Cursos Diseño Artistico</h3></div>
             
             <div className="row">
             {cursoDiseño.map((curso,i)=>(<div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <Card curso={curso}/>
             </div>))}
             </div>
             </div>
           </div>
        </div>
    )
}
