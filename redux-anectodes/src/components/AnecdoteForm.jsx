import { useDispatch } from "react-redux";
import { createAnectode } from "../reducers/anecdoteReducer";
import {
  clearNotification,
  createNotification,
} from "../reducers/notificationReducer";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAnectode(e.target.content.value));
    dispatch(createNotification(`Anectode "${e.target.content.value}" added.`));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input name="content" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
