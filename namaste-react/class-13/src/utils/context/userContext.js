import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Trinay",
    email: "dummy@gmail.com",
  },
  query: "",
});

UserContext.displayName = "UserContext";

export default UserContext;
