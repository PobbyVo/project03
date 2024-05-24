"use client";

import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Link from 'next/link';
import './header.scss';

const Header = ({ handleItemClick, activeItem }) => {
    useEffect(() => {
        const headerElement = document.querySelector('.header');
        if (headerElement) {
        const colorHeader = gsap.timeline({
            scrollTrigger: {
            trigger: '.home-about',
            start: "top top",
            end: "top top",
            toggleActions: 'play none none none',
            scrub: true,
            }
        });
        colorHeader.to(headerElement, { color: "#000" });
        return () => {
            if (colorHeader) colorHeader.kill();
        };
        }
    }, []);

    return (
        <header className='header colorHeader'>
            <ul className='menu-list'>
                <li className={activeItem === '/' ? 'active' : ''} onClick={() => handleItemClick('/')}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={activeItem === '/work' ? 'active' : ''} onClick={() => handleItemClick('/work')}>
                    <Link href='/work'>Work</Link>
                </li>
                <li className={activeItem === '/about' ? 'active' : ''} onClick={() => handleItemClick('/about')}>
                    <Link href='/about'>About</Link>
                </li>
                <li className={activeItem === '/contact' ? 'active' : ''} onClick={() => handleItemClick('/contact')}>
                    <button>Contact</button>
                </li>
            </ul>
        </header>
    );
};

export default Header;
