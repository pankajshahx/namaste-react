import { addItem, removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const RestaurantMenuCardItem = ({ card }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state) => state.cart.items[card?.info?.id]?.quantity || 0
  );

  const handleOnAddItem = () => {
    dispatch(addItem(card));
  };

  const handleIncrement = () => {
    dispatch(addItem(card));
  };

  const handleDecrement = () => {
    dispatch(removeItem(card));
  };

  return (
    <div className="flex w-full justify-between border-b-2 py-4">
      <div className="flex-1 me-4">
        <p className="font-bold">
          {card?.info?.name} ₹
          {(card?.info?.price || card?.info?.defaultPrice) / 100}
        </p>
        <p className="text-xs">{card?.info?.description}</p>
      </div>
      <div className="">
        {card?.info?.imageId ? (
          <div className="relative">
            <img
              className="w-full h-28 rounded-lg"
              src={IMG_CDN_URL + card?.info?.imageId}
              alt={card?.info?.name}
            />
            {quantity === 0 ? (
              <button
                data-testid="addButton"
                onClick={handleOnAddItem}
                className="absolute bottom-0 text-green-500 border border-black rounded-md bg-white w-44"
              >
                ADD
              </button>
            ) : (
              <div className="absolute bottom-0 flex justify-between items-center w-44 bg-white border border-black rounded-md">
                <button onClick={handleDecrement} className="text-red-500 px-2">
                  -
                </button>
                <span className="text-black">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="text-green-500 px-2"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleOnAddItem}
            className="text-green-500 border border-black rounded-md bg-white w-44"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuCardItem;
