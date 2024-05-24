'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './diversity.scss';

function Diversity() {

    useEffect(() => {
        let t11 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-diversity',
                start: 'top bottom',
                end: 'top 50%',
                // markers: true,
                scrub: 2,
                stagger: 2,
            }
        })
        .to (
            '.about-diversity__fig-wrapper',
            {
                y:"0",
                stagger: .2,
                scrub: 2,
            },
            "key0"
        )
        .to (
            '.about-diversity__fig',
            {
                y:"0",
                stagger: .2,
                scrub: 2,
            },
            "key0"
        );

        return () => {
            if (t11) t11.kill();
        };
    }, []);

    return (
        <div className="about-diversity about-trigger">
            <div className="grid about-diversity-grid">
                <div className="about-diversity__fig-wrapper" >
                    <figure className="about-diversity__fig" >
                        <picture className="base-image base-image--loaded">
                            <img src="./about/diversity-01.png" alt="" />
                        </picture>
                    </figure>
                </div>
                <div className="about-diversity__fig-wrapper" >
                    <figure className="about-diversity__fig" >
                        <picture className="base-image base-image--loaded">
                            <img src="./about/diversity-02.png" alt="" />
                        </picture>
                    </figure>
                </div>
                <div className="about-diversity__fig-wrapper">
                    <figure className="about-diversity__fig">
                        <picture className="base-image base-image--loaded">
                            <img src="./about/diversity-03.png" alt="" />
                        </picture>
                    </figure>
                </div>
            </div>
            <h2 className="about-diversity__title">
                Hu(e)mans
            </h2>
            <div className="about-diversity__copy grid">
                <p>
                    Its our belief that everyone deserves equal care and opportunity regardless of gender, race, religion, age, or orientation. Diversity fuels innovation, fosters creativity, and enriches our work environment. We actively seek out diverse perspectives, experiences, and talents because we believe that a diverse workforce is not just the right thing to do  its essential for our success.
                </p>
            </div>
        </div>
    )
}

export default Diversity
