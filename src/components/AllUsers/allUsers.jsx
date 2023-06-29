import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material/';
import { deleteUser ,getallUsers } from '../../service/taskService';
import { Link } from 'react-router-dom';

const styles = {
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead:{
        '& > *':{
            background: '#000000',
            color:'#FFFFFF',
            fontSize: '16px'
        }
    },
    trow:{
        '& > *':{
            fontSize: '16px'
        }
    }
};

const AllUsers = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
         getUsers();
    }

    return (
        <Table style={styles.table}>
            <TableHead>
                <TableRow style={styles.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                user.map((data) => (
                    <TableRow style={styles.trow}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.username}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/edit/${data.id}`}>Edit</Button>
                            <Button variant="contained" color="error" style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}

export default AllUsers;
