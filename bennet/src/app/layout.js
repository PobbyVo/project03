"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Contact from "../components/contact/page";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [activeItem, setActiveItem] = useState('/');
  const [openPop, setOpenPop] = useState(false);

  const handleItemClick = (href) => {
    setActiveItem(href);
    // setOpenPop(!openPop);
    if(href === "/contact") {
      setOpenPop(true)
    }
    else {
      setOpenPop(false)
    }
    const headerElement = document.querySelector('.header');
    if (headerElement) {
      if (href === '/') {
        headerElement.classList.add('colorHeader');
      } else {
        headerElement.classList.remove('colorHeader');
      }
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.className} ${openPop ? "open-popup" : ""}`}>
        <Header handleItemClick={handleItemClick} activeItem={activeItem}/>
        {children}
        <Footer />
        <Contact/>
      </body>
    </html>
  );
}
