import { useEffect, useState } from "react";
import { LayoutPortal } from "../../assets/layoutportal";
import { PortalHeader } from "../../components/PortalHeader";
import { getServices } from "../../service/service.service";
import { toast } from "react-toastify"
import { Loading } from "../../components/loading"
import { TableServices } from "./TableServices";


export function AdminServiceView () {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchServices = async () => {
            try {
               const data = await getServices()
               setServices(data)
            } catch {
                toast.error('Falha ao buscar serviços. Recarregue a página.')
            }
            setLoading(false)
        }
        fetchServices()
    }, [])
    return (
        <LayoutPortal>
            <PortalHeader
            title='Serviços cadastrados'
            buttonText='Novo serviço'
            buttonLink='/portal/servicos/cadastro'
            />
            {loading && <Loading/>}
            <TableServices services={services}/>
        </LayoutPortal>
    )
}