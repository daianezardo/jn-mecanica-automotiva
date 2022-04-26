import { Button, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Car from "../../assets/img/car.jpg"
import { Link } from "react-router-dom";
import styled from "styled-components"


export function HomeView() {
    return (
      <Layout>
          <Container>
        <BannerHome className='shadow border p-4 p-md-5 git my-3 d-md-flex align-items-center'>
          <div>
     <h1>Bem vindo(a) à JN!</h1>
     <p>Conheça nossos serviços</p>
     <p>Faça seu agendamento agora mesmo.</p>
     <Button as={Link} to='/servicos' className='text-uppercase btn-services'>Serviços</Button>
          </div>
          <div>
     <img src={Car} alt='JN Mecânica Automotiva' width={360} height={225} className='img-fluid'/>
          </div>
        </BannerHome>
        </Container>
      </Layout>
    )
  }

  const BannerHome = styled.div`
    & h1 {
    color: #73F9C9;
    }
    & p {
    font-size: 1.125rem;
    }

    & > div {
      flex: 1;
    }


  `