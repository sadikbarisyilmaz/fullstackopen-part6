import { useDispatch } from "react-redux";
import { filter } from "../reducers/anecdoteReducer";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    // console.log(event.target.value);
    dispatch(filter(event.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};
