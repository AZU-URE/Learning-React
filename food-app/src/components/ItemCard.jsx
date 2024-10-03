import { RES_IMG_URL } from "../utils/urls";
import { useDispatch } from "react-redux";
import { add, remove } from "../utils/cartSlice";
export default function ItemCard(props) {
  const { info } = props;
  const { name, description, imageId, price, defaultPrice } = info.card.info;
  return (
    <div className="item">
      <div className="item-detail">
        <h4 className="item-name">{name}</h4>
        <p className="item-price">₹{price / 100 || defaultPrice / 100}</p>
        <p className="item-desc">{description}</p>
      </div>
      <div className="item-img">
        <img src={RES_IMG_URL + imageId}></img>
      </div>
    </div>
  );
}

const customItemCard = (ItemCard, cardTpe) => {
  const dispatch = useDispatch();
  const handleAction = (item) => {
    if (cardTpe === "add") {
      dispatch(add(item));
    } else {
      dispatch(remove(item));
    }
  };
  const Card = (props) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          margin: "10px",
        }}
      >
        <button className="add-btn" onClick={() => handleAction(props.info)}>
          {cardTpe}
        </button>
        <ItemCard {...props} />
      </div>
    );
  };
  return Card;
};

export { customItemCard };
