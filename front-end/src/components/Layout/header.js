import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo-jn.png'
import styled from "styled-components"

export function Header() {
    return (
      <header>
        <NavBarStyled expand='md'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={Logo} alt='JN Mecânica Automotiva' width={115} height={75} /> 
          </Navbar.Brand>
          <NavbarToggleStyled aria-controls='navbar-header' />
          <Navbar.Collapse id='navbar-header' >
          <Nav className='ms-auto'>
          <NavLinkStyled forwardedAs={Link} to='/'>Home</NavLinkStyled>
          <NavLinkStyled forwardedAs={Link} to='/servicos'>Serviços</NavLinkStyled>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </NavBarStyled>
      </header>
    )
  }

  const NavBarStyled = styled(Navbar)`
    background-color: #73F9C9;

  `
  const NavbarToggleStyled = styled(Navbar.Toggle)`
    background-color: #FFF;
    border: none;
  `
  
  const NavLinkStyled = styled(Nav.Link)`
    background-color: #FFF;
    border-radius: 3px;
    text-align: center;
    margin: 5px 0;
    box-shadow: 2px 2px 2px rgba(42, 69, 136, 0.3);
    @media (min-width: 768px) {
      margin: 0 5px;
    }
  `