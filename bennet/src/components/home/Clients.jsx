'use client'
import { useEffect } from "react";
import gsap from "gsap";
import Image from 'next/image';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'; 
import './clients.scss';

gsap.registerPlugin(ScrollTrigger);

const brandsData = [
    { left: "Givenchy", right: <Image src="./home/clients-01.svg" alt="Bennett & Clive" width={573} height={100} /> },
    { left: <Image src="./home/clients-02.svg" alt="Bennett & Clive" width={2279} height={353} />, right: "Hourglass" },
    { left: "Mert & Marcus", right: <Image src="./home/clients-03.svg" alt="Bennett & Clive" width={1000} height={420} /> },
    { left: <Image src="./home/clients-03.svg" alt="Bennett & Clive" width={1000} height={420} />, right: "Stella McCartney" },
    { left: "Craig McDean", right: "Juergen Teller" },
    { left: "Viviane Sassen", right: <Image src="./home/clients-05.svg" alt="Bennett & Clive" width={281} height={111} /> },
    { left: <Image src="./home/clients-06.svg" alt="Bennett & Clive" width={1543} height={409} />, right: "Vegamour" },
    { left: "Augustinus Bader", right: <Image src="./home/clients-07.svg" alt="Bennett & Clive" width={1000} height={674} /> },
    { left: "Steven Klein", right: "Lachlan Bailey" },
    { left: "Willy Vanderperre", right: <Image src="./home/clients-08.svg" alt="Bennett & Clive" width={849} height={311} /> },
    { left: <Image src="./home/clients-09.svg" alt="Bennett & Clive" width={175} height={23} />, right: "Johannes Leonardo" },
    { left: "Ilia Beauty", right: <Image src="./home/clients-10.svg" alt="Bennett & Clive" width={104} height={25} /> },
];

function Clients() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
    
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        // GSAP Animations
        ScrollTrigger.defaults({
            scrub: true
        });
    
        const brands = gsap.utils.toArray(".brand");
        const timelines = [];
    
        brands.forEach((b) => {
            const leftDiv = b.querySelector(".left");
            const rightDiv = b.querySelector(".right");
        
            const tlLeft = gsap.timeline({
                scrollTrigger: {
                    trigger: b,
                    start: "-50% 50%",
                    end: "300% 50%",
                    // markers: true,
                }
            });
    
            const tlRight = gsap.timeline({
                scrollTrigger: {
                    trigger: b,
                    start: "-50% 50%",
                    end: "300% 50%"
                }
            });
        
            tlLeft
                .to(leftDiv, {
                    x: -100
                })
                .to(leftDiv, {
                    x: 0
                });
        
            tlRight
                .to(rightDiv, {
                    x: 100
                })
                .to(rightDiv, {
                    x: 0
                });

            if (window.innerWidth < 992) {
                tlLeft.kill();
                tlRight.kill();
            }
        
            timelines.push(tlLeft, tlRight);
        });
        
        // Clean up function
        return () => {
            timelines.forEach(tl => tl.kill());
            lenis.destroy(); // Ensure to clean up Lenis if needed
        };
    }, []);
    
    return (
        <div className="home-clients">
            <div className="brands-container">
                {brandsData.map((brand, index) => (
                    <div className="brand" key={index}>
                        <div className="left">{brand.left}</div>
                        <div className="right">{brand.right}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients;
