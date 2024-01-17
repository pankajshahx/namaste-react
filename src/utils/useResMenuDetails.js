import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useResMenuDetails = (resId) => {
  const [resMenuDetail, setResMenuDetail] = useState(null);

  async function getRestaurantsMenu() {
    const data = await fetch(RES_API + resId);
    const json = await data.json();
    console.log(json);
    setResMenuDetail(json.data.cards[0].card.card.info);
  }

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  return resMenuDetail;
};
export default useResMenuDetails;
