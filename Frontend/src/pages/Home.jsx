import React from 'react';
import HomeWrapper from '../components/home/HomeWrapper';
import Footer from "../components/common/Footer";
import BlogWrapper from '../components/blog/BlogWrapper';
import Layout from '../components/common/Layout';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <HomeWrapper />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Home;