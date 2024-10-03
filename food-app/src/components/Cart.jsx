import { useSelector } from "react-redux";
import ItemCard, { customItemCard } from "./ItemCard";

export default function Cart() {
  const items = useSelector((store) => store.cart.items);
  const Card = customItemCard(ItemCard, "remove");

  return (
    <div className="w-2/3 m-auto  mt-[2rem]">
      {items.length != 0 ? (
        <div>
          <h5 className="text-center w-full text-2xl font-bold">Cart Items</h5>
          {items.map((item) => (
            <Card info={item} key={item.card.info.id} />
          ))}
        </div>
      ) : (
        <h5 className="text-center w-full text-2xl font-bold">
          Add something to cart
        </h5>
      )}
    </div>
  );
}
