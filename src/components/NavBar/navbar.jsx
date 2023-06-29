import React from 'react';
import { AppBar, Toolbar } from '@mui/material/';
import { NavLink } from 'react-router-dom';

const styles = {
    header: {
        backgroundColor: '#212121',
    },
    spacing :{
        paddingLeft: 20,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    }
  };

const Navbar = () => {
    return (
        <AppBar style={styles.header} position="static">
            <Toolbar >
                <NavLink to="/" style={styles.spacing}> React JS Crud</NavLink>
                <NavLink to="all" style={styles.spacing}> All Users</NavLink>
                <NavLink to="add" style={styles.spacing}> Add Users</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;