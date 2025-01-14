import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useResMenuDetails = (resId) => {
  const [resMenuDetail, setResMenuDetail] = useState(null);
  const [itemList, setItemList] = useState(null);

  async function getRestaurantsMenu() {
    const data = await fetch(RES_API + resId);
    const json = await data.json();
    console.log(json);
    setResMenuDetail(json?.data?.cards[2]?.card?.card?.info);
    setItemList(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  return { resMenuDetail, itemList };
};
export default useResMenuDetails;
