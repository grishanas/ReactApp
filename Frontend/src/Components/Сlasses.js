import * as React from 'react';
import { Class } from './Class';


export class Classes extends React.Component
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
        console.log('component With classes dinamic update');
    }



    render()
    {
       return <div>
           <Class />
        </div>

    }
    
}