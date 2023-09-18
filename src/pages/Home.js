import React, {useEffect, useState} from 'react';
import FormComponent from "../components/FormComponent";
import Patients from "../components/Patients";
import axios from "axios";
import UpdateFormComponent from "../components/UpdateFormComponent";
import Navbar from "../components/Navbar";
import Toastify from "../utils/Toastify";



export const initialValues = {id: "", firstName: "", lastName: "", birthDate: ""};
const Home = () => {
    const [patientDB, setPatientDB] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [info, setInfo] = useState(initialValues)

    const baseURL = "http://localhost:8080/api/v1/patient"
    const listPatients = async () => {
        setIsLoading(true)
        try {
            const {data} = await axios(baseURL)
            setPatientDB(data)
            setIsLoading(false)
        } catch (err){
            Toastify(err)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        listPatients()
    }, []);

    const updatePatient = async (pk)=>{
        const { data } = await axios.get(`${baseURL}/${pk}`);
        setInfo(data)
    }

    const deletePatient = async (pk) => {
        await axios.delete(`${baseURL}/${pk}`);
        Toastify("Patient deleted successfully")
        listPatients();

    };


    return (
        <div className="home">
            <Navbar setInfo={setInfo}/>
            {info?.id >= 1 ? <UpdateFormComponent info={info} setInfo={setInfo} listPatients={listPatients}/> : <FormComponent info={info} setInfo={setInfo} listPatients={listPatients}/>}

            <Patients patientDB={patientDB} isLoading={isLoading} listPatients={listPatients} updatePatient={updatePatient} deletePatient={deletePatient} />
        </div>
    );
};

export default Home;