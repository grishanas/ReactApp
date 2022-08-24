import { Grid, Toolbar } from "@mui/material";
import { Box} from "@mui/system";
import React, { Component } from "react";
import { renderMatches } from "react-router";

export default class Header extends React.Component
{

    constructor(props)
    {
        super(props)
        console.log(props)

    }

    componentDidUpdate()
    {
        console.log(this.props);
    }

    render()
    {

        return (
            
            <>
            <Toolbar/>
            <Box className="Header" component="main"
            sx={{overflow: 'auto', flexGrow: 1}}
            style={
                this.props.header?
                {
                backgroundImage: `url(${this.props.header.bgPhoto})`
                } : 
                {backgroundColor: '#12223c'} 
    
            }>
                
                <Box margin='auto' height={'100%'}>
                    <Grid container 
                    margin={'auto'}
                      maxWidth={"1000px"}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      height={'100%'}
                      
                    >
                        <Grid item style={{color:'#000000'}}>
                            {this.props.header?this.props.header.title:"Load"}
                        </Grid>
                        <Grid item>
                            {this.props.header?this.props.header.description:"Load"}
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </>
    
        )
    } 
}