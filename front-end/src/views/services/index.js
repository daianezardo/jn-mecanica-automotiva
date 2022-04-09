import { Col, Container, Row } from "react-bootstrap"
import { CardServices } from "../../components/cardservices"
import { Layout } from "../../components/Layout"    
import Freio from "../../assets/img/freio.png"
import Balanceamento from '../../assets/img/balanceamento.jpg'
import Troca from '../../assets/img/troca-de-oleo.jpg'
import Injection from '../../assets/img/injection.jpg'
import Sistem from '../../assets/img/sistem.jpg'
import Mecanic from '../../assets/img/mecanica.jpg'

const services = [
    {
        image: Freio,
        id: 1,
        name: 'Inspeção de Freios',
        shortDescription: 'Avaliação do estado do veículo por meio de equipamentos.'
    },
    {
        image: Balanceamento,
        id: 2,
        name: 'Alinhamento e Balanceamento',
        shortDescription: 'Alinhamento e balanceamento dos pneus.'
    },
    {
        image: Troca,
        id: 3,
        name: 'Troca de Óleo',
        shortDescription: 'Realização do processo de troca de óleo e filtro.'
    },
    {
        image: Injection,
        id: 4,
        name: 'Injeção Eletrônica',
        shortDescription: 'Especialista em injeção eletrônica moderna e convencionais.'
    },
    {
        image: Sistem,
        id: 5,
        name: 'Sistema de Exaustão',
        shortDescription: 'Escapamento original e modificados.'
    },
    {
        image: Mecanic,
        id: 6,
        name: 'Reparo de Motor',
        shortDescription: 'Diagnóstico de motores modernos, retíficas completas.'
    }
]

export function ServicesView () {
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Serviços</h1>
                <Row>
                    {services.map (service => {
        return (
            <Col Key={service.id} className='mb-4' xs={6} md={4} lg={3}>
                <CardServices service={service}/>
            </Col>
        )
    })}
                </Row>
            </Container>
        </Layout>
    )
}