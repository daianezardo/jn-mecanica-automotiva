import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../assets/layoutportal'
import { UpsertServiceForm } from '../../components/UpsertServiceForm'
import { createService } from '../../service/service.service'

export function AdminAddService () {
    const navigate = useNavigate()
    const handleSubmit = async (formData) => {
        try {
            await createService(formData)
            toast.success('Serviço cadastrado com sucesso.')
            navigate('/portal/servicos')
        } catch {
            toast.error('Falha ao cadastrar serviço. Tente novamente.')
        }
    }
    return (
        <LayoutPortal>
            <h1 className='mt-4'>Novo serviço</h1>
            <UpsertServiceForm onSubmit={handleSubmit}/>
        </LayoutPortal>
    )
}