import * as React from 'react';
import Navigatio from './Navigation';


export class Navigation extends React.Component
{
    constructor(props){
        super(props);
        this.state = { Language:'ru'}

        this.ChangeLanguage = this.ChangeLanguage.bind(this);
    }


    ChangeLanguage(value)
    {
        //проверка правильности языка
        console.log(value);
        this.setState({Language : value});
        
    }

    componentDidUpdate(props)
    {
        console.log('component update with educatots dynamic update');
    }



    render()
    {
       let Language=["rus","eng"];
       return <div>
           <Navigatio Language={Language}/>
        </div>

    }
    
}