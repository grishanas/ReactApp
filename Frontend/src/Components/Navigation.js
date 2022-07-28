import React,{useState} from "react";
import { MenuItem, Select,NativeSelect } from "@mui/material";
import { Route } from "react-router";
import { Link } from "react-router-dom";


export const Navigation=(props)=>{

    return(
        <nav id="menu">
            <div className="container">
                <div className="navigationTabBar">
                    <div className="NavigationTitle">
                        <Link
                            to="/">
                            <h1>GlobalITschool</h1>
                        </Link>
                    </div>
                  { <ul className="nav-bar-list">
                       {props.Navigation.ref ? props.Navigation.ref.map((value)=>(
                        <li>
                        <Link to={value.link} className="NavBarComponent">
                            {value.text}
                        </Link>
                       </li>
                       
                       )):<li><p>Load</p></li>}
                       </ul>}

                    <div className="nav-bar-right-part">
                        {props.Navigation.SocialMedia ? props.Navigation.SocialMedia.map((value)=>(
                            <div className="nav-bar-SocialMedia">
                                <a href={value.link}>
                                    <img src={value.photo}/>
                                </a>
                            </div>
                        )):null}
                    </div>
                        
                </div>
            </div>

        </nav>
    )
}

export default Navigation