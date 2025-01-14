import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6">
      <div className="bg-green-100 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-6">
          Grocery Items
        </h1>
        <p className="font-medium text-center text-green-500 mb-4">
          Hello {currentUser}, welcome to the grocery section.
        </p>
        <div className="bg-green-500 text-white text-xl text-center p-4 rounded-lg shadow-md">
          Coming Soon!
        </div>
      </div>
    </div>
  );
};

export default Grocery;
