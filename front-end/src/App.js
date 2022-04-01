import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import Logo from './assets/img/logo-jn.png'
import Car from './assets/img/car.jpg'

function Header() {
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

function Footer () {
  return (
    <footer className='footer text-center text-black py-2 mt-4'>
    <p className='m-0'>Todos os direitos reservados à JN Mecânica Automotiva.</p>
    </footer>
  )
}


function HomeView() {
  return (
    <>
    <Header />
    <main>
      <Container>
      <div className='shadow border p-4 my-3 banner-home'>
   <h1>Bem vindo(a) à JN!</h1>
   <p>Conheça nossos serviços</p>
   <p>Faça seu agendamento agora mesmo.</p>
   <Button className='text-uppercase btn-services'>Serviços</Button>
   <img src={Car} alt='JN Mecânica Automotiva' width={360} height={225} className='img-fluid'/>
      </div>
      </Container>
    </main>
    <Footer />
    </>
  )
}

function App() {
  return <HomeView />
}

export default App;
