import React from "react";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};
export default Home;
