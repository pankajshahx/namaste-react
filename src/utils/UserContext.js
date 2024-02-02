import { createContext } from "react";

const UserContext = createContext({
  currentUser: "Default User",
});
export default UserContext;
