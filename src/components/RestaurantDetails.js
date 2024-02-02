import { useParams } from "react-router-dom";
import useResMenuDetails from "../utils/useResMenuDetails";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const { resMenuDetail, itemList } = useResMenuDetails(resId);

  if (!resMenuDetail) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-6/12 m-auto">
      <div className="border-b-2 py-8">
        <h1 className="font-bold text-lg">{resMenuDetail?.name}</h1>
        <p>{resMenuDetail?.cuisines.slice(0, 3).join(", ")}</p>
        <h2 className="">
          {`${resMenuDetail?.slugs?.restaurant || ""} minutes - Rs. ${
            resMenuDetail?.costForTwoMessage
          }`}{" "}
        </h2>
      </div>
      <div>
        {itemList.map((item, index) => {
          return (
            <div key={item?.card?.card?.title || index}>
              <RestaurantMenuCard menuList={item?.card?.card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantDetails;
