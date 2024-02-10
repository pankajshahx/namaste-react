import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuCardItem from "./RestaurantMenuCardItem";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <div className="pt-20 w-6/12 m-auto">
      <button
        onClick={handleClearCart}
        className="p-2 bg-red-600 text-white rounded-sm"
      >
        Clear
      </button>
      {cartItems.map((cartItem) => (
        <RestaurantMenuCardItem card={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
