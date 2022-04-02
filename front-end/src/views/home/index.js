import { Button, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Car from "../../assets/img/car.jpg"
import { Link } from "react-router-dom";


export function HomeView() {
    return (
      <Layout>
          <Container>
        <div className='shadow border p-4 p-md-5 git my-3 banner-home d-md-flex align-items-center'>
          <div>
     <h1>Bem vindo(a) à JN!</h1>
     <p>Conheça nossos serviços</p>
     <p>Faça seu agendamento agora mesmo.</p>
     <Button as={Link} to='/serviços' className='text-uppercase btn-services'>Serviços</Button>
          </div>
          <div>
     <img src={Car} alt='JN Mecânica Automotiva' width={360} height={225} className='img-fluid'/>
          </div>
        </div>
        </Container>
      </Layout>
    )
  }