import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/loading";
import { getServiceById } from "../../service/service.service";
import { NotFoundView } from "../NotFound";
import { ScheduleForm } from "./scheduleForm";
import { Schedules } from "./schedules";
import styled from "styled-components"


export function ServiceDetailView () {
    const { id } = useParams() 
    const [service, setService] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, SetErrorMessage] = useState()
    const fetchService = useCallback(async () => {      
        try {
            const data = await getServiceById(id)
            setService(data)
            setLoading(false)
        } catch (err) {
            const message = err.message === 'Response not ok.' 
            ? '404' 
            : 'Falha ao buscar informações do serviço. Recarregue a página'
            SetErrorMessage(message)
            setLoading(false)
        }
    }, [id])
    
    useEffect(() => {
        fetchService()   
    }, [fetchService])
    if (loading) {
        return <Loading />  
    }
    if (errorMessage === '404') {
        return <NotFoundView /> 
    }
    return (
        <Layout>
            <ContainerStyled>
            {errorMessage ? (
                <Alert variant="danger" className="mt-3">{errorMessage}</Alert>
            ) : (
                <>
                <h1 className="text-center mt-4">{service.name}</h1>
                <p>{service.description}</p>
                <Schedules schedules={service.schedules}/>
                <ScheduleForm serviceId={id} onRegister={fetchService}/>
                </>
            )}
            </ContainerStyled>
        </Layout>
    )
}

const ContainerStyled = styled(Container)`
    max-width: 900px;
`