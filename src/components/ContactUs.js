import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../utils/contactsSlice";

const ContactUs = () => {
  const contactList = useSelector((store) => store.contacts.items);
  console.log(contactList);
  const { currentUser, setUserName } = useContext(UserContext);
  const dispatch = useDispatch();

  // State for toaster message
  const [toasterMessage, setToasterMessage] = useState("");

  // Dispatch the addContact action when currentUser is updated
  useEffect(() => {
    if (currentUser) {
      dispatch(addContact(currentUser));
    }
  }, [currentUser, dispatch]);

  const handleSubmit = () => {
    if (currentUser) {
      // Show toaster message
      setToasterMessage("Email received! Thank you for submitting.");

      // Clear input field after submission
      setUserName("");

      // Hide toaster message after 3 seconds
      setTimeout(() => {
        setToasterMessage("");
      }, 3000);
    } else {
      // Show warning if email is empty
      setToasterMessage("Please enter a valid email.");
      setTimeout(() => {
        setToasterMessage("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-center text-gray-600 mb-4">
          We'd love to hear from you! Please update your user name below.
        </p>

        {/* Toaster Message */}
        {toasterMessage && (
          <div
            className={`mb-4 p-3 rounded-lg text-center ${
              toasterMessage === "Email received! Thank you for submitting."
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {toasterMessage}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-800 text-sm font-semibold mb-2"
          >
            User Name
          </label>
          <input
            id="username"
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            value={currentUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit} // Submit button triggers handleSubmit
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
