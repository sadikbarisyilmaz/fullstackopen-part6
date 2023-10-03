import axios from "axios"
const baseURL = "http://localhost:3000/anecdotes"


export const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data

}

export const postAnecdote = async (data) => {
    console.log(data);
    const newAnecdote = {
        content: data,
        votes: 0
    }
    const response = await axios.post(baseURL, newAnecdote)
    console.log(response.data);
    return response.data

}

export const vote = async (anecdote) => {
    const data = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(`${baseURL}/${anecdote.id}`, data)
    return response.data
}