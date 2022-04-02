import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../assets/img/logo-jn.png'

export function Header() {
    return (
      <header>
        <Navbar expand='md' className='main-navbar'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='JN Mecânica Automotiva' width={115} height={75} /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-header' />
          <Navbar.Collapse id='navbar-header' >
          <Nav className='ms-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/serviços'>Serviços</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </header>
    )
  }
  