import { useState } from "react";
import RestaurantMenuCardItem from "./RestaurantMenuCardItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RestaurantMenuCard = ({ menuList }) => {
  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      {menuList?.itemCards?.length && (
        <div>
          <div
            onClick={() => {
              setShowItem(!showItem);
            }}
            className="flex justify-between items-center py-4 cursor-pointer"
          >
            <p className="font-bold text-lg">
              {menuList?.title} (
              {menuList?.itemCards?.length || menuList?.categories?.length})
            </p>
            <button
              className="bg-white"
              onClick={() => {
                setShowItem(!showItem);
              }}
            >
              {showItem ? (
                <ExpandLessIcon fontSize="large" />
              ) : (
                <ExpandMoreIcon fontSize="large" />
              )}
            </button>
          </div>

          <div className="border-b-8">
            {menuList?.itemCards?.map(
              (itemCard) =>
                showItem && (
                  <div key={itemCard?.card?.info?.id}>
                    <RestaurantMenuCardItem card={itemCard?.card} />
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCard;
