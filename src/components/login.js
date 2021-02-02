import React, { useState,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import { signin,authenticate, isAuthenticated } from './apicomp';
import {UserContext} from './context';
import swal from 'sweetalert';


export default function Login (){

  const {setUser} = useContext(UserContext);
  

  const [values, setValues] = useState({
    email:"",
    password: "",
    error: "",
    loading:false,
    redirectToReferrer:false
  })

  const {email,password,error,redirectToReferrer,loading}=values;
  const {user}= isAuthenticated();
  
  const handleChange = name => event =>{
     setValues({...values, error: false, [name]: event.target.value})
  }

  const clickSubmit = (event)=>{
 
    event.preventDefault();
    
    setValues({...values,error:false,loading:true})
    signin({email,password}).then(data =>{
      console.log(data)
      if (data.message) {
        setValues({...values,error:data.error,loading:false})
        setUser(false);
        swal(data.message)
      }
      else{
       
        authenticate( data,()=>{setValues({...values,redirectToReferrer:true})})
        
      }
    })
  }

  const redirectUser = ()=>{
    if (redirectToReferrer) {
      if (user) {
        swal("Bienvenido¡");
        setUser(true);
        
        return <Redirect to="/dashboard"/>
      }
      
    }
  }

  const showLoading = ()=>(
    loading && (
      <div className="alert alert-info"> 
        <h2>Cargando</h2>
      </div>
    )
  )
  
    return(
<div className="container" id="registro">

<form>

<div style={{textAlign:"center"}}><label style={{fontFamily:"sans-serif",fontWeight:"bold" }}>SignIn</label></div>
  
  <div className="form-group content-center">
    <label>Correo Electronico</label>
    <input onChange={handleChange('email')} type="email" value={email} className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Introduce tu correo electronico"/>
  </div>
  <div className="form-group">
    <label>Contraseña</label>
    <input onChange={handleChange('password')} type="password" value={password} className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
  </div>

    <div style={{textAlign:"center"}}><button onClick={clickSubmit} type="submit" className="btn btn-primary" style={{fontWeight:"bold", width:"28rem"}} >Ingresar</button></div>

  


</form>

{showLoading()}
{redirectUser()}

</div>
    );

}
