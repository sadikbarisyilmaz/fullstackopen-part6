import { useSelector } from "react-redux";

export const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const style = {
    textAlign: "center",
    marginTop: "1rem",
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <>{notification && <div style={style}>{notification}</div>}</>;
};
