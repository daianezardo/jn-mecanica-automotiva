import { useState } from "react"
import { Button, Form } from "react-bootstrap"


export function ScheduleForm () {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: ''
    })

    return (
        <>
        <h2>Formulário de agendamento</h2>
        <Form>
            <Form.Group controlId="schedule-name" className="mb-3">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control
                placeholder="Informe seu nome"
                value={formData.userName}
                onChange={event => setFormData({
                    ... formData,
                    userName: event.target.value
                })}
                />
            </Form.Group>
            <Form.Group controlId="schedule-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control
                placeholder="Informe seu e-mail"
                value={formData.userEmail}
                onChange={event => setFormData({
                    ... formData,
                    userEmail: event.target.value
                })}
                />
            </Form.Group>
            <Button className="btn-services">Agendar</Button>
        </Form>
        </>
    )
}