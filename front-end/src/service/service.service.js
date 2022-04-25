export const getServices = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/services/`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const getServiceById = async (serviceId) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/services/${serviceId}?_embed=schedules`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}