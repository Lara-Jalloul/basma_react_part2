import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GetStarted from "../components/GetStarted/GetStarted";
import Challenge from "../components/Challenge/Challenge";
import Tool from "../components/Tool/Tool";
import Share from "../components/Share/Share";

function Home() {
  return (
    <>
      <Navbar />
      <GetStarted />
      <Challenge />
      <Tool />
      <Share />
    </>
  );
}

export default Home;
