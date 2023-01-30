import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img src='/logo.svg' alt='React Query' width='200' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'></Nav>
                        <Nav>
                            <NavLink className={"nav-link"} to='/'>
                                Basic
                            </NavLink>
                            <NavLink className={"nav-link"} to='/paginated'>
                                Paginated
                            </NavLink>
                            <NavLink className={"nav-link"} to='/infinite'>
                                Infinite
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigationbar;
