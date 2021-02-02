import React from 'react';
import './App.css';

export default function Content () {
    return (
    <div className="container-fluid" id="content">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="row justify-content-center">
            <img src="principal.png" className="img-fluid" id="redondo" />
            </div>
            </div>
            <div className="col-12 col-md-6 align-self-center">
            <div className="row">
            <h2 id="info">Toda la informacion a tu alcance</h2>
            </div>
            <div className="row justify-content-center">
            <button className="btn btn-info" id="bn"><h4>Inscribirse</h4></button>
            </div>
            </div>
        </div>
    </div>
      
    );
}