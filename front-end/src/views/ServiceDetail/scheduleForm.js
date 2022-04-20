import { useState } from "react"
import { Button, Form } from "react-bootstrap"


export function ScheduleForm () {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: ''
    })

    const handleChange = (event) => {
        setFormData({
            ... formData,
            [event.target.name]: event.target.value 
        })
    }

    return (
        <>
        <h2>Formulário de agendamento</h2>
        <Form>
            <Form.Group controlId="schedule-name" className="mb-3">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control
                placeholder="Informe seu nome"
                value={formData.userName}
                onChange={handleChange}
                name="userName"
                />
            </Form.Group>
            <Form.Group controlId="schedule-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control
                placeholder="Informe seu e-mail"
                value={formData.userEmail}
                onChange={handleChange}
                name="userEmail"
                />
            </Form.Group>
            <Button className="btn-services">Agendar</Button>
        </Form>
        </>
    )
}