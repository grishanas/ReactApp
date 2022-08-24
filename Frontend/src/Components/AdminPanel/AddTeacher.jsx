import * as React from "react";
import { Box, fontSize } from "@mui/system";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Input, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import axios from "axios";
import AddPhoto from './AddPhoto'
import PhotoState from '../HelpComponents/PhotoState'
import addTeacher from "../HelpComponents/AddTeacher";

const baseURL='http://localhost:3001';

const allowedLangs=[
    {'key':'Rus','value':'русский'},
    {'key':'b','value':'b'},
    {'key':'c','value':'c'},
    {'key':'d','value':'d'}
]

/**
 * allowedLangs = transmited via props contain object {key,value} with allowed array of languages and they adaptation
 * 
 * 
 * 
 */
class AddTeacher extends React.Component
{
    constructor(props)
    {
        super(props);
        let Teacher;
        
        if(props.hasOwnProperty('teacher'))
        {
            Teacher= props.teacher;
        }
        else
        {
            Teacher= new addTeacher();
        }

        this.state={
            photo: new PhotoState(),
            lang: undefined,
            personalData:'',
            teacherDescripion:'',
            teacher:Teacher,
            isTextFieldEnable:false,
        }

    }
    
    changeTextField(name,e){
        console.log(name);
        console.log(e.target.value)
        this.setState({[name]:e.target.value})
    }


    changeLanguage(e)
    {
        this.setState({isTextFieldEnable:true});
        if(this.state.lang!=undefined)
        {
            console.log('lang!=undefined')
            let tmp={'lang':this.state.lang,'personalData':this.state.personalData,'teacherDescripion':this.state.teacherDescripion};
            this.state.teacher.setState(tmp);

        }
        console.log('==');
        let TeacherData = this.state.teacher.getTeacherInformation(e.target.value.key);
        console.log(TeacherData);
        this.setState(TeacherData.getState());


    }


    sendRequest()
    {

        let req= axios.create({
            baseURL:baseURL,
            headers:{ 'Content-Type': 'application/json' },
        })
        req.post('/Test',"dsa").then((e)=>{
            console.log(e)
        })
        /*
            пересылка запроса дочернему элементу
        */

    }

    sendTeacher()
    {
        if(this.state.lang!=undefined)
        {
            let tmp={'lang':this.state.lang,'personalData':this.state.personalData,'teacherDescripion':this.state.teacherDescripion};
            this.state.teacher.setState(tmp);
        }

    }

    resetState()
    {

        this.setState({
            photo: new PhotoState(),
            lang: undefined,
            personalData:'',
            teacherDescripion:'',
            teacher: new addTeacher(),
            isTextFieldEnable:false,
        })
    }


    render()
    {
        return(
            <Box style={{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
            }}
            >
                <Typography style={{margin:'auto'}}>{(this.props.HeaderAddTeacher)?this.props.HeaderAddTeacher:"Добавление преподавателя"}</Typography>
                <AddPhoto state={this.state.photo} dataTooltip="sometext"/>
                <Box style={{display:'flex',margin:'auto', flexDirection:'column'}}>
                
                <Select sx={{m:1,mt:3,width:300}} style={{margin:'auto',marginTop:10}}
                    displayEmpty={(this.state.lang==undefined)?true:false}
                    value={this.state.lang}
                    renderValue={(selected)=>{

                        if(this.state.lang===undefined)
                        {
                            selected=undefined;
                        }
                        
                        if(selected==undefined)
                        {
                            return (<em>placeholder</em>)
                        }
                       
                        return selected.value
                    }}
                    onChange={(e)=>this.changeLanguage(e)}>
                    {allowedLangs.map((lang)=>(
                        <MenuItem
                            key={lang.key}
                            value={lang}
                            input={<OutlinedInput />}
                        >
                            {lang.value}
                        </MenuItem>
                    ))}
                </Select>
                <TextField
                disabled={!this.state.isTextFieldEnable}
                placeholder={this.props.lang?this.props.lang.persanalData:"Персональные данные"}
                value={this.state.personalData}
                onChange={(e)=>this.changeTextField('personalData',e)}
                >
                </TextField>
                <TextField
                disabled={!this.state.isTextFieldEnable}
                multiline
                rows={4}
                placeholder={this.props.lang?this.props.lang.teacherDescripion:"Описание"}
                variant="standard"
                value={this.state.teacherDescripion}
                onChange={(e)=>this.changeTextField('teacherDescripion',e)}
                />
                </Box>
                <Box margin={'auto'}>
                <Button onClick={(e)=>{console.log(this.state)}}>
                    добавить
                </Button>
                <Button onClick={(e)=>{this.resetState()}}>
                    очистить
                </Button>
                </Box>
            </Box>
        )
    }
}

export default AddTeacher;

/*export const AddTeacher=()=>{


    const Requst = axios.create({
        baseURL: baseURL,
        headers:{ 'Content-Type': 'application/json' },
        });

    const [open,setOpen]=React.useState(false);

    const OpenDilog=()=>{
        setOpen(true);
    }

    const DialogAddPhoto =()=>{

        const [smallPhoto,setSmallPhoto]=React.useState(null);
        const [largePhoto,setLargePhoto]=React.useState(null);
        const [isSmallPhotoAdd,showSmallPhotoInput]=React.useState();


        const CloseDialog=()=>{
            setOpen(false);

        }

    
        return(
        <Box>
            <Dialog open={open} onClose={CloseDialog}>
                <DialogTitle>
                    SomeTitle
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        some help text 
                    </DialogContentText>
                    <IconButton>
                        <AddAPhotoIcon fontSize="large"/>
                    </IconButton>
                </DialogContent>

            </Dialog>
        </Box>
        )
    }


    const [TeacherPages,setTeacherPages] = React.useState();

    return(
        <Box>

            <AddTeachedr/>
            {/*<Button>
                <Typography>Clear</Typography>
            </Button>
            <Button onClick={OpenDilog}>
                <Paper>
                    
                    <AddPhotoAlternateSharpIcon/>
                    <DialogAddPhoto/>
                </Paper>
            </Button>}
        </Box>
    )
}*/