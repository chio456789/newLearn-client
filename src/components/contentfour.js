import React from 'react';
import './App.css';

export default function Contentfour () {
    return (
        <div className="container"  id="contentfour">
            <div className="row d-flex justify-content-center">
            <h2>Reseñas</h2>

            </div>
            <div className="row">
              <div className="col-12 col-md-4 d-flex justify-content-center">
                  <div className="container-team">
                      <div className="container-team-details">
                            <h5>Carlitos H.</h5>
                            <span>Los cursos express son los mejores que he tomado</span>
                      </div>
              <img src="team-1.jpg" className="img-fluid" alt=""/>
                  </div>
              </div>
              <div className="col-12 col-md-4">
              <div className="container-team">
                  <div className="container-team-details">
                      <h5>Maria Eugenia Z.</h5>
                      <span>Recomiendo los cursos certificados son los mas completos</span>
                  </div>
                  <img src="team-2.jpg" className="img-fluid" alt=""/>
              </div>
              </div>
              <div className="col-12 col-md-4">
              <div className="container-team">
                <div className="container-team-details">
                    <h5>Pedro Miguel P.</h5>
                    <span>Los docentes son muy expertos en sus areas de enseñanza</span>
                </div>
                  <img src="team-3.jpg" className="img-fluid" alt=""/>
                  </div>
              </div>


            </div>

        </div>
    );
}