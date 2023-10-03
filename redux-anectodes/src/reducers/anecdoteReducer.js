import { createSlice } from "@reduxjs/toolkit";
import { getAll, postAnecdote, vote } from "../services/anecdoteService";


const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const votedAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote
      )
    },
    appendAnecdotes(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return state.concat(action.payload)
    }
  },
});

export const { addVote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await postAnecdote(content)
    dispatch(setAnecdotes(newAnecdote))
  }
}

export const voteAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await vote(content)
    dispatch(addVote(newAnecdote))
  }
}


export default anecdoteSlice.reducer