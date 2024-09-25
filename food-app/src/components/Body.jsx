import { resList } from "../utils/constant";
import ResCard from "./ResCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <ResCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
