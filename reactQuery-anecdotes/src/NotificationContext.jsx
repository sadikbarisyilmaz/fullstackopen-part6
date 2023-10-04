import { createContext, useReducer } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "vote":
      return (state = action.message);
    case "create":
      return (state = action.message);
    case "error":
      return (state = action.message);
    default:
      return state;
  }
};

const NotificationContext = createContext();
const initialMessage = "";
export const NotificationContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(
    notificationReducer,
    initialMessage
  );

  return (
    <NotificationContext.Provider value={[counter, counterDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
