import { apiUrl } from "./Api.service"

export const getServices = async () => {
    const response = await fetch(`${apiUrl}/services`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const getServiceById = async (serviceId) => {
    const response = await fetch(`${apiUrl}/services/${serviceId}?_embed=schedules`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}