import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const RestaurantMenuCardItem = ({ card }) => {
  const dispatch = useDispatch();
  const handleOnAddItem = () => {
    console.log(card);
    dispatch(addItem(card));
  };

  return (
    <div className="flex w-full justify-between border-b-2 py-4">
      <div className="flex-1">
        <p className="font-bold">
          {card?.info?.name} ₹{card?.info?.price / 100}
        </p>
        <p className="">{card?.info?.description}</p>
      </div>
      <div className="">
        {card?.info?.imageId ? (
          <div className="relative">
            <img
              className="w-full h-28 rounded-lg"
              src={IMG_CDN_URL + card?.info?.imageId}
              alt={card?.info?.name}
            />
            <button
              onClick={handleOnAddItem}
              className="absolute bottom-0 text-green-500 border border-black rounded-md bg-white w-44"
            >
              ADD
            </button>
          </div>
        ) : (
          <button className="text-green-500 border border-black rounded-md bg-white w-44">
            ADD
          </button>
        )}
      </div>
    </div>
  );
};
export default RestaurantMenuCardItem;
