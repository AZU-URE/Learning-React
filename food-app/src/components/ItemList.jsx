import ItemCard, { customItemCard } from "./ItemCard";
import { useEffect } from "react";
export default function ItemList(props) {
  const { res, index, show, setShow } = props;
  const item = res.card.card;
  const Card = customItemCard(ItemCard, "add");
  useEffect(() => {
    if (index === 2) {
      setShow(true);
    }
  }, []);
  return (
    <div>
      <div className="type-container">
        <h3 className="item-type">
          {item.title} ({item.itemCards.length})
        </h3>
        <button
          onClick={() => {
            show === item.title ? setShow(-1) : setShow(item.title);
          }}
        >
          {show === item.title ? "Hide" : "Show"}
        </button>
      </div>
      {show === res.card.card.title ? (
        <div>
          {item.itemCards.map((item) => (
            <Card info={item} key={item.card.info.id}></Card>
          ))}
        </div>
      ) : (
        <div className="not-show"></div>
      )}
    </div>
  );
}
