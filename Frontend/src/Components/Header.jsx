import React, { Component } from "react";

export const Header = (props) =>{
    return (
        <header>
            <div className="intro">
                <div className="overlay">
                    <h1>
                        {props.data ? props.data.title : 'Loading'}
                        <span></span>
                    </h1>
                    <p>
                        {props.data ? props.data.paragraph : 'Loading'}
                    </p>
                    
                </div>
                

            </div>

        </header>

    )

}