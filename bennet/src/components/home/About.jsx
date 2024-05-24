'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import './about.scss';

function About() {
    const wordReft = useRef(null);
    useEffect(() => {
        gsap.to(wordReft.current, { 
            y: '45vh',
        });
        let t2 = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.home-about',
					start: 'top bottom',
                    end:'top top',
					// markers: true,
					scrub: 2,
				},
			})
            t2.fromTo(
                wordReft.current,
                {
                    y: '45vh',
                },
                {
                    y: 0,
                },
                "key0"
            )
        return () => {
            if (t2) t2.kill();
        };
    },[])
    return (
        <div className="home-about">
            <div className="home-about__title">
                <div className="text-splitter text-splitter--splitted">
                    <div>
                        <div className="home-about__title-line" style={{ display: 'block', textAlign: 'start', position: 'relative', }}>
                            <div className="home-about__title-word" style={{ position: 'relative', display: 'inline-block' }}>Lets</div>
                            <div className="home-about__title-word" style={{ position: 'relative', display: 'inline-block' }}>raise</div>
                        </div>
                        <div className="home-about__title-line" style={{ display: 'flex', textAlign: 'start', position: 'relative', }}>
                            <div className="home-about__title-word" style={{ position: 'relative', display: 'inline-block' }}>your</div>
                            <div className="home-about__title-word" style={{ position: 'relative', display: 'inline-block' }} ref={wordReft}>idea</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="home-about__wrapper">
                    <div className="home-about__copy h4 ttu">
                        <p>
                            <span style={{color:'#000'}}>
                                WERE A GLOBAL CREATIVE SERVICES AND PRODUCTION COMPANY HELPING BRANDS AND AGENCIES TELL THEIR STORIES TO THE WORLD.
                            </span>
                        </p>
                    </div>
                    <div className="btn btn--bordered">
                        <div className="btn__label">
                            About
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
