import React, { useContext, useEffect, useState } from 'react';
import { getTopics } from "./apicomp";
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getCursosUser } from "./apicomp";



function Topic(props){



 const [topic,setTopic] = useState([]);
 const [auxi,setAuxi] = useState();
 const [use,setUse] = useState();
 const [num,setNum] = useState();
 const [lev,setLev] = useState("");
 const [levs, setLevs]= useState("");
const jaja = localStorage.getItem('jwt');
const carola = JSON.parse(jaja);
const ud = carola.user._id;
console.log(ud)
const auxiliar = props.location.state; 
   
/*globlal count*/ 
/*const auxiliar = props.location.state;*/
/*var count =auxiliar.levels;*/
/*console.log(auxiliar.levels)*/
/*useEffect(()=>
{
    
},[props.location.state])
*/
useEffect(()=>{
    getCursosUser(ud).then(data=>{
            if (data.error) {
              console.log(data.error);
            }
            else{
                   setLevs(data.avance[auxiliar.levels].level)
                   console.log(data.avance)
                 
            }
    })
})


 useEffect(()=>{
const cursoid= props.match.params.cursoId;
const jaja = localStorage.getItem('jwt')
const carola = JSON.parse(jaja);
const ud = carola.user._id;
console.log(cursoid)
console.log(ud)
setAuxi(cursoid);
setUse(ud);

getTopics(cursoid).then((data)=>{
    setTopic(data)
    setNum(100/(data.length))
    
    console.log(100/(data.length))
}).catch((error)=>{console.log(error)})

 },[props.match.params.cursoId])
 
return(
<>
<div className="container fluid my-5 py-5">
    <div className="row">
{



topic.map((curs,i)=>{

   if (i< levs) {
    return (<div key={i} className="card col-lg-3 col-md-6 col-sm-6 mx-1 my-1">
    <h2>Tema {i+1}</h2>
    <h5>{curs.title}</h5>

        <Link to={
            {
                pathname:"/bodycourse",
                state: 
                {
                    name:curs,
                    been: auxi,
                    beendos: use,
                    num: num,
                    disabled:((i+1)<levs?true:false)
                    
                }
            }} > 
    <button className="btn btn-success">Avanzar</button></Link>
 </div> )
   }
  if(i>=levs){
    return <div key={i} className="card col-lg-3 col-md-6 col-sm-6 mx-1 my-1">
    <h2>Tema {i+1}</h2>
    <h5>{curs.title}</h5>

        <Link to={
            {
                pathname:"/bodycourse",
                state: {
                    name:curs,
                    been: auxi,
                    beendos: use,
                    num: num
                }
            }} > 
    <button className="btn btn-success" disabled>Avanzar</button></Link>
 </div>   
   }
   
    
    })
    
    
    
    
    }

</div>
</div>
</>
)

}

export default withRouter(Topic);