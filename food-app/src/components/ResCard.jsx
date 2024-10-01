import { RES_IMG_URL } from "../utils/urls";
const ResCard = (props) => {
  // console.log(props);

  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="res-img-container">
        <img src={RES_IMG_URL + cloudinaryImageId} className="res-img"></img>
      </div>
      <h3>
        {name.substring(0, 17)}
        {name.length > 17 ? "..." : ""}
      </h3>
      <h4>
        {cuisines.join(", ").substring(0, 20)}
        {cuisines.join(", ").length > 20 ? ".." : ""}
      </h4>
      <p>{avgRating}/5</p>
      <p>{costForTwo}</p>
      <p>{sla.deliveryTime} mins</p>
    </div>
  );
};

const addOffer = (RestaurantCard) => {
  const AddOffer = (props) => {
    // console.log(props);

    const { resData } = props;
    // console.log(resData?.info);

    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div className="res-card-offer">
        <h4 className="offer">
          {header} {subHeader}
        </h4>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
  return AddOffer;
};
export { addOffer };

export default ResCard;
