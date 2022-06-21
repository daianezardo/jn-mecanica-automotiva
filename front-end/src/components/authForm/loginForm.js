import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../service/users.service";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/User/User.action";

export function LoginForm ({ redirectAfterLogin }) {
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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
           const userData = await login(formData)
           // Enviar para o redux
           dispatch(userLogin(userData))    
           if (redirectAfterLogin) {
            navigate('/portal')
           }
           
        } catch (error) {
            const message = error.message === 'Credentials invalid.'
            ? 'E-mail ou senha inválidos.'
            : 'Falha ao fazer login. Tente novamente.'
            console.error(error)
            toast.error(message)
        }
        
    }
    return (
        <Form onSubmit={handleSubmit}>
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