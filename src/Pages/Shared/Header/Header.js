import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <img className="img-fluid logo" src="" alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/allProducts">Shampoos Available</Nav.Link>

                        {user?.email &&
                            <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>

                        }

                        {/* <Nav.Link as={HashLink} to="/contact">Contact Us</Nav.Link> */}

                        {user?.email ?
                            <Button onClick={logOut} variant="info">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/registration">Login</Nav.Link>}
                        <Navbar.Text className="text-dark">
                            Signed in as: <Link to="/registration" className="text-decoration-none text-success fw-bold">{user?.displayName || user.email}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;