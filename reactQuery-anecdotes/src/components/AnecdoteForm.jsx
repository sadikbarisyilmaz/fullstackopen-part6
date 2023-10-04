import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdotes } from "../requests";
import { useContext } from "react";
import NotificationContext from "../NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const [notification, dispatch] = useContext(NotificationContext);

  const anecdoteMutation = useMutation(createAnecdotes, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
    onError: (err) => {
      console.log(err);
      dispatch({
        type: "error",
        message: err.message,
      });
      setTimeout(() => {
        dispatch({ type: "error", message: null });
      }, 5000);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = {
      content: event.target.anecdote.value,
      votes: 0,
    };
    event.target.anecdote.value = "";
    anecdoteMutation.mutate(content);
    dispatch({
      type: "create",
      message: `anecdote "${content.content}" created`,
    });
    setTimeout(() => {
      dispatch({ type: "create", message: null });
    }, 5000);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
