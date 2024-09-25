import { RES_IMG_URL } from "../utils/urls";
const ResCard = (props) => {
  console.log(props);

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

export default ResCard;
