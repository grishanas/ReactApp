import React,{useState} from "react";
import { MenuItem, Select,NativeSelect } from "@mui/material";


const Navigatio=(props)=>{

    const [Language, ChangeLanguage] = React.useState(String);

    return(
        <nav id="menu">
            <div className="container">
                <div className="navigationTabBar">
                    <div className="NavigationTitle">
                        <h1>{props.data ? props.data.NavTitle : 'Title Load'}</h1>
                    </div>
                   <ul className="nav-bar-list">
                       <li>
                        <a href="#component1" className="NavBarComponent">
                            SomeText
                        </a>

 
                        
                       </li>
                   </ul>

                    <div className="nav-bar-right-part">
                   <NativeSelect 
                   id="Nav-bar-language-selector"
                   defaultValue={props.Language[0]}
                            onChange={(e)=>{ChangeLanguage(e.target.value)}}
                        >
                            <option value={props.Language[0]} >{props.Language[1]}</option>
                            <option value={props.Language[1]} >{props.Language[1]}</option>
                    </NativeSelect> 
                    </div>
                        
                </div>
            </div>

        </nav>
    )
}

export default Navigatio