import { useState } from "react"
import { Button, Form } from "react-bootstrap"


export function ScheduleForm () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    return (
        <>
        <h2>Formulário de agendamento</h2>
        <Form>
            <Form.Group controlId="schedule-name" className="mb-3">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control
                placeholder="Informe seu nome"
                value={name}
                onChange={event => setName(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="schedule-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control
                placeholder="Informe seu e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
            </Form.Group>
            <Button className="btn-services">Agendar</Button>
        </Form>
        </>
    )
}