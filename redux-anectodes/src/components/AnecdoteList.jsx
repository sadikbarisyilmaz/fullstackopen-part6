import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anectodes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // console.log(anecdotes);
  // console.log("filter :", filter);

  const handleVote = (id) => {
    dispatch(vote(id));
  };
  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .filter((anectode) =>
          anectode.content.toLowerCase().includes(filter.toLowerCase())
        )
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
