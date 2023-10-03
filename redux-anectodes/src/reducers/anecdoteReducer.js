import { combineReducers } from 'redux'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const vote = (id) => {
  return {
    type: "vote",
    payload: id
  }
}
export const create = (content) => {
  return {
    type: "create",
    payload: content
  }
}
export const filter = (filter) => {
  return {
    type: "filter",
    payload: filter
  }
}

const filterReducer = (state = "", action) => {
  // console.log('action', action)

  switch (action.type) {
    case 'filter':
      return action.payload
    default:
      return state
  }
}

const anectodeReducer = (state = initialState, action) => {
  // console.log('action', action)

  if (action.type === "vote") {

  } else if (action.type === "create") {
  }

  switch (action.type) {
    case 'vote':
      let selectedAnectode = state.filter(anectode => anectode.id === action.payload)[0]
      let rest = state.filter(anectode => anectode.id !== action.payload)
      return rest.concat([{ ...selectedAnectode, votes: selectedAnectode.votes + 1 }])
    case 'create':
      return state.concat([{ content: action.payload, votes: 0, id: getId() }])
    default: return state
  }



}

const reducer = combineReducers({
  anectodes: anectodeReducer,
  filter: filterReducer
})

export default reducer