import { useParams } from "react-router-dom";
import useResMenuDetails from "../utils/useResMenuDetails";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resMenuDetail = useResMenuDetails(resId);
  if (!resMenuDetail) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{resMenuDetail?.name}</h1>
      <p>{resMenuDetail?.cuisines.slice(0, 3).join(",")}</p>
      <h2>
        {`${resMenuDetail?.sla?.deliveryTime} minutes - Rs. ${resMenuDetail?.costForTwoMessage}`}{" "}
      </h2>
    </div>
  );
};
export default RestaurantDetails;
