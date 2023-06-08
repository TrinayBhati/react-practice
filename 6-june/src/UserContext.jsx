import { createContext } from "react";

const UserContext = createContext();

const UserContextComp = ({ children }) => {
  const user = { id: 1, city: "Delhi" };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserContextComp;
