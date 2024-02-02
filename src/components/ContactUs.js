import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ContactUs = () => {
  const { currentUser, setUserName } = useContext(UserContext);
  return (
    <div className="m-4 p-4">
      <div>User: {currentUser}</div>
      <h1>Contact Us Page</h1>
      <label>User Name</label>
      <input
        className="p-2 m-2 w-72 border border-solid"
        type="text"
        value={currentUser}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default ContactUs;
