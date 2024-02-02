import { useSelector } from "react-redux";
import RestaurantMenuCardItem from "./RestaurantMenuCardItem";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <div className="pt-20 w-6/12 m-auto">
      {cartItems.map((cartItem) => (
        <RestaurantMenuCardItem card={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
