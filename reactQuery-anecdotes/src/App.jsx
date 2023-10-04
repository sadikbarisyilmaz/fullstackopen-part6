import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery } from "@tanstack/react-query";
import { getAnecdotes, voteAnecdotes } from "./requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import NotificationContext from "./NotificationContext";

const App = () => {
  const [notification, dispatch] = useContext(NotificationContext);

  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: 1,
  });

  const voteMutation = useMutation(voteAnecdotes, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });

  if (result.isLoading) {
    return <div>loading data...</div>;
  }
  if (!result.isSuccess) {
    return <div>anecdote service not available due to problems in server.</div>;
  }

  const anecdotes = result.data;

  const handleVote = (anecdote) => {
    console.log("vote");
    voteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
    dispatch({ type: "vote", message: `anecdote "${anecdote.content}" voted` });
    setTimeout(() => {
      dispatch({ type: "vote", message: null });
    }, 5000);
  };

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
