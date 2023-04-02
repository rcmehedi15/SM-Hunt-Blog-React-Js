import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (
        <Navbar>
            <Container className='nav-bar'>
                <Navbar.Brand className='navbar-brand' href="#home"> <span className='text-primary'>S</span><span className='text-danger'>M</span> Hunt</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <img className='nav-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxB_Qx33TdUD5_5sAukAa4KoFSktEd7Qjr5zc_H9fo&s" alt="" />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;