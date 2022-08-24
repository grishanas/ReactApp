import './App.css';
import React from 'react';
import Admin from "./Pages/Admin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';
import axios from 'axios';


export const baseURL = 'http://localhost:3001';


class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      languageInformation:{
        pageLanguage:'ENG',
        allowedLanguages:null,
      }
    }

    this.setPageLang=this.setPageLang.bind(this);
    this.getPageLang=this.getPageLang.bind(this);
    this.requestAllowedLanguage=this.requestAllowedLanguage.bind(this);

    this.state.request= axios.create({
      baseURL: baseURL,
      headers:{ 'Content-Type': 'application/json' },
    });
    
  }

  componentDidMount()
  {
    this.requestAllowedLanguage(this.state.languageInformation.pageLanguage);
  }



  requestAllowedLanguage(lang)
  {
    console.log('requestAllowedLanguage');
    this.state.request.get(`/AllowedLanguages?key=${lang}`).then((answer)=>{
      this.setState(function(state){
        return {
          languageInformation:Object.assign({},
            state.languageInformation,
            {
              allowedLanguages:answer.data
            }
          )
        }
      })
    })   
  }

  getPageLang()
  {
    return this.state.languageInformation.pageLanguage;
  }

  setPageLang(value)
  {
    this.setState(function(state){
      return{
        languageInformation:Object.assign({},
          state.languageInformation,{
            pageLanguage:value
          }
        )
      }
    })
    this.requestAllowedLanguage(value);
   
  }


  render()
  {
    return (
      <Router>    
        <Routes>
          <Route path="/Admin/*" element={<Admin lang={this.state.languageInformation} onLangChange={this.setPageLang}/>}/>
          <Route exatc path="/*" caseSensitive={false} element={<MainPage lang={this.state.languageInformation} onLangChange={this.setPageLang} />}/>
        </Routes>
      </Router>
    );
  }

}


export default App;
