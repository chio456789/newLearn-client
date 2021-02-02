import React, {useState,useEffect} from 'react';
import  {Card}  from "./card";
import { getCursosUser } from "./apicomp";


export default function CursosUsuario() {

const [cursoinv, setCursosInv] = useState();
const [error,setError] = useState(false);

const loadCursos = () =>{
  getCursosUser().then(data => {
    if(data.error) {
      setError(data.error);
    }
    else{
      setCursosInv(data);
      console.log(data);
    }
  })
}

useEffect(()=>{
  loadCursos();
},[])
   
//const tarjetas = () => cursos.map(curso => (<Card curso={curso} key={curso.name} />))

    return(

        <div className="container-fluid" id="hh">

           <div className="row"  id="tit">
             <div className="col-12 justify-content-md-center">
              <div className="row"><h1>Cursos Express</h1></div>
             
             <div className="row">
             {cursoinv.map((cursoinv,i)=>(<div key={i} className="col-lg-4 col-md-6 col-sm-6">
                <Card cursoinv={cursoinv}/>
             </div>))}
             </div>
             </div>
           </div>
          
        </div>
    )
}
