import { Container, Navbar, Nav } from 'react-bootstrap'
import Logo from './assets/img/logo-jn.png'


function Header() {
  return (
    <header>
      <Navbar expand='md' className='main-navbar'>
      <Container>
        <Navbar.Brand href='/'>
          <img src={Logo} alt='JN Mecânica Automotiva'/> 
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


function HomeView() {
  return (
    <>
    <Header />
    <p>Conteúdo</p>
    <p>Footer</p>
    </>
  )

}

function App() {
  return <HomeView />
}

export default App;
