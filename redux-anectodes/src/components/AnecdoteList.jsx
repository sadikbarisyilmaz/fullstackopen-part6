import { useDispatch, useSelector } from "react-redux";
import {
  clearNotification,
  createNotification,
} from "../reducers/notificationReducer";
import { voteAnecdote } from "../reducers/anecdoteReducer";

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleVote = (id) => {
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);

    dispatch(voteAnecdote(votedAnecdote));

    dispatch(createNotification(`you voted for "${votedAnecdote.content}"`));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };
  console.log(anecdotes);
  return (
    <div>
      {anecdotes
        .filter((anecdote) =>
          anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};
