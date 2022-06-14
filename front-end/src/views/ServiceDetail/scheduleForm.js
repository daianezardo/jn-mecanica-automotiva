import { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { AuthForm } from "../../components/authForm"
import { createSchedules } from "../../service/schedules.service"
import { selectUser } from "../../store/User/User.selectors"


export function ScheduleForm ({ serviceId, onRegister }) {
    const user = useSelector(selectUser)
    const [submiting, setSubmiting] = useState(false)

    const handleInscription = async () => {
        try {
            
            setSubmiting(true)
            await createSchedules({
                name: user.name,
                email: user.email,
                serviceId: parseInt(serviceId),  
                userId: user.id
            })
            toast.success('Agendado com sucesso.')
            onRegister()
        } catch (err) {
            console.error(err)
            toast.error('Falha ao fazer agendamento. Tente novamente.')
        }
        setSubmiting(false)
    }


    return (
        <>
        <h2>Formulário de agendamento</h2>
        {user ? (
            <Button onClick={handleInscription} disabled={submiting}>Agendar</Button>
            ) : (
                <>
                <p>Faça login ou crie uma conta para agendar o serviço.</p>
                <AuthForm redirectAfterLogin={false} />
                </>
        )}
        </>
    )
}