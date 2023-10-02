import React from "react";
import { create } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create(e));
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
