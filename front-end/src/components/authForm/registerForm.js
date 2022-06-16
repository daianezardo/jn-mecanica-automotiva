import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { createUser } from "../../service/users.service";
import { userLogin } from "../../store/User/User.action";
import { toast } from "react-toastify";


export function RegisterForm ({ redirectAfterLogin }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const userData = await createUser(formData)
            dispatch(userLogin(userData))
            if (redirectAfterLogin) {
                navigate('/portal')
            }
            
        } catch (error) {
            const message = error.message === 'Email already exists'
            ? 'Este e-mail já está em uso.'
            : 'Falha ao fazer cadastro. Tente novamente.'
            toast.error(message)     
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <p className="h4">Cadastre-se</p>
            <Form.Group className="mb-3" controlId="register-nome">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control type="text" placeholder="Informe seu nome" value={formData.name} onChange={handleChange} name="name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="register-email">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control type="email" placeholder="exemplo@exemplo.com" value={formData.email} onChange={handleChange} name="email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="register-password">
                <Form.Label className="m-0">Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha de acesso" value={formData.password} onChange={handleChange} name="password" required minLength={4}/>
            </Form.Group>
            <Button type="submit" className="btn-services">Criar conta</Button>
        </Form>
        
    )
}