'use client'
import { useEffect, useRef} from "react";
import './hero.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';
import Splt from 'react-spltjs';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        ScrollTrigger.defaults({
            scrub: true
        });

        const lines = gsap.utils.toArray(".about-hero__line");
        const timelines = [];

        lines.forEach((line) => {

            const chars = line.querySelectorAll('.char');
            const midpoint = Math.ceil(chars.length / 2);

            chars.forEach((char, index) => {
                if (index < midpoint) {
                    char.classList.add('left');
                } else {
                    char.classList.add('right');
                }
            });

            const tlLeft = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "-50% 50%",
                    end: "300% 50%",
                    // markers: true,
                }
            });

            const tlRight = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "-50% 50%",
                    end: "300% 50%",
                    // markers: true,
                }
            });

            tlLeft
                .to(line.querySelectorAll('.left'), {
                    x: -70
                })
                .to(line.querySelectorAll('.left'), {
                    x: 0
                });

            tlRight
                .to(line.querySelectorAll('.right'), {
                    x: 70
                })
                .to(line.querySelectorAll('.right'), {
                    x: 0
                });

            timelines.push(tlLeft, tlRight);
        });

        // Clean up function
        return () => {
            timelines.forEach(tl => tl.kill());
            lenis.destroy(); // Ensure to clean up Lenis if needed
        };
    }, []);

    return (
        <div className='about-hero about-trigger is-visible'>
            <h1 className='about-hero__title'>WHY US</h1>
            <div className="about-hero__copy h3">
                <div className="text-splitter text-splitter--splitted">
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="There's a reason why you refer to your"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="idea as your baby. Because that's"
                                className="char"
                            />
                            
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="how much you care about it and"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="believe in its potential."
                                className="char"
                            />
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="But like all babies, it takes surrounding"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="it with the right people to help this"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="incredible idea of yours become"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="everything it's supposed to be."
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="Someone who understands the unique"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="ins and outs of your project, with the"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="instincts and know-how to provide"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="exactly what it needs and when."
                                className="char"
                            />
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="At Bennett & Clive, we call this"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="approach creative empathy. And it's"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="the reason why the biggest names in"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="beauty, fashion and fine goods come"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="back to us again and again."
                                className="char"
                            />
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="We're connectors, problem-solvers"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="and forward-thinkers, able to impact"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="every step of the process with"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="excellence. Not just production and"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="post but brand ID and creative"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="development. With offices in New"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="York, Los Angeles and Miami and a"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="global network of the best of the best"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="Bennett & Clive is poised to tap into"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="whatever it takes to turn what-if into"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="oh-wow."
                                className="char"
                            />
                        </div>
                    </div>
                    <div className="text-splitter--splitted-inner">
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="There's no greater joy than seeing an"
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="idea come to life. This is your baby."
                                className="char"
                            />
                        </div>
                        <div className="about-hero__line spltjs">
                            <Splt
                                text="We'd love to help you raise it."
                                className="char"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
