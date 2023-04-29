import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/navbar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="gap-3 px-3 color-nav" fixed="top">
    <Container>
        <Navbar.Brand>
        <img
            src={logo}
            alt="logo"
            height="40"
            width="40"
        /> 
        {/* brand logo not be redirected */}
        </Navbar.Brand>
        <Navbar.Brand ><Link to="/" className='nav-text-head'>REFINDIA</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Item>
                <Nav.Link><Link to="/" className='nav-text'>HOME</Link></Nav.Link>
                
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/products" className='nav-text'>PRODUCTS</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/services" className='nav-text'>SERVICES</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/marketplace" className='nav-text'>MARKETPLACE</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/gallery" className='nav-text'>GALLERY</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/about" className='nav-text'>ABOUT US</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/contact" className='nav-text'>CONTACT US</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
          
  )
}

export default NavBar