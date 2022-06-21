import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteService } from "../../service/service.service";

export function TableServices ({ services, onDeleteService }) {
    const [serviceToDelete, setServiceToDelete] = useState()
    const hideModal = () => setServiceToDelete(undefined)
    const handleClick = async (service) => {
        setServiceToDelete(service)
    }
    const handleDelete = async () => {
        try {
            await deleteService(serviceToDelete.id)
            await onDeleteService()
            toast.success('Serviço deletado com sucesso.')
        } catch {
            toast.error('Falha ao deletar serviço. Tente novamente.')
        }
        hideModal()
    }
    return (
        <>
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
        <Modal show={serviceToDelete} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Tem certeza?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Ao clicar em confirmar, o serviço <strong>{serviceToDelete?.name}</strong> será excluído. Deseja realmente deletar o serviço?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
                <Button variant="danger" onClick={handleDelete}>Deletar serviço</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}