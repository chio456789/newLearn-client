import React, {useState} from 'react';
import {signup} from './apicomp';
import {Redirect} from 'react-router-dom';
import swal from 'sweetalert';



export default function Registro() {

  const [values, setValues] = useState(
    {
    name: '',
    lastname: '',
    email: '',
    password: '',
    error:'',
    success:false
    
    
  })
  const [validation,setValidation] =useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  })

const {name,lastname,email,password,error,success} = values;


const validateAll = ()=>{
  const validations = {name:'',lastname:'',email:'',password:''}
  let isvalid = true;
  if (!name) {
    validations.name = '*Nombre es requerido';
    isvalid=false;

  }
  if (!lastname) {
    validations.lastname = '*Apellido es un campo requerido'
    isvalid=false;
  }
  if (!email) {
    validations.email = '*Correo es un campo requerido'
    isvalid=false;

  }

  if(email && !(/\S+@\S+\.\S+/).test(email))
  {
    validations.email = "El fomato de correo no es el correcto, debe ser de la siguiente forma ejemplo@mail.com"
    isvalid=false;
  }
  if (!password) {
    validations.password = '*Contraseña es un campo requerido'
    isvalid=false;

  }

if (!isvalid) {
  setValidation(validations)
}

  return isvalid;
}

/*const initialrender=useRef(true);*/

const handleChange = name => event=>{
setValues({...values,error:false,[name]:event.target.value})
}

const showSucces=()=>{
  if (success) {
    swal("Tu registro ha sido exitoso, inicia sesion")
    return <Redirect to='/login'/>
  }
  
}
/*const validate = (values)=>{
let errors ={};
if (!values.name) {
  errors.name = '*Nombre es requerido';
}
if (!values.lastname) {
  errors.lastname = '*Apellido es un campo requerido'
}
if (!values.email) {
  errors.email = '*Correo es un campo requerido'
}
if (!values.password) {
  errors.password = '*Contraseña es un campo requerido'
}
return errors;
}*/
 


const clickSubmit = (event) =>{
event.preventDefault();
const isValid = validateAll();
if (!isValid) {
  return false;
}
  setValues({
    ...values,error:false
  })
  signup({name,lastname,email,password}).then(data=>{
    if (data.error) {
      setValues({...values,error:true,success:false})
    }
    else{
      setValues({...values,name:'',lastname:'',email:'',password:'',error:'',success:true,})
    }
  }).catch({})

  
}

 
  
  return (

<div className="container" id="registro">

<form>
<div style={{textAlign:"center"}}><label style={{fontFamily:"sans-serif",fontWeight:"bold" }}>Registro</label></div>

  <div className="form-group content-center">
    <label>Nombres</label>
    <input type="text" name="name" className="form-control" onChange={handleChange('name')} value={name} placeholder="Nombres" required="required"/>
    {validation.name && <span style={{color:"red"}}>{validation.name}</span>}
    </div>
    <div className="form-group content-center">
    
    <label>Apellidos</label>
    <input type="text" className="form-control" value={lastname} placeholder="Introduce tus apellidos" name='lastname' onChange={handleChange('lastname')}/>
    {validation.lastname && <span style={{color:"red"}}>{validation.lastname}</span>}
    </div>
    <div className="form-group content-center">
    <label for="exampleInputEmail1">Correo Electronico</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" value={email} placeholder="Introduce tu correo electronico" name='email' onChange={handleChange('email')}/>
    {validation.email && <span style={{color:"red"}}>{validation.email}</span>}
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" placeholder="contraseña">Contraseña</label>
    <input type="password" placeholder="Introduce tu contraseña" className="form-control" value={password} name='password' onChange={handleChange('password')}/>
    {validation.password && <span style={{color:"red"}}>{validation.password}</span>}
  </div>

  <div style={{textAlign:"center"}}><button onClick={clickSubmit} type="submit" className="btn btn-danger" style={{fontWeight:"bold", width:"28rem"}} >Registrarse</button></div>
</form>
{showSucces()}
</div>

    );

}
