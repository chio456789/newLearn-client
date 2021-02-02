import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import {Showimage} from './ShowImage';


export const Card = ({curso}) => {



   return (
    
            <div className="card m-10 my-3" id="tarjeta">
            <Showimage item={curso} className="card-img-top" alt="..." url="cursos"/>
                <div className="card-body">
                <h5 className="card-title">{curso.name}</h5>
                     <p className="card-text">{curso.shortDescription}</p>

            <Link to={`/curso/${curso._id}`}>
                <button className="btn btn-primary">Detalles curso</button>
                </Link>
                 </div>
            </div>
    );

    }
