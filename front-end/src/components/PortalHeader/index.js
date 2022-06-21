import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function PortalHeader ({ title, buttonText, buttonLink}) {
    return (
        <div className="d-sm-flex align-items-center mt-4 mb-2">
            <h1 className="mb-0">{title}</h1>
            <Button className="ms-sm-3 btn-services" as={Link} to={buttonLink} size='sm'>{buttonText}</Button>
        </div>
    )
}