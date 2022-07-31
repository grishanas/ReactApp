import AddAPhoto from "@mui/icons-material/AddAPhoto"
import { Button, FormControl, Grid, InputBase, InputLabel, MenuItem, NativeSelect, OutlinedInput, Paper, Select, TextField, Typography } from '@mui/material';
import * as React from "react"
import AddPhoto from "./AddPhoto"
import { Leson } from "../HelpComponents/Class";


class PreviewClass extends React.Component{

    constructor(props)
    {
        super(props)
        let tmp=new Leson();
        //this.state.leson=props.Leson.getState();
        this.state={leson:tmp.getState()};
        console.log(this.state);
        this.state.clearedDate=null;

    }


    render()
    {
    
        return(
           <Paper style={{width:500}}>
               <Grid container columnSpacing={2} direction="row">
                    <Grid item xs='auto'>
                        {/*<AddPhoto state={this.state.photo}/>*/}
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column">
                            <Grid item>
                                <FormControl>
                                    <InputLabel>Choose lang</InputLabel>
                                    <Select>    
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <InputBase multiline maxRows={4} placeholder='название курса' value={this.state.description} onChange={(e)=>{this.changeLabel('description',e)}}/>
                            </Grid>
                            <Grid item>
                                <InputBase placeholder='Дата начала' value={this.state.personalData} onChange={(e)=>{this.changeLabel('personalData',e)}}/>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
           </Paper>
        )

    }

}

export default PreviewClass