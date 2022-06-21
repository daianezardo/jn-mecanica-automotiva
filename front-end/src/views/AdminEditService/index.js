import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../assets/layoutportal";
import { Loading } from "../../components/loading";
import { UpsertServiceForm } from "../../components/UpsertServiceForm";
import { getServiceById, updateService } from "../../service/service.service";

export function AdminEditService () {
    const { id } = useParams()
  const [service, setService] = useState()
  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceData = await getServiceById(id)
        setService(serviceData)
      } catch {
        toast.error('Falha ao buscar dados do serviço. Recarregue a página.')
      }
    }
    fetchService()
  }, [id])
  const navigate = useNavigate()
  const handleSubmit = async (formData) => {
    try {
      await updateService(id, formData)
      toast.success('Serviço alterado com sucesso.')
      navigate('/portal/servicos')
    } catch {
      toast.error('Falha ao alterar serviço. Tente novamente.')
    }
  }
    return (
        <LayoutPortal>
        <h1 className="mt-4">Editar serviço</h1>
        {service ? (
        <UpsertServiceForm
          initialValue={{
            name: service.name,
            shortDescription: service.shortDescription,
            description: service.description,
            image: service.image
          }}
          buttonLabel='Alterar'
          onSubmit={handleSubmit}
        />
      ) : (
        <Loading />
      )}
        </LayoutPortal>
    )
}