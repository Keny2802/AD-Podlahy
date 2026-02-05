import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";

const Home = () => {
    return (
      <Fragment>
          <Header />
          <Hero />
      </Fragment>
    );
};

export default Home;