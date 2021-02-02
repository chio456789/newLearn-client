import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

export default function Contenttwo () {
    return (

      
        <div className="container" id="gul">
            <div className="row" >
               
                <div className="col-12 col-md-6 align-self-center">
                    <div className="row">
                    <h2 id="infor">Plataforma Educativa <br/> A un solo click</h2>
                    </div>
                    <div className="row justify-content-center">
                    <Link to="./cursos" className="nav-link active" id="reg">Explorar Cursos</Link>
                    </div>
                    </div>
                <div className="col-12 col-md-6 align-self-center">
               <div className="row justify-content-center">
               <img src="personas.png" className="img-fluid" id="per"/>
               </div>
           </div>
        </div>
        
    </div>


    );
}