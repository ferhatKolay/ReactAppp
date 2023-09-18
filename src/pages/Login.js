import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import Navbar from "../components/Navbar";
import Toastify from "../utils/Toastify";

const Login = () => {
    const user = {username: "user"}
    const handleLogin = (e)=>{
        e.preventDefault()
        sessionStorage.setItem("user", JSON.stringify(user))
        window.location.href = "/home";
        Toastify("Logged in successfully..")
    }
    return (
        <div>
            <Navbar/>
            <form onClick={handleLogin}>
                <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent="center"
                     margin="auto" marginTop={5} padding={5} borderRadius={5} boxShadow={"5px 5px 10px #ccc"}
                     sx={{
                         ":hover": {
                             boxShadow: "10px 10px 20px #ccc",},
                     }}>
                    <LoginIcon className="icon"/>
                        <Typography variant="h2" padding={3} textAlign="center" marginTop={0}>
                            Login
                        </Typography>
                        <TextField margin="normal" variant="outlined" type="email" placeholder="Email" required={true}/>
                        <TextField margin="normal" variant="outlined" type="password" placeholder="Password" required={true}/>
                        <Button className="btn" variant="contained" color="warning" type="submit">Login</Button>
                </Box>
            </form>
        </div>
);
};

export default Login;