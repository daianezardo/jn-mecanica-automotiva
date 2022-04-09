import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CardServices ({service}) {

    return (
        <Card className="text-center shadow h-100">
        <Card.Img variant="top" src={service.image} />
            <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title as='h2' className='h5'>{service.name}</Card.Title>
                <Card.Text>{service.shortDescription}</Card.Text>
                <Button as={Link} to={`/servicos/${service.id}`} className="btn-services mt-auto">Ver mais</Button>
            </Card.Body>
        </Card>
    )
}