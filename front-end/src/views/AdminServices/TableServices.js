import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteService } from "../../service/service.service";

export function TableServices ({ services, onDeleteService }) {
    const handleClick = async (service) => {
        try {
            await deleteService(service.id)
            await onDeleteService()
        } catch {
            toast.error('Falha ao deletar serviço. Tente novamente.')
        }
    }
    return (
        <Table striped hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {services.map(service => (
                    <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                    <td className="d-grid gap-1 d-sm-table-cell">
                        <Button size="sm" as={Link} to={`/portal/servicos/${service.id}`}className="btn-services">Editar</Button>
                        <Button size="sm" onClick={() => handleClick(service)} className="btn-services ms-sm-1">Deletar</Button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}