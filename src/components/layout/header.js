import React from 'react';
import {Container, Nav, NavDropdown, Navbar, Button} from 'react-bootstrap';
import Logo from '../../assets/home/images/efisens-logo-rvb-2.png'


export default function Header() {
    return (
        <Container fluid className="border-bottom border-light">
            <Navbar bg="none" expand="lg">
                <Navbar.Brand href="/"><img src={Logo} alt="Efisens Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="">
                        <Nav.Link href="#">Qui sommes nous?</Nav.Link>
                        <NavDropdown title="Nos expertises" id="expertise-dropdown">
                            <NavDropdown.Item href="/">Cloud</NavDropdown.Item>
                            <NavDropdown.Item href="/">Modern Workplace</NavDropdown.Item>
                            <NavDropdown.Item href="/">Sécurité</NavDropdown.Item>
                            <NavDropdown.Item href="/">ServiceManage</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Nos partenariats</Nav.Link>
                        <Nav.Link href="#">Efisens Clic&Shop</Nav.Link>
                        <Nav.Link href="#">Efisens Lab</Nav.Link>
                        <Nav.Link href="#">Carrières</Nav.Link>
                        <Nav.Link href="#">Nous contacter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button className="bg-orange border-0 text-white font-weight-bold">Acces client</Button>
            </Navbar>
        </Container>
    );
}
