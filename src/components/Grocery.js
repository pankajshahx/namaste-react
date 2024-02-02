import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4">
      <p className="font-bold">User: {currentUser}</p>
      <h1>Hello Welcome to Grocery Items</h1>
    </div>
  );
};

export default Grocery;
