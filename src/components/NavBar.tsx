import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Home, Person, Work, ContactMail } from '@mui/icons-material';
import NavButton from "./NavButton";

const NavBar: React.FC = () => {
    return (
        <AppBar position="sticky" style={{ backgroundColor: '#333' }}>
            <Toolbar 
                sx={{ 
                    justifyContent: 'space-between', 
                    margin: '0 auto',
                    width: { xs: '75%', md: '50%' }
                }}
            >
                <NavButton color="inherit" label="Home" icon={<Home />} to="/" end />
                <NavButton color="inherit" label="About" icon={<Person />} to="/about" />
                <NavButton color="inherit" label="Projects" icon={<Work />} to="/projects" />
                <NavButton color="inherit" label="Contact" icon={<ContactMail />} to="/contact" />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;