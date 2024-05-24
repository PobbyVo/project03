"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./contact.scss";
import HeaderLogo from "../headerLogo/HeaderLogo";
import Footer from "../footer/Footer";
import { usePathname, useSearchParams } from 'next/navigation'

function Contact({handlePop, openPopUp}) {
  // const [handlePop,setHandlePop] = useState(false)

  // const openHandlePop = () => {
  //   setHandlePop(true)
  // }

 
  return (
    <div className={`popup-contact ${handlePop ? 'active' :''}`}>
      {/* <HeaderLogo /> */}
      <div className="contact-modal">
        <div className="contact-modal__wrapper">
          <HeaderLogo/>
          <div className="contact-modal__title-wrapper gutters">
            <h2 className="contact-modal__title h1 ttu">Contact</h2>
          </div>
          <div className='footer footer-contact'>
            <ul className="footer-content grid">
              <li className="footer-content__item footer-label">
                <div className="footer-content__office">
                  <div>
                    <p>New York</p>
                  </div>
                  <span className="clock">
                    <span className="clock__inner">
                      03
                      <span className="clock__colon">:</span>
                      25
                    </span>
                  </span>
                </div>
                <div className="footer-content__office">
                  <div>
                    <p>Los Angeles</p>
                  </div>
                  <span className="clock">
                    <span className="clock__inner">
                      00
                      <span className="clock__colon">:</span>
                      26
                    </span>
                  </span>
                </div>
                <div className="footer-content__office">
                  <div>
                    <p>Miami</p>
                  </div>
                  <span className="clock">
                    <span className="clock__inner">
                      03
                      <span className="clock__colon">:</span>
                      27
                    </span>
                  </span>
                </div>
              </li>
              <li className="footer-content__item footer-label">
                <p>Work with us: </p>
                <p><a href="mailto:info@bennettandclive.com" linktype="url">info@bennettandclive.com</a></p>
                <p>CEO, Founder:  </p>
                <p>Sara Mouzayanni</p>
              </li>
              <li className="footer-content__item footer-label">
                <ul className="footer__socials">
                  <li>
                    <a href="https://www.instagram.com/bennettandclive/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/bennett-and-clive" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                </ul>
              </li>
              <li className="footer-content__item footer-label">
                <ul className="footer__socials">
                  <li>
                    <a href="/privacy-policy" className="">Privacy Policy</a>
                  </li> 
                  <li>
                    <a href="/terms-of-use" className="">Terms of Use</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
