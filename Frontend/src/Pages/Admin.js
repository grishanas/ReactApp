import { Button, FormControl, OutlinedInput, InputLabel, Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import * as React from 'react';
import './Style/Admin.css'  
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { Navigate, useNavigate } from "react-router";

const baseURL = 'http://localhost:3001';
const URL='/Admin/SigIn';





export const  Admin=(props)=>
{

    const [Values,SetValues] = React.useState({
        Password:'',
        NickName:'',
        ShowPassword:false,
    });

    axios.defaults.withCredentials = true;
    const Requst = axios.create({
    baseURL: baseURL,
    headers:{ 'Content-Type': 'application/json' },
    });

    async function SendLogIn(e)
    {
    e.preventDefault();
    Requst.post(URL+"/Authinfication",{LogIn:Values.NickName ? Values.NickName : null,Password:Values.Password ?Values.Password : null}).
        then((e)=>{
            switch(e.status)
            {
            case 200:
                {
                    localStorage.setItem("RefreshToken",e.data.RefreshToken);
                    
                    break;
                }
            case 401:
                {

                    break;
                }
            }


        });
    }

    if(localStorage.getItem("RefreshToken")!=null)
    {
        Requst.post(URL+"/refresh",{"RefreshToken":localStorage.getItem("RefreshToken")}).
        then((e)=>{
            switch(e.status){
                case 200:{

                    break;
                }
                case 401:{

                    break;
                }

            }


        });
    }



    const handleChange = (prop) => (event) => {
        SetValues({ ...Values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        SetValues({
          ...Values,
          ShowPassword: !Values.ShowPassword,
        });
        console.log(Values.ShowPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    return(
      
        <div className="box">
        <Paper className="AdminMainPaper">
        
            <div className="AdminContainer">
            <FormControl className="AdminFormControl">
                
            <InputLabel htmlFor="NickNameid">NickName</InputLabel>
            <OutlinedInput

                label="NickName"
                id="NickNameid"
                onChange={handleChange('NickName')}
            >
            </OutlinedInput>
            </FormControl>
            <FormControl className="AdminFormControl">
            <InputLabel htmlFor="Passwordid">Password</InputLabel>
            <OutlinedInput
                label="Password"
                value={Values.Password}
                type={Values.ShowPassword ? 'text' : 'password'}
                onChange={handleChange('Password')}
                id="Passwordid"
                endAdornment={ 
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                    {Values.ShowPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                
            }
            >

            </OutlinedInput>
            </FormControl>
            <Button onClick={e=>(SendLogIn(e,Values))}>
                Sign In
            </Button>
            </div>
        
        </Paper>
        </div>
    );
}