import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // 👈 importante para navegación interna

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-success navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Huerto Hogar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#frutas">Frutas Frescas</NavDropdown.Item>
              <NavDropdown.Item href="#verduras">Verduras Orgánicas</NavDropdown.Item>
              <NavDropdown.Item href="#organicos">Productos Orgánicos</NavDropdown.Item>
              <NavDropdown.Item href="#lacteos">Productos Lácteos</NavDropdown.Item>
            </NavDropdown>

            {/* 👇 NUEVO ENLACE AL ADMIN */}
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
