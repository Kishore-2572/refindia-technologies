import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeServices from '../components/HomeServices';
import HomeAbout from '../components/HomeAbout';
import Testmonial from '../components/Testmonial';
import '../css/home.css';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <HomeAbout />
      <HomeServices />
      <Testmonial />
    </div>
  );
};

export default Home;
