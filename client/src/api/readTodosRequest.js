const API_URL = `http://localhost:8800`

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MDUzMzI5OH0.oDYCgm0gARtvfK25AeARD7IoAI7Kb0l3xfvI5YpCMpY`

export default () => {
    return fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
    })
    .then(res=> res.json())
}