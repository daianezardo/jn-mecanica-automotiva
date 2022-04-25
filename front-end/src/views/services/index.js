import { Alert, Col, Container, Row } from "react-bootstrap"
import { CardServices } from "../../components/cardservices"
import { Layout } from "../../components/Layout"    
import { useEffect, useState } from "react"
import { Loading } from "../../components/loading"
import { getServices } from "../../service/service.service"

export function ServicesView () {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState()
     useEffect(() => {
         const fetchServices = async () => {
            try {
             const data = await getServices()
             setServices(data)
            } catch {
                setErrorMessage('Falha ao buscar serviços. Recarregue a página.')
            }
            setLoading(false)
         }
         fetchServices()
    }, [])
    return (
        <Layout>
            <Container>
                <h1 className="text-center mt-4">Serviços</h1>
                {loading && (
                    <Loading />
                )}
                {errorMessage && (
                    <Alert variant="danger">{errorMessage}</Alert>
                )}
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