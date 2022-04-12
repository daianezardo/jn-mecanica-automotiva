import { Col, Container, Row } from "react-bootstrap"
import { CardServices } from "../../components/cardservices"
import { Layout } from "../../components/Layout"    
import { useEffect, useState } from "react"

let services = []

export function ServicesView () {
    const [services, setServices] = useState([])
     useEffect(() => {
        fetch('http://localhost:3001/services')
        .then((response) => response.json())
        .then((data) => { 
            setServices(data)
         })
    }, [])
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