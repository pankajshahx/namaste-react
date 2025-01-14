import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuCardItem from "./RestaurantMenuCardItem";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  const cartItems = useSelector((store) => store?.cart?.items);
  const cartItemsArray = Object.values(cartItems);

  return (
    <div className="pt-20 w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-5/12 m-auto relative">
      <button
        onClick={handleClearCart}
        className="absolute top-4 right-4 bg-red-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-700 transform transition-all duration-300"
      >
        Clear Cart
      </button>

      {cartItemsArray.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">Your cart is empty.</p>
      ) : (
        cartItemsArray.map((cartItem) => (
          <RestaurantMenuCardItem key={cartItem.id} card={cartItem} />
        ))
      )}
    </div>
  );
};

export default Cart;
