'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './sustainability.scss';

function Sustainability() {
    return (
        <div className="about-sustainability about-trigger">
            <h2 className="about-sustainability__title">
                Sustain&shy
            </h2>
            <div className="about-sustainability__copy grid">
                <p>
                    We love the planet, and while nurturing creative ideas is important to us, our primary goal is to ensure that creativity makes the smallest possible impact on our beloved Earth. With a strong commitment to environmental responsibility, we thoroughly evaluate each production and actively seek innovative solutions to minimize our environmental footprint.
                </p>
                <p>
                    We take responsibility for our carbon emissions by offsetting them from all shoots, and we also allocate a portion of our profits to support ocean conservation and cleanup efforts. 
                </p>
            </div>
        </div>
    )
}

export default Sustainability
