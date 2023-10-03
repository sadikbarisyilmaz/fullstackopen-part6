import { useDispatch, useSelector } from "react-redux";
import { voteAnectode } from "../reducers/anecdoteReducer";
import {
  clearNotification,
  createNotification,
} from "../reducers/notificationReducer";

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anectodes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  console.log(anecdotes);
  // console.log("filter :", filter);

  const handleVote = (id) => {
    dispatch(voteAnectode(id));
    dispatch(
      createNotification(
        `you voted for "${
          anecdotes.find((anectode) => anectode.id === id).content
        }"`
      )
    );
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      {anecdotes
        .filter((anectode) =>
          anectode.content.toLowerCase().includes(filter.toLowerCase())
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
