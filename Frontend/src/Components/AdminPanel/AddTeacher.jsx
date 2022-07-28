import * as React from "react";
import { Box, fontSize } from "@mui/system";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Input, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from "axios";
import AddPhoto from './AddPhoto'
import PhotoState from '../HelpComponents/PhotoState'

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
    
        this.state={
            photo: new PhotoState(),
            allowedLang: [],
            persanalData:'',
            teacherDescripion:'',


        }
        console.log(this.state)
    }    


    changeLanguage(e)
    {
        this.setState({allowedLang:e.target.value})
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
                    multiple
                    value={this.state.allowedLang}
                    placeholder='выбор языка'
                    onChange={(e)=>this.changeLanguage(e)}
                >
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
                placeholder={this.props.lang?this.props.lang.persanalData:"Персональные данные"}
                value={this.state.persanalData}
                >
                </TextField>
                <TextField
                multiline
                rows={4}
                placeholder={this.props.lang?this.props.lang.teacherDescripion:"Описание"}
                variant="standard"
                value={this.state.teacherDescripion}
                />
            
                </Box>
                <Box margin={'auto'}>
                <Button>
                    добавить
                </Button>
                <Button>
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