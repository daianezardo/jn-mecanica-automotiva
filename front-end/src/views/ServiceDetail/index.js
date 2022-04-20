import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/loading";
import { NotFoundView } from "../NotFound";
import { ScheduleForm } from "./scheduleForm";
import { Schedules } from "./schedules";


export function ServiceDetailView () {
    const { id } = useParams() 
    const [service, setService] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, SetErrorMessage] = useState()
    useEffect(() => {
        const fetchCourse = async () => {      
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/services/${id}?_embed=schedules`)
                if (!response.ok) {
                    throw new Error('Response not ok.')
                }
                const data = await response.json()
                setService(data)
                setLoading(false)
            } catch (err) {
                const message = err.message === 'Response not ok.' 
                ? '404' 
                : 'Falha ao buscar informações do serviço. Recarregue a página'
                SetErrorMessage(message)
                setLoading(false)
            }
        }

        fetchCourse()   
    }, [id])
    if (loading) {
        return <Loading />
    }
    if (errorMessage === '404') {
        return <NotFoundView /> 
    }
    return (
        <Layout>
            <Container className="service-detail-container">
            {errorMessage ? (
                <Alert variant="danger" className="mt-3">{errorMessage}</Alert>
            ) : (
                <>
                <h1 className="text-center mt-4">{service.name}</h1>
                <p>{service.description}</p>
                <Schedules schedules={service.schedules}/>
                <ScheduleForm/>
                </>
            )}
            </Container>
        </Layout>
    )
}