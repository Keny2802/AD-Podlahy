import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Garage from "./sections/Garage";

const Home = () => {
    return (
      <Fragment>
          <Header />
          <Hero />
          <Garage />
      </Fragment>
    );
};

export default Home;