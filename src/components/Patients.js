import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from '@mui/material/styles';


const Patients = ({patientDB, isLoading, updatePatient, deletePatient}) => {
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <div className="patients">
            <h2 className="header" style={{backgroundColor:"#4DC0B5"}}>Patients</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>Id</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>FirstName</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>LastName</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>BirthDate</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>Edit</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <StyledTableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell colSpan={6} align="center">
                                    Loading
                                </TableCell>
                            </StyledTableRow>
                        ) : patientDB?.length ? (
                            patientDB?.map((item) =>
                                <StyledTableRow key={item.id}>
                                    <TableCell align="center"> {item.id} </TableCell>
                                    <TableCell align="center"> {item.firstName} </TableCell>
                                    <TableCell align="center"> {item.lastName} </TableCell>
                                    <TableCell align="center"> {item.birthDate.slice(0, 10)} </TableCell>
                                    <TableCell align="center" onClick={() => updatePatient(item.id)}>
                                        <EditIcon sx={{cursor:"pointer"}}/>
                                    </TableCell>
                                    <TableCell align="center" onClick={()=>deletePatient(item.id)}>
                                        <DeleteIcon sx={{cursor:"pointer"}}/>
                                    </TableCell>
                                </StyledTableRow>
                            )

                        ) : (
                            <StyledTableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell colSpan={6} align="center">
                                    No INFO
                                </TableCell>
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default Patients;