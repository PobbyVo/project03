'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { matchMedia } from 'gsap/all';
import './services.scss';

function Services() {
    const refItem = useRef(null)

    const itemLeftRefs = Array.from({ length: 10 }, () => refItem);
    const itemInnerRefs = Array.from({ length: 10 }, () => refItem);
    const itemListLeft = [
        "Brand Development",
        "Strategy",
        "Concept Development",
        "Global Production",
        "Art Buying",
        "Motion",
        "Photography",
        "Post Production",
        "Activations",
        "Experiential"
    ];
    
    const itemListRight = [
        "Brand Development",
        "Strategy",
        "Concept Development",
        "Global Production",
        "Art Buying",
        "Motion",
        "Photography",
        "Post Production",
        "Activations",
        "Experiential"
    ];

    const servicesResponsive = gsap.matchMedia()

    useEffect(() => {
        servicesResponsive.add("(max-width: 1200px)", () => {
            let t3 = gsap.timeline({
				scrollTrigger: {
					trigger: '.home-services__reel-wrapper',
					start: '15% 50%',
					end: 'bottom 50%',
					// markers: true,
					scrub: 1,
				},
			})
            t3.to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key0"
            )
            .to(
                itemInnerRefs[0],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key0"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key1"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, 0, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key1"
            )
            .to(
                itemInnerRefs[1],
                {
                    transform: `translate3d(0px, 0vh, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key1"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key2"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key2"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key2"
            )
            .to(
                itemInnerRefs[2],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key2"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemInnerRefs[3],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key3"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemInnerRefs[4],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key4"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -500%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemInnerRefs[5],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key5"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -600%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -500%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemInnerRefs[6],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key6"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -700%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -600%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -500%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[7],
                {
                    transform: `translate3d(0px, 0, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemInnerRefs[7],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key7"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -700%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -600%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -500%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[7],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[8],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemInnerRefs[8],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key8"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -700%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -600%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -500%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[7],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[8],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[9],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemInnerRefs[9],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key9"
            )
        })

        gsap.to(
            '.itemLeft', 
            { 
                transform: `transform: scale(0, 0);) translate3d(0px, 0px, 0px)`,
                transformOrigin:'0 100%',
            }
        );
        gsap.to(
            '.itemInner', 
            { 
                transform: `transform: scale(0, 0);) translate3d(0px, 0px, 0px)`,
                transformOrigin:'100% 0',
            }
        );
        let t4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-clients',
                start: 'top 70%',
                end: '50% 50%',
                // markers: true,
                scrub: 1,
            }
        })
        t4.to(
            '.home-services__list--left',
            {
                transform: `translate3d(0px, -56vh, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key0"
        )
        let t3 = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.home-services__reel-wrapper',
					start: '20% 50%',
					end: 'bottom bottom',
					// markers: true,
					scrub: 2,
				},
			})
            t3.to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key0"
            )
            .to(
                itemInnerRefs[0],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key0"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key1"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, 0, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key1"
            )
            .to(
                itemInnerRefs[1],
                {
                    transform: `translate3d(0px, 0vh, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key1"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key2"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key2"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key2"
            )
            .to(
                itemInnerRefs[2],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key2"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key3"
            )
            .to(
                itemInnerRefs[3],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key3"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key4"
            )
            .to(
                itemInnerRefs[4],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key4"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -500%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key5"
            )
            .to(
                itemInnerRefs[5],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key5"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -600%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -500%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -400%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -300%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -200%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -100%, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key6"
            )
            .to(
                itemInnerRefs[6],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key6"
            )
            .to(
                itemLeftRefs[0],
                {
                    transform: `translate3d(0px, -56vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -48vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -40vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -32vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -24vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -16vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, -8vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemLeftRefs[7],
                {
                    transform: `translate3d(0px, 0, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key7"
            )
            .to(
                itemInnerRefs[7],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key7"
            )
            .to(
                itemLeftRefs[1],
                {
                    transform: `translate3d(0px, -56vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -48vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -40vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -32vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -24vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, -16vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[7],
                {
                    transform: `translate3d(0px, -8vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemLeftRefs[8],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key8"
            )
            .to(
                itemInnerRefs[8],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key8"
            )
            .to(
                itemLeftRefs[2],
                {
                    transform: `translate3d(0px, -56vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[3],
                {
                    transform: `translate3d(0px, -48vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[4],
                {
                    transform: `translate3d(0px, -40vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[5],
                {
                    transform: `translate3d(0px, -32vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[6],
                {
                    transform: `translate3d(0px, -24vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[7],
                {
                    transform: `translate3d(0px, -16vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[8],
                {
                    transform: `translate3d(0px, -8vh, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemLeftRefs[9],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(1)`,
                    transformOrigin: '0 100%',
                },
                "key9"
            )
            .to(
                itemInnerRefs[9],
                {
                    transform: `translate3d(0px, 0px, 0px) scale(0)`,
                    transformOrigin: '100% 0',
                },
                "key9"
            )
            if (window.innerWidth < 1200) {
                if (t3) t3.kill();
            }
            return () => {
                if (t3) t3.kill();
                if (t4) t4.kill();
            };
    },[])
    return (
        <div className='home-services'>
            <div className="home-services__reel-wrapper">
                <div className="home-services__reel-inner grid">
                    <div className="home-services__reel">
                        <div className="base-video base-video--fit base-video--loaded">
                            <video width="1920" height="1080" autoPlay muted loop>
                                <source src='./home/video-07.mp4' type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="home-services__list home-services__list--left h2 h2--l">
                {itemListLeft.map((item, index) => (
                    <li key={index} className="home-services__list-item itemLeft" ref={refs => itemLeftRefs[index] = refs}>
                        <span className="home-services__list-item-inner">{item}</span>
                    </li>
                ))}
            </ul>
            <ul className="home-services__list home-services__list--right h2 h2--l">
                {itemListRight.map((item, index) => (
                    <li key={index} className="home-services__list-item" ref={refs => itemInnerRefs[index] = refs}>
                        <div className="home-services__list-item-trigger"></div>
                        <span className="home-services__list-item-inner itemInner" >{item}</span>
                    </li>
                ))}
                <li className="home-services__list-item-spacer"></li>
            </ul>
        </div>
    )
}

export default Services
