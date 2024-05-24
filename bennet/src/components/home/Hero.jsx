'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import './hero.scss';
import { CldVideoPlayer } from 'next-cloudinary';
// import 'next-cloudinary/dist/cld-video-player.css';
import Link from "next/link";

const Hero = () => {
    const triggers = Array(6).fill(null);

    const Hero0 = useRef(null);
    const Hero1 = useRef(null);
    const Hero2 = useRef(null);
    const Hero3 = useRef(null);
    const Hero4 = useRef(null);
    const Hero5 = useRef(null);

    const InActive0 = useRef(null);
    const InActive1 = useRef(null);
    const InActive2 = useRef(null);
    const InActive3 = useRef(null);
    const InActive4 = useRef(null);

    const assetRef0 = useRef(null);
    const assetRef1 = useRef(null);
    const assetRef2 = useRef(null);
    const assetRef3 = useRef(null);
    const assetRef4 = useRef(null);
    const assetRef5 = useRef(null);

    const figRef0 = useRef(null);
    const figRef1 = useRef(null);
    const figRef2 = useRef(null);
    const figRef3 = useRef(null);
    const figRef4 = useRef(null);
    const figRef5 = useRef(null);


    useEffect(() => {
        gsap.to('.home-hero-titles__title-pri', { transform: `translate(0%, 0%) scale(0) translate3d(0px, 0px, 0px)` });
        let t0 = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.home-hero__wrapper',
					start: 'top top',
					end: 'bottom bottom',
					// markers: true,
                    stagger: 0.1,
					scrub: 3,
				},
			})
        t0.fromTo(
            Hero0.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key0"
        )
        .fromTo(
            Hero1.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key0"
        )
        .fromTo(
            InActive0.current,
            {
                transform: `translate(0%, -25%) translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            {
                transform: `translate(0%, -25%) translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '100% 0',
            },
            "key0"
        )
        .fromTo(
            InActive1.current,
            {
                transform: `translate(0%, -20%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key0"
        )
        .fromTo(
            InActive2.current,
            {
                transform: `translate(0%, -15%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key0"
        )
        .fromTo(
            InActive3.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key0"
        )
        .fromTo(
            InActive4.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key0"
        )
        .fromTo(
            assetRef1.current,
            {
                transform: `translate(0%, 100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key0"
        )
        .fromTo(
            figRef1.current,
            {
                transform: `translate(0%, -100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key0"
        )
        .to(
            Hero1.current,
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key1"
        )
        .fromTo(
            Hero2.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key1"
        )
        .to(
            InActive1.current,
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '100% 0',
            },
            "key1"
        )
        .to(
            InActive2.current,
            {
                transform: `translate(0%, -230%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key1"
        )
        .to(
            InActive3.current,
            {
                transform: `translate(0%, -230%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key1"
        )
        .to(
            InActive4.current,
            {
                transform: `translate(0%, -230%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key1"
        )
        
        .fromTo(
            assetRef2.current,
            {
                transform: `translate(0%, 100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key1"
        )
        .fromTo(
            figRef2.current,
            {
                transform: `translate(0%, -100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key1"
        )
        .fromTo(
            Hero2.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key2"
        )
        .fromTo(
            Hero3.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key2"
        )
        .to(
            InActive2.current,
            {
                transform: `translate(0%, -230%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '100% 0',
            },
            "key2"
        )
        .to(
            InActive3.current,
            {
                transform: `translate(0%, -330%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key2"
        )
        .to(
            InActive4.current,
            {
                transform: `translate(0%, -330%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key2"
        )
        .fromTo(
            assetRef3.current,
            {
                transform: `translate(0%, 100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key2"
        )
        .fromTo(
            figRef3.current,
            {
                transform: `translate(0%, -100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key2"
        )
        .fromTo(
            Hero3.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key3"
        )
        .fromTo(
            Hero4.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key3"
        )
        .to(
            InActive3.current,
            {
                transform: `translate(0%, -330%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '100% 0',
            },
            "key3"
        )
        .to(
            InActive4.current,
            {
                transform: `translate(0%, -430%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '100% 0',
            },
            "key3"
        )
        .fromTo(
            assetRef4.current,
            {
                transform: `translate(0%, 100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key3"
        )
        .fromTo(
            figRef4.current,
            {
                transform: `translate(0%, -100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key3"
        )
        .to(
            Hero4.current,
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key4"
        )
        .fromTo(
            Hero5.current,
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '0 100%',
            },
            {
                transform: `translate(0%, 0%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key4"
        )
        .to(
            InActive4.current,
            {
                transform: `translate(0%, -430%)  translate3d(0px, 0px, 0px) scale(0)`,
                transformOrigin: '100% 0',
            },
            "key4"
        )
        .fromTo(
            assetRef5.current,
            {
                transform: `translate(0%, 100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key4"
        )
        .fromTo(
            figRef5.current,
            {
                transform: `translate(0%, -100%) translate3d(0px, 0px, 0px)`,
            },
            {
                transform: `translate(0%, 0%) translate3d(0px, 0px, 0px)`,
            },
            "key4"
        )
        .to(
            Hero5.current,
            {
                transform: `translate(0%, -130%)  translate3d(0px, 0px, 0px) scale(1)`,
                transformOrigin: '0 100%',
            },
            "key5"
        )
        // Add other animation steps here following the pattern above
        
        // Cleanup on component unmount
        return () => {
            if (t0) t0.kill();
        };
    },[])
    return (
        <div className="home-hero">
            <div className="home-hero__wrapper">
                <div className="home-hero-triggers">
                    {triggers.map((_, index) => (
                        <div className="home-hero-trigger" key={index}></div>
                    ))}
                </div>
                <div className="home-hero__inner">
                    <div className="home-hero__sticky">
                        <div className="home-hero-titles is-visible">
                            <div className="home-hero-titles__container">
                                <div className="home-hero-titles__wrapper">
                                    <div className="home-hero-titles__title ttu h1" ref={Hero0}>
                                        Adidas
                                    </div>
                                    <div className="home-hero-titles__title ttu h1 home-hero-titles__title-pri" ref={Hero1}>
                                        Calvin Klein
                                    </div>
                                    <div className="home-hero-titles__title ttu h1 home-hero-titles__title-pri" ref={Hero2}>
                                        Hourglass
                                    </div>
                                    <div className="home-hero-titles__title ttu h1 home-hero-titles__title-pri" ref={Hero3}>
                                        Eilish
                                    </div>
                                    <div className="home-hero-titles__title ttu h1 home-hero-titles__title-pri" ref={Hero4}>
                                        The Outset
                                    </div>
                                    <div className="home-hero-titles__title ttu h1 home-hero-titles__title-pri" ref={Hero5}>
                                        MAC
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-hero-inactive-titles">
                            <div className="home-hero-inactive-titles__list">
                                <div className="home-hero-inactive-titles__item ttu h1" ref={InActive0}>
                                    Calvin Klein
                                </div>
                                <div className="home-hero-inactive-titles__item ttu h1" ref={InActive1}>
                                    Hourglass
                                </div>
                                <div className="home-hero-inactive-titles__item ttu h1" ref={InActive2}>
                                    Eilish
                                </div>
                                <div className="home-hero-inactive-titles__item ttu h1" ref={InActive3}>
                                    The Outset
                                </div>
                                <div className="home-hero-inactive-titles__item ttu h1" ref={InActive4}>
                                    MAC
                                </div>
                            </div>
                        </div>
                        <div className="home-hero-assets is-visible">
                            <div className="home-hero-asset oh" ref={assetRef0} >
                                <div className="home-hero-asset__fig" ref={figRef0}>
                                    <div className="base-video base-video--fit">
                                        {/* <video width="1920" height="1080" autoPlay muted loop>
                                            <source src="./home/video-01.mp4" type="video/mp4" />
                                        </video> */}
                                        <CldVideoPlayer
                                            width="1920"
                                            height="1080"
                                            src="video01"
                                            loop
                                            muted
                                            autoplay
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="home-hero-asset oh" ref={assetRef1} >
                                <div className="home-hero-asset__fig" ref={figRef1}>
                                    <div className="base-video base-video--fit base-video--loaded">
                                        {/* <video width="1920" height="1080" autoPlay muted loop preload="none">
                                            <source src="./home/video-02.mp4" type="video/mp4" />
                                        </video> */}
                                        <CldVideoPlayer
                                            width="1920"
                                            height="1080"
                                            src="video02"
                                            loop
                                            muted
                                            autoplay="on-scroll"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="home-hero-asset oh" ref={assetRef2} >
                                <div className="home-hero-asset__fig" ref={figRef2}>
                                    <div className="base-video base-video--fit">
                                        {/* <video width="1920" height="1080" autoPlay muted loop preload="none">
                                            <source src="./home/video-03.mp4" type="video/mp4" />
                                        </video> */}
                                        <CldVideoPlayer
                                            width="1920"
                                            height="1080"
                                            src="video03"
                                            loop
                                            muted
                                            autoplay="on-scroll"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="home-hero-asset oh" ref={assetRef3} >
                                <div className="home-hero-asset__fig" ref={figRef3}>
                                    <div className="base-video base-video--fit base-video--loaded">
                                        {/* <video width="1920" height="1080" autoPlay muted loop preload="none">
                                            <source src="./home/video-04.mp4" type="video/mp4" />
                                        </video> */}
                                        <CldVideoPlayer
                                            width="1920"
                                            height="1080"
                                            src="video04"
                                            loop
                                            muted
                                            autoplay="on-scroll"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="home-hero-asset oh" ref={assetRef4} >
                                <div className="home-hero-asset__fig" ref={figRef4}>
                                    <div className="base-video base-video--fit">
                                        {/* <video width="1920" height="1080" autoPlay muted loop preload="none">
                                            <source src="./home/video-05.mp4" type="video/mp4" />
                                        </video> */}
                                        <CldVideoPlayer
                                            width="1920"
                                            height="1080"
                                            src="video05"
                                            loop
                                            muted
                                            autoplay="on-scroll"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="home-hero-asset oh" ref={assetRef5} >
                                <div className="home-hero-asset__fig" ref={figRef5}>
                                    <div className="base-video base-video--fit base-video--loaded" preload="none">
                                        {/* <video width="1920" height="1080" autoPlay muted loop>
                                            <source src="./home/video-06.mp4" type="video/mp4" />
                                        </video> */}
                                        <CldVideoPlayer
                                            width="1920"
                                            height="1080"
                                            src="video06"
                                            loop
                                            muted
                                            autoplay="on-scroll"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
