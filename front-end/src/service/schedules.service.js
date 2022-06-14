import { apiUrl, getAuthorizationHeaders } from "./Api.service"

export const createSchedules = async (schedulesData) => {
    
    const response = await fetch(`${apiUrl}/schedules`,{
        method: 'POST',
        body: JSON.stringify(schedulesData),   
        headers: {
            'content-type': 'application/json',
            ...getAuthorizationHeaders()
        }
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}