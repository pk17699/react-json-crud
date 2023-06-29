import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@mui/material/';
import { editUser, getallUsers } from '../../service/taskService';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    username : "",
    email: "",
    phone: "",
}

const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const navigate = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
       navigate('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Update User Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} autoComplete="off"/>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={username} autoComplete="off"/>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email} autoComplete="off"/>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} autoComplete="off"/>
                </FormControl>
                <br />
                <Box my={3}>
                    <Button variant="contained" onClick={() => editUserDetails() } color="primary" align="center">Update User</Button>
                    <Button onClick={()=>  navigate('/all')} variant="contained" color="error" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default EditUser;