import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import GetStarted from '../components/GetStarted/GetStarted';
import Challenge from '../components/Challenge/Challenge';

function Home() {
    return (
        <>
          <Navbar />
          <GetStarted/> 
          <Challenge /> 
        </>
    )
}

export default Home
