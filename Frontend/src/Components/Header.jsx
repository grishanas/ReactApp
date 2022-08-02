import React, { Component } from "react";

export const Header = (props) =>{
    return (
        <header className="Header" style={{backgroundImage : 'url("http://localhost:3001/")'}} >
            <div className="container">
            <div className="intro">
                <div className="overlay">
                    <h1>
                        {props.data ? props.data.title : 'Loading'}
                    </h1>
                    
                    <p>
                        {props.data ? props.data.paragraph : 'Loading'}
                    </p>
                    
                </div>
                

            </div>
            </div>

        </header>

    )

}