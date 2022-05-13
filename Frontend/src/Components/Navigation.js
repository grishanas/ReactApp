import React,{useState} from "react";
import Button from '@mui/material/Button';


export function navigatio(props){

    const [Language,setLang] = useState(null);

    const HandleClick=(event)=>{
        setLang(event.currentTarget);
    }


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
                        <Button onClick={HandleClick}>
                            Some Button
                        </Button>
                        
                       </li>
                   </ul>
                </div>
            </div>

        </nav>
    )
}