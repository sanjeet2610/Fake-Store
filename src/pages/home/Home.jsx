import Body from "./body/Body";
import FilterBar from "./filterBar/FilterBar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <FilterBar />
        <Body />
      </div>
    </>
  );
};

export default Home;
