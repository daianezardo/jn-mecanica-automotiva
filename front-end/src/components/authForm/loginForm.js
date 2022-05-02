import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function LoginForm () {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    }
    const handleSubmit = (event) => {
        event.preventDefauld()
    }
    return (
        <Form>
            <p className="h4">Login</p>
            <Form.Group className="mb-3" controlId="login-email">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control type="email" placeholder="exemplo@exemplo.com" value={formData.email} onChange={handleChange} name="email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="login-password">
                <Form.Label className="m-0">Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha de acesso" value={formData.password} onChange={handleChange} name="password" required/>
            </Form.Group>
            <Button type="submit" className="btn-services">Entrar</Button>
        </Form>
        
    )
}