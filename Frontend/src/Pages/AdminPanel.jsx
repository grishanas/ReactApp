import * as React from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { AppBar, autocompleteClasses, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Route, Router } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddTeacher from '../Components/AdminPanel/AddTeacher'
import { AddClasses } from "../Components/AdminPanel/AddClasses";
import { useEffect } from "react";

const baseURL = 'http://localhost:3001';
const URL='/Admin';



export const AdminPanel=(props)=>{


    axios.defaults.withCredentials = true;
    const Requst = axios.create({
    baseURL: baseURL,
    headers:{ 'Content-Type': 'application/json' },
    });

    const [PageLanguage,setPageLanguage] = React.useState();
    const [PagePanel,setPagePanel] = React.useState();
    const [RightSideBar,SetOpenSideBar] = React.useState(false);

    const CloseUserAccount =()=>{
        console.log('close');
        localStorage.removeItem("RefreshToken");
        Requst.post('/Admin/SigIn/Leav');
    }; 

    const SetPagePanel=(e)=>{
        setPagePanel(e);
    }

    const ChangeLanguage=(e)=>{
        Requst.get(URL+`/Data/Localization/?lang=${e}`).then((answer)=>{
            switch(e)
            {
                case 200:{
                    setPageLanguage(e);
                    break;
                }
            }
        });
    }

    useEffect(()=>{
        document.title=PagePanel;
    })

    const toggleRightBar=()=>{
        SetOpenSideBar(!RightSideBar);
    };

    /*Requst.post('/Admin/SigIn').then((e)=>{
        
    })*/


    const rightSideBar = (props)=>(
        
        <Box component="div" style={{
            width: 250,
            height: "100%"
        }}>
            
            <List sx={{width:'100%'}}>
           
            <List sx={{width:'100%',
                }}
                subheader={
                    <ListSubheader component={'div'}>
                        {props.RightSideBar.ListSubHeader ? props.RightSideBar.ListSubHeader:"Language"}
                    </ListSubheader>
                }
            >
                <Box
                    style={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center"
                    }}>
                
            {props.RightSideBar.Buttons ? props.RightSideBar.Buttons.map((value)=>(
                <ListItemButton style={{
                    width:'90%',
                    borderRadius:8,
                    background:"#aaf",
                    
                }} onClick={ChangeLanguage}
                >
                    <ListItemText primary={value.a}/>

                </ListItemButton>
            )):null}
               
                </Box>
                
            </List>

            <ListItemButton onClick={CloseUserAccount}>
                <ListItemText primary={props.RightSideBar.Exit ? props.RightSideBar.Exit:"Exit"}/>
            </ListItemButton>
            

            </List>

        </Box>
    );

    return(
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                    <Link to="/" style={{ color:'#ff22f2',
                        textDecoration:'none',
                        }}>
                    <Typography >
                        sometext
                    </Typography>
                    </Link>  
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton onClick={toggleRightBar}>
                            <SettingsIcon />
                        </IconButton>

                    </Box>


                   

                    <Drawer open={RightSideBar} anchor="right" onClose={toggleRightBar}
                        sx={{zIndex:(theme)=>theme.zIndex.drawer+1}}>
                        {rightSideBar({
                            "RightSideBar":{
                                "ListSubHeader":"Выберите язык",
                                "Buttons":[{
                                    "a":"a"
                                },{
                                    "a":"b"
                                }]
                            }

                        })}
                    </Drawer>
                    </Toolbar>
                    </AppBar>
                    
                
                <Drawer
                    anchor="left"
                    open={true}
                    sx={{
                        width: 200,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },}}
                        variant="persistent">
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Inbox', 'Starred', '2', '3', '4', '5'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                        <ListItemButton key={text} onClick={(e)=>(SetPagePanel(index))}>
                            <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItemButton>
                        </ListItem>))}
                    </List>
                    <Divider />
                         <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                
                <Box component="main" sx={{overflow: 'auto', flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                    {(()=>{
                    console.log(PagePanel);
                    switch(PagePanel)
                    {
                        case 1:
                            console.log('AddTeacher');
                            return <AddTeacher />;
                        case 2:
                            console.log('AddClass')
                            return <AddClasses />
                        default:
                            return null;
                    }
                    })()}
                </Box>
        </Box>
        </>
    );

}