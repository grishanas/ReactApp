import React, { Component } from "react";

export const Header = (props) =>{
    return (
        
        <header className="Header" 
        
        style={
            props.data ?
            
            {
            backgroundImage: `url(${props.data.bgPhoto})`
            } : 
            {backgroundColor: '#12223c' } 

            } >
            
            <div className="container"> 
            <div className="intro">
                <div className="overlay">
                    <h1>
                        {props.data ? props.data.title : 'Loading'}
                    </h1>
                    
                    <p>
                        {props.data ? props.data.description : 'Loading'}
                    </p>
                </div>
                

            </div>
            </div>

        </header>

    )

}