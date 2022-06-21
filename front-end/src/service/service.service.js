import { apiUrl, getAuthorizationHeaders } from "./Api.service"

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

export const deleteService = async serviceId => {
    const response = await fetch(`${apiUrl}/services/${serviceId}`, {
        method: 'DELETE',
        headers: getAuthorizationHeaders()
    })
    if(!response.ok) {
        throw new Error('Response not ok.')
    }
}

export const createService = async serviceData => {
    const body = JSON.stringify(serviceData)
    const response = await fetch(`${apiUrl}/services`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
      }
    }
