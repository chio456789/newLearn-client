import React from 'react';
import './App.css';

export default function Contentthree () {
    return (
        <div className="container-fluid" id="bh">
          <div className="row" >
        <div className="col justify-content-md-center">
          <h2 id="hul">Nuestras categorias</h2>
          </div>
          </div>
         
          <div className="row">
           <div className="col-12 col-md-4 align-self-center">
             <div className="row justify-content-center">
            <img id="imh" src="bar.png"/>
            </div>
            <div className="row justify-content-center" >
            <h4 id="h4">Finanzas</h4>
            </div>
           </div>
           <div className="col-12 col-md-4 align-self-center">
            <div className="row justify-content-center">
           <img id="imh" src="foco.png"/>
           </div>
           <div className="row justify-content-center">
           <h4 id="h4">Tecnologia</h4>
           </div>
           </div>

           <div className="col-12 col-md-4 align-self-center">

          <div className="row justify-content-center">

           <img id="imh" src="lapices.png"/>

           </div>
           <div className="row justify-content-center">
           <h4 id="h4">Diseño</h4>
           </div>
           </div>
            
        </div>
     </div>

    );
}