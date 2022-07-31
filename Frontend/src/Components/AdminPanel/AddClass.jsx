import AddAPhoto from '@mui/icons-material/AddAPhoto';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system'
import * as React from 'react'
import PhotoState from '../HelpComponents/PhotoState';
import AddPhoto from './AddPhoto';
import PreviewClass from './PreviewClass';

class AddClass extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            photo:new PhotoState()
        }
    }

    render()
    {
        return(
            <Grid
            container        
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            >
                <Grid item xs='auto'>
                    <Grid item>
                        <PreviewClass state={{photo:this.state.photo}}/>
                    </Grid>
                    <Grid item>


                    </Grid>
                </Grid>
                <Grid item xs='auto'>

                </Grid>

            </Grid>
        )
    }
}

export default AddClass