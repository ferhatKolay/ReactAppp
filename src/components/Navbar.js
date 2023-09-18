import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KolayIcon from "../utils/kolay_main_logo.png"
import {useNavigate} from "react-router-dom";
import {initialValues} from "../pages/Home";
import Toastify from "../utils/Toastify";

export default function Navbar({setInfo}) {
    const navigate = useNavigate()
    const navigateHome = () => {
        setInfo(initialValues)
        navigate("/home")

    }

    const handleLogout = () =>{
        sessionStorage.clear();
        navigate(("/"))
        Toastify("Logged out successfully")
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="error">
                <Toolbar className="navbar">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: "flex", alignItems:"center" }}
                    >
                        <img src={KolayIcon} alt={"icon"} className="img" onClick={navigateHome}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ fontFamily: "Girassol", fontSize: "40px" }} >
                        &lt;PatientApp/&gt;
                    </Typography>
                    {sessionStorage.getItem("user") ? <Button className="btnNav" color="inherit" onClick={handleLogout}>Logout</Button> : <Button className="btnNav" color="inherit">Login</Button>}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
