import React, { useEffect, useState,useContext } from 'react';
import {withRouter} from 'react-router-dom';
import { levelComplete } from "./apicomp";
import ReactPlayer from "react-player"

function BodyTopic(props){
/**Estados */
const [but,setBut]= useState(()=>{
   
const auxiliar = props.location.state;
   var minios = auxiliar.disabled;
   return minios
});



const [tres, setTres] = useState({porcent:0,level:1})

const auxiliar = props.location.state;
console.log(auxiliar.been)
const nrocurso = auxiliar.been;
console.log(auxiliar.beendos)
const nrousuario = auxiliar.beendos
console.log(auxiliar.num)
//const porcentail = auxiliar.num
console.log(tres)

console.log(auxiliar.disabled)

useEffect(()=>{
var min = auxiliar.disabled
setBut(min)
},[auxiliar.disabled])

useEffect(()=>{
   const porcentail = auxiliar.num
   setTres({...tres,porcent:porcentail})
},[auxiliar.num])


const addPorcent = (event)=>{
   
   event.preventDefault();
  // setTres({porcent:porcentail})
 setBut(true);
   levelComplete(nrousuario,nrocurso,tres).then((data)=>{
      console.log(data)
   }).catch((error)=>{
      console.log(error)
   })

}

//const dos = uno.name.title

return(
<div className="container col-9 my-5 py-5">
 

   <div className="row">
   <h1 className="col-6 col-sm-4">{auxiliar.name.title}</h1>
   </div>
   <div className="row">

   <ReactPlayer
        url="https://www.youtube.com/watch?v=Sycoz4sv1Hg"
      />
 

</div>
<div className="row py-2">
{but ?
 <>
 <button onClick={addPorcent} className="btn btn-danger py-2" disabled>Tema Completado</button>
</>
:
<>
<button onClick={addPorcent} className="btn btn-danger py-2">Tema Completado</button>
</>


 }


</div>


</div>

)

}

export default withRouter(BodyTopic);