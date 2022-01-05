import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GetStarted from "../components/GetStarted/GetStarted";
import Challenge from "../components/Challenge/Challenge";
import Tool from "../components/Tool/Tool";
import Share from "../components/Share/Share";
import Code from "../components/Code/Code";

function Home() {
  return (
    <>
      <Navbar />
      <GetStarted />
      <Challenge />
      <Tool />
      <Share />
      <Code />
    </>
  );
}

export default Home;
