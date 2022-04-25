export const createSchedules = async (schedulesData) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedules`,{
        method: 'POST',
        body: JSON.stringify(schedulesData),   
        headers: {
            'content-type': 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}