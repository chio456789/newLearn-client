import React, { useState } from 'react';
import { getUpdate, getUpdatePassword} from "./apicomp";
import swal from 'sweetalert';


export default function  Update(props){

    const [values, setValues] = useState({
        name: props.dado.name,
        lastname: props.dado.lastname,
        password: '',
        error: '',
        success:false
        
      })
    const {name,lastname,password,success} = values;
    
    const handleChange = name => event=>{
    setValues({...values,error:false,[name]:event.target.value})
    }
    const clickSubmit = (event) =>{
    event.preventDefault();

    
    getUpdate(props.dado._id,{name,lastname}).then((data)=>{
      if (data.error) {
        setValues({...values,error:true})
      }
      else{
        setValues({...values,error:false,success:true})
      }
    })
if (Object.keys(password).length>0) {
  getUpdatePassword(props.dado._id,{password}).then((data)=>{
    if (data.error) {
      console.log(data.error)
    }
    else{
      setValues({...values, password:''})
    }
  })
}
   


    }

    const alert = ()=>{
if (success) {
  swal("Actualizacion exitosa");
}
    }

return (
<>
<div className="container col-5" id="registro">

<form>
<div style={{textAlign:"center"}}><label style={{fontFamily:"sans-serif",fontWeight:"bold" }}>Actualizar Datos</label></div>

  <div className="form-group content-center">
    <label>Nombres</label>
    <input type="text" name="name" className="form-control" id="noun" onChange={handleChange('name')} value={name} placeholder="Nombres"/>
    <label>Apellidos</label>
    <input type="text" className="form-control" id="noun" value={lastname} placeholder="Introduce tus apellidos" name='lastname' onChange={handleChange('lastname')}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" placeholder="contraseña">Contraseña</label>
    <input type="password" placeholder="Introduce tu nueva contraseña" id="noun" className="form-control" value={password} name='password' onChange={handleChange('password')}/>
  </div>

  <div style={{textAlign:"center"}}><button onClick={clickSubmit} type="submit" className="btn btn-success" style={{fontWeight:"bold", width:"26rem"}} >Actualizar</button></div>
</form>
{alert()}
</div>
</>


);
}

