import { useParams } from "react-router-dom";
import useResMenuDetails from "../utils/useResMenuDetails";
import RestaurantMenuCard from "./RestaurantMenuCard";
import StarIcon from "@mui/icons-material/Star";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const { resMenuDetail, itemList } = useResMenuDetails(resId);

  if (!resMenuDetail) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-6/12 m-auto pt-20">
      <div className="flex justify-between border-b-2 pb-5">
        <div className="">
          <h1 className="font-bold text-lg">{resMenuDetail?.name}</h1>
          <p>{resMenuDetail?.cuisines.slice(0, 3).join(", ")}</p>
          <h2 className="font-bold">{`${resMenuDetail?.costForTwoMessage}`}</h2>
        </div>
        <div className="border shadow-lg rounded-md p-1">
          <div className="flex items-center pb-2 ms-4">
            <StarIcon className="" fontSize="small" color="success" />
            <p className="font-bold">{resMenuDetail?.avgRating || "New"}</p>
          </div>
          <hr />
          <div>
            <p className="">{resMenuDetail?.totalRatingsString || ""}</p>
          </div>
        </div>
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
