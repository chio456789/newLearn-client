import {API} from '../config';

export const getCursos = ()=>{
    return fetch(
        `${API}/cursos/curso`,
        {
            method: 'GET'
        }
    )
    .then(response =>{
        console.log(response);
        return response.json();

    })
    .catch(error=>console.log(error));
}

export const getCursosUser = (userId)=>{
    return fetch(
        `${API}/profile/${userId}`,
        {
            method: 'GET'
        }
    )
    .then(response =>{
        
        return response.json();

    })
    .catch(error=>console.log(error));
}


export const signin = user=>{
 return fetch(`${API}/authentication/signin`,{
     method: "POST",
     headers: {
         Accept: 'application/json',
         "Content-Type":"application/json"
     },
     body:JSON.stringify(user)
 }).then(response =>{
     return response.json();
 }).catch(err=>{
     console.log(err);
 })
};

export const signout = (next)=>{
 if (typeof window !== 'undefined') {
     localStorage.removeItem('jwt');
     next();
     return fetch(`${API}/authentication/signout`, {
         method: "GET"

     }).then(response =>{
         console.log('signout', response);

     }).catch(error =>console.log(error));
 }   
}

export const authenticate = (data,next)=>{
    if (typeof window !=='undefined') 
    {
        localStorage.setItem('jwt',JSON.stringify(data))
        next();
    }
}

export const isAuthenticated = ()=>{
    if (typeof window == 'undefined') {
      return false;  
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false;
    }
}

export const signup = user =>{
    return fetch(`${API}/authentication/signup`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(response =>{
        return response.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const read = (cursoId)=> {
    return fetch(`${API}/cursos/${cursoId}`,{
        method:"GET"
    }).then(response =>{return response.json();
    }).catch(err=>console.log(err));
}

export const addAssig = (userid,course) =>{
    return fetch(`${API}/profile/addCurso/${userid}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(course)
    }).then(response =>{
        return response.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const addPoints = (userid,points) =>{
    return fetch(`${API}/profile/porcent/${userid}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(points)
    }).then(response =>{
        return response.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const getTopics = (cursoId)=>{
    return fetch(
        `${API}/cursos/topics/list/${cursoId}`,
        {
            method: 'GET'
        }
    )
    .then(response =>{
        console.log(response);
        return response.json();

    })
    .catch(error=>console.log(error));
}

export const levelComplete = (userId,cursoId,porcent)=>{
    return fetch(`${API}/profile/porcent/new/${userId}/${cursoId}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(porcent)
    }).then(response =>{
        return response.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const getPorcent = (cursoId)=>{
    return fetch(
        `${API}/profile/porcent/${cursoId}`,
        {
            method: 'GET'
        }
    )
    .then(response =>{
     
        return response.json();

    })
    .catch(error=>console.log(error));
}

export const getUpdate = (userId,sol)=>{
    return fetch(
        `${API}/profile/update/${userId}`,
        {
            method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(sol)
    }).then(response =>{
        return response.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const getUpdatePassword = (userId,sol)=>{
    return fetch(
        `${API}/profile/updatePassword/${userId}`,
        {
            method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(sol)
    }).then(response =>{
        return response.json();
    }).catch(err=>{
        console.log(err)
    })
}