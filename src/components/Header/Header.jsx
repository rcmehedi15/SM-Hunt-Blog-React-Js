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
                        <img className='nav-profile' src="https://cdn.dribbble.com/users/2978235/screenshots/16100886/media/934c41da908b06a0b2d61440cd361340.jpg?compress=1&resize=400x300&vertical=top" alt="" />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;