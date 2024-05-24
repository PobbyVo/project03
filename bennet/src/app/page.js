"use client";

import '../../public/assets/libs/fontawesome/css/all.css'
import HeaderLogo from "@/components/headerLogo/HeaderLogo";
import About from '@/components/home/About';
import Clients from '@/components/home/Clients';
import Hero from "@/components/home/Hero";
import Services from '@/components/home/Services';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [activeHome, setActiveHome] = useState(false);

  useEffect(() => {
    // Add any logic here if needed for activeHome state change
  }, [activeHome]);

  return (
    <main>
      <HeaderLogo />
      <Hero />
      <About />
      <Services />
      <Clients />
    </main>
  );
}

export default Home;
