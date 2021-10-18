import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../images/idcore.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import LinkedIn from '../images/linkedin-logo.png';

function navbar() {
    return (
        <Navbar className='navbarPad' collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className='brand'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" style={{ color: "white" }}>Beranda</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }} >Layanan</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }}>Tentang Kami</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }} >Info</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }}>Portofolio</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }} >Price List</Nav.Link>
                    <Nav.Link href="#" style={{ color: "white" }}>Kontak</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="#">
                        <img
                            src={Instagram}
                            className="icon"
                        />
                    </Nav.Link>

                    <Nav.Link href="#">
                        <img
                            src={Facebook}
                            className="icon"
                        />
                    </Nav.Link>

                    <Nav.Link href="#">
                        <img
                            src={LinkedIn}
                            className="icon"
                        />
                    </Nav.Link>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default navbar
