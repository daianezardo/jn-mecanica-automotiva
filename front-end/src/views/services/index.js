import { Col, Container, Row } from "react-bootstrap"
import { CardServices } from "../../components/cardservices"
import { Layout } from "../../components/Layout"    
import { useEffect, useState } from "react"
import { Loading } from "../../components/loading"

export function ServicesView () {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
     useEffect(() => {
        fetch('http://localhost:3001/services')
        .then((response) => response.json())
        .then((data) => { 
            setServices(data)
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