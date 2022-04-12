import { Alert, Col, Container, Row } from "react-bootstrap"
import { CardServices } from "../../components/cardservices"
import { Layout } from "../../components/Layout"    
import { useEffect, useState } from "react"
import { Loading } from "../../components/loading"

export function ServicesView () {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, SetErrorMessage] = useState()
     useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/services`)
        .then((response) => response.json())
        .then((data) => { 
            setServices(data)
         })
         .catch(() => {
             SetErrorMessage('Falha ao buscar serviços. Recarregue a página.')
         })
         .finally(() => {
            setLoading(false)
         })
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