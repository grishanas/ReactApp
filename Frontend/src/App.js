import './App.css';
import {Footer} from './Components/Footer';
import {Home} from './Pages/Home';
import axios from 'axios';
import React from 'react';
import {Navigation} from './Components/Navigation';
import { Class } from "./Pages/Class"
import {Classes } from "./Pages/Classes";
import {Admin} from "./Pages/Admin"
import { AdminPanel } from './Pages/AdminPanel';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const baseURL = 'http://localhost:3001';


function App() 
{

  const [props,SetProps] = React.useState();
  axios.defaults.withCredentials = true;
  const Requst = axios.create({
    baseURL: baseURL,
    headers:{ 'Content-Type': 'multipart/form-data' },
  });

  async function GetData(){
    const Item = await Requst.get('/').then((res)=>{SetProps(res.data)});
  }
  

  React.useEffect(()=>{
    (async()=>{
    GetData();

  })();},[]);


  return (


  <Router>
      
      <Routes>
        <Route path="/Admin" element={<Admin />}/>
        <Route path="/Admin/Panel" element={<AdminPanel/>}>
        </Route>
        <Route exatc path="/" caseSensitive={false} element={<><Navigation Navigation={props ? props.Navigation:''}/> <Home props={props ? props : null} /></>} />
        <Route exact path="/Classes" element={<><Navigation Navigation={props ? props.Navigation:''}/><Classes /></>}/>
        <Route path="/Classes/:id" caseSensitive={false} element={<Class />}/>
      </Routes>
    </Router>

    );

}

export default App;
