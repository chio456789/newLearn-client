import React, { useState,useEffect } from 'react';
import { read } from './apicomp';
import CardCourse from './car-description';
import {withRouter} from 'react-router-dom';

function Curso(props){


    const [curso,setCurso]= useState({});
    const [error,setError]=useState(false)

    const loadSingleCurso = cursoId =>{
        read(cursoId).then(data=>{
            if (data.error) {
                setError(data.error);

            }
            else{
                    setCurso(data);

            }
        })
    }

    useEffect(()=>{
      
        const cursoId = props.match.params.cursoId;
    
        loadSingleCurso(cursoId);
    },[props.match.params.cursoId])

    return (
    <div className="container my-3">
        <h2>Descripcion del curso</h2>
        {
            curso && 
            <CardCourse curso={curso}/>
            
        }
        
        
    </div>
    
    )
}

 export default withRouter(Curso);   
    

