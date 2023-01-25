import React from "react";

// Components
import Navbar from "./Navbar";
import HomeBlock1 from "./HomeBlock1";
import HomeBlock3 from "./HomeBlock3";
import DateAndLocation from "./DateAndLocation";

import HoiAn from "./HoiAn";

// Style
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <HomeBlock1 />
      {/* <HomeBlock3 /> */}
      {/* <DateAndLocation /> */}
      {/* <HoiAn /> */}
    </div>
  );
}

export default Home;
