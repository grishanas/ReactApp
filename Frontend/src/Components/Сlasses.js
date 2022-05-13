import * as React from 'react';
import { Class } from './Class';
import { Grid,Paper } from "@mui/material";


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
       return(
           <div className='container'>
               <div className='ClassesDescript'>
               <h1>
                   {this.props.title? <h1>{this.props.title}</h1>:<h1>что-то типо наших курсов</h1>}
               </h1>
               <p>
                   {this.props.description ? this.props.description :"Какое-то описание курсов"}
               </p>
            </div>
            <Grid xs={12} container className='ClassesGrid' spacing={2}>
                {this.props.Classes ? this.props.Classes.map((value)=>(
                    <Grid className='ClassGrid-item' key={value.id} item>
                        <Paper elevation={1} style={{height:200,width:300}}>
                        <p>dsa</p>
                    </Paper>
                </Grid>
                )):<p>Load Classes</p>}
            </Grid>
            </div>
            );
       

    }
    
}