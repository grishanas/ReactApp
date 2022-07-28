import React from "react";
import { Header } from "../Components/Header";
import { Classes } from "../Components/Сlasses";
import { Educators } from "../Components/Educators";

export const Home = (props)=>
{
    return(
        <>
        <Header data={props.props ? props.props.Header:''}/>
        <Classes data={props.props ? props.props.Classes:''}/>
        <Educators data={props.props ? props.props.Educators:null}/>
        </>
    )

}