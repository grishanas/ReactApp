import * as React from 'react';
import { Educator } from './Educator';
import { Grid,Paper } from "@mui/material";


export class Educators extends React.Component
{
    constructor(props){
        super(props);

    }

    componentDidUpdate(props)
    {
        console.log('component update with educatots dynamic update');
    }

    render()
    {
       return(
           <div className='container'>
               <div className='EducatorsDescript'>
                    <h3>
                        {this.props.title ? this.props.title : "Преподаватели грузятся"}
                    </h3>
                    <p>
                        {this.props.description ? this.props.description : "Какое-то описание"}
                    </p>
               </div>
               <Grid container className='EducatorsGrid' xs={12} spacing={4}>
                   {this.props.Educators ? this.props.Educators.map((value)=>(
                       <Grid className='EducatorsGrid-item' key={value.id} item>
                           <Paper elevation={1} style={{height:200,width:300}} className='EducatorsGrid-item-Paper'>
                                <p>Преподаватели</p>
                           </Paper>
                       </Grid>
                   )) :<p>dsa</p> }
               </Grid>
           </div>
       );

    }
    
}