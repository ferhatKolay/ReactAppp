import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";


const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<PrivateRouter />}>
                        <Route path="" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;