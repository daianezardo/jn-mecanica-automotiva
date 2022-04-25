import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { createSchedules } from "../../service/schedules.service"

const initialFormData = {
    userName: '',
    userEmail: ''
}

export function ScheduleForm ({ serviceId, onRegister }) {
    const [showSuccess, setShowSuccess] = useState(false)
    const [submiting, setSubmiting] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setErrorMessage(undefined)
            setSubmiting(true)
            await createSchedules({
                name: formData.userName,
                email: formData.userEmail,
                serviceId: parseInt(serviceId)  
            })
           
            setShowSuccess(true)
            setFormData(initialFormData)
            onRegister()
        } catch (err) {
            console.error(err)
            setErrorMessage('Falha ao fazer agendamento. Tente novamente.')
        }
        setSubmiting(false)
    }


    return (
        <>
        <h2>Formulário de agendamento</h2>
        {showSuccess && (
            <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Agendado com sucesso</Alert>
        )}
        {errorMessage && (
            <Alert variant="danger">{errorMessage}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="schedule-name" className="mb-3">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control
                placeholder="Informe seu nome"
                value={formData.userName}
                onChange={handleChange}
                name="userName"
                required
                />
            </Form.Group>
            <Form.Group controlId="schedule-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control
                type="email"
                placeholder="Informe seu e-mail"
                value={formData.userEmail}
                onChange={handleChange}
                name="userEmail"
                required
                />
            </Form.Group>
            <Button type="submit" className="btn-services" disabled={submiting}>Agendar</Button>
        </Form>
        </>
    )
}