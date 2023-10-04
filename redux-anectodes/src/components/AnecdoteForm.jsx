import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  clearNotification,
  createNotification,
} from "../reducers/notificationReducer";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = "";
    dispatch(createAnecdote(content));

    dispatch(createNotification(`Anecdote "${content.content}" added.`));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="content" required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
