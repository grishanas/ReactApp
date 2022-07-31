import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system'
import * as React from 'react'

class AddClass extends React.Component{

    constructor(props)
    {
        super(props);
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
                        <Typography>
                            dsa
                        </Typography>

                    </Grid>
                    <Grid item>

                    <Typography>
                        asd
                    </Typography>

                    </Grid>
                </Grid>
                <Grid item>
                    <Typography>
                        fdsafdsa
                    </Typography>
                </Grid>

            </Grid>
        )
    }
}

export default AddClass