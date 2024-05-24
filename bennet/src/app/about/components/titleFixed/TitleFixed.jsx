'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './titlefixed.scss';

const  TitleFixed = () => {
    const titleOne = useRef(null);
    const titleTwo = useRef(null);
    const titleThree = useRef(null);
    const titleFour = useRef(null);
    useEffect(() => {
        gsap.to(
            titleOne.current,
            {
                transformOrigin:'0% 100%',
                xPercent:'0',
                yPercent:'0'
            },
        )
        gsap.to(
            titleTwo.current,
            {
                xPercent:'0',
                yPercent:'0',
                scale:'0',
                // opacity:"1",
            },
        )
        gsap.to(
            titleThree.current,
            {
                xPercent:'0',
                yPercent:'0',
                scale:'0'
            },
        )
        gsap.to(
            titleFour.current,
            {
                xPercent:'0',
                yPercent:'0',
                scale:'0'
            },
        )
        const tItem1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-hero',
                start: "bottom+=200 40%",
                end: "bottom+=400 40%",
                // markers: true,
                scrub: 2,
            }
        })

        const tItem2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-history',
                start: "top+=200 40%",
                end: "top+=400 40%",
                // markers: true,
                scrub: 2,
            }
        })

        const tItem3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-sustainability',
                start: "top-=200 40%",
                end: "top 40%",
                // markers: true,
                scrub: 2,
            }
        })

        const tItem4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-diversity',
                start: "top-=200 40%",
                end: "top 40%",
                // markers: true,
                scrub: 2,
            }
        })
        tItem1
        .to(
            titleOne.current,
            {
                y:"-110%",
                transformOrigin:"0% 100%",
            },
        )
        tItem2
        .to(
            titleTwo.current,
            {
                scale:1,
                transformOrigin:"0% 100%",
            },
        )
        tItem3
        .to(
            titleThree.current,
            {
                scale:1,
                transformOrigin:"0% 100%",
            },
        )
        tItem4
        .to(
            titleThree.current,
            {
                y:"-110%",
                transformOrigin:"0% 100%",
            },
            "key0"
        )
        .to(
            titleFour.current,
            {
                scale:1,
                transformOrigin:"0% 100%",
            },
            "key0"
        )
        return () => {
            if (tItem1) tItem1.kill();
            if (tItem2) tItem2.kill();
            if (tItem3) tItem3.kill();
            if (tItem4) tItem4.kill();
        };
    },[])
    return (
        <div className="about-titles h1 ttu title-fixed">
            <div className="about-titles__item" ref={titleOne}>
                <div className="about-titles__line">
                    WHY US
                </div>
            </div>
            <div className="about-titles__item about-titles__item-two" ref={titleTwo}>
                <div className="about-titles__line">
                    About
                </div>
            </div>
            <div className="about-titles__item" ref={titleThree}>
                <div className="about-titles__line">
                    Sustainability
                </div>
            </div>
            <div className="about-titles__item" ref={titleFour}>
                <div className="about-titles__line">
                    Hu(e)mans
                </div>
            </div>
        </div>
    )
}

export default TitleFixed
