import {AccountCircle} from "@mui/icons-material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {
    Box,
    Button,
    Grid,
    InputAdornment,
    Stack,
    TextField,
} from "@mui/material";
import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {initialValues} from "../pages/Home";
import Toastify from "../utils/Toastify";

const UpdateFormComponent = ({info, setInfo, listPatients}) => {
    const navigate = useNavigate()
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const baseURL = "http://localhost:8080/api/v1/patient"

    const createPatient = async () => {
        const res = await axios.post(baseURL, info)
        console.log(res);
        listPatients()

    }

    const updateFormPatient = async (e)=> {
        e.preventDefault();
        await axios.put(baseURL, info);
        navigate("/home");
        setInfo(initialValues);
        listPatients();
        Toastify("Patient updated successfully")

    }

    return (
        <Grid
            textalign="center"
            direction="column"
            sx={{width: "350px", margin: "auto", boxShadow: "10px 10px 20px #ccc"}}

        >
            <h2 className="header">Update Patient</h2>
            <Box style={{backgroundColor: "white", padding: "20px"}}>
                <form onSubmit={createPatient}>
                    <Stack spacing={3} direction="column">
                        <TextField
                            variant="outlined"
                            name="firstName"
                            placeholder="First Name"
                            value={info.firstName}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            name="lastName"
                            placeholder="Last Name"
                            value={info.lastName}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            name="birthDate"
                            placeholder="Birth Date(Year-Mont-Day)"
                            value={info.birthDate.slice(0, 10)}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarTodayIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button className="btn" variant="contained" type="submit" value="submit" onClick={updateFormPatient}>
                            UPDATE
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Grid>
    );
};

export default UpdateFormComponent;