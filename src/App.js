import React from 'react';
import  Nav  from "./components/navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Registro from "./components/registro";
import  Dashboard  from "./components/dashboard";
import Cursos from './components/cursos';
import Curso from './components/curso';
import Topic from './components/topic-course';
import BodyTopic from './components/body-topic';

import {UserProvider} from "../src/components/context";

function App() {
  return (
    <div>
       
<BrowserRouter>
<UserProvider>
     <Nav/>
     
     <Switch>
       
        <Route exact path="/">
         
            <Home />
        </Route>

        <Route path="/login">
         
           <Login />
        </Route>
        <Route path="/registro">
           <Registro />
        </Route>
        <Route path="/home" exact>
           <Home />
        </Route>
        <Route path="/cursos">
           <Cursos />
        </Route>
        <Route exact path="/curso/:cursoId">
           <Curso />
        </Route>
        <Route path="/dashboard">
           <Dashboard />
        </Route>
        
        <Route path="/topics/:cursoId">
           <Topic />
        </Route>
        <Route path="/bodycourse">
           <BodyTopic />
        </Route>
        

     </Switch>


     </UserProvider>
</BrowserRouter>
    </div>
  );
}

export default App;
