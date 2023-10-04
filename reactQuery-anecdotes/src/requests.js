import axios from "axios";
const baseURL = "http://localhost:3000/anecdotes"

export const getAnecdotes = () =>
    axios.get(baseURL).then((res) => res.data)

export const createAnecdotes = (data) => {
    if (data.content.length < 5) {
        throw new Error('Anecdotes has to be longer than 5 letters!');

    } else {

        axios.post(baseURL, data).then((res) => res.data)
    }
}
export const voteAnecdotes = (data) =>
    axios.put(`${baseURL}/${data.id}`, data).then((res) => res.data)