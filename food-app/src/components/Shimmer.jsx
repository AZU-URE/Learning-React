const Shimmer = () => {
  const arr = new Array(6).fill(0);
  return (
    <div className="simmer-container">
      {arr.map((el, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
};

export default Shimmer;

function ShimmerCard() {
  return (
    <div className="shimmer-card">
      <div className="shimmer-box"></div>
      <div className="shimmer-text-1"></div>
      <div className="shimmer-text-2"></div>
    </div>
  );
}
