import React from 'react';
import { API } from '../config';

export  const Showimage = ({item,url}) => {
   return (
    <div>
        <img src={`${API}/${url}/photo/${item._id}`} alt=""/>
    </div>


   ) ;
}
//http://localhost:4000/api/cursos/photo/5febde42c24f2f32d8010fdb