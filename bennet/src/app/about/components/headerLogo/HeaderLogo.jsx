'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import './headerlogo.scss';

function HeaderLogo() {
    const svgLeft = useRef(null);
    const svgCenter = useRef(null);
    const svgRight = useRef(null);

    useEffect(() => {
        const svgElements = [svgLeft.current, svgCenter.current, svgRight.current];

        gsap.set(svgLeft.current, {
            scale: 0.1215,
            x: 0,
            y: 0,
            transformOrigin: '0% 50%',
        });
        gsap.set(svgCenter.current, {
            scale: 0.1161,
            x: 0,
            y: 0,
            transformOrigin: '-90% 50%',
        });
        gsap.set(svgRight.current, {
            scale: 0.1215,
            x: 0,
            y: 0,
            transformOrigin: '100% 50%',
        });

        const svgResponsive = gsap.matchMedia();
        const logoResponsive = gsap.matchMedia();

        svgResponsive.add('(max-width: 1200px)', () => {
            gsap.to(svgLeft.current, {
                scale: 0.307,
                x: 0,
                y: 0,
                transformOrigin: '0% 50%',
            });
            gsap.to(svgCenter.current, {
                scale: 0.3138,
                x: 0,
                y: 0,
                transformOrigin: '-120% 50%',
            });
            gsap.to(svgRight.current, {
                scale: 0.3068,
                x: 0,
                y: 0,
                transformOrigin: '100% 50%',
            });
        });

        const scrollTriggers = [];

        logoResponsive.add('(max-width: 1200px)', () => {
            const tBot1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.about-diversity',
                    start: 'top-=100 50%',
                    end: 'top 50%',
                    scrub: 2,
                },
            });

            tBot1
                .to(svgLeft.current, {
                    transformOrigin: '0% 50%',
                    x: 0,
                    y: '45.5vh',
                }, 'key0')
                .to(svgCenter.current, {
                    transformOrigin: '-120% 50%',
                    x: 0,
                    y: '45.5vh',
                }, 'key0')
                .to(svgRight.current, {
                    transformOrigin: '100% 50%',
                    x: 0,
                    y: '45.5vh',
                }, 'key0')
                .to(svgLeft.current, {
                    transformOrigin: '0% 50%',
                    x: 0,
                    y: '45.5vh',
                    scale: 1,
                }, 'key1')
                .to(svgCenter.current, {
                    transformOrigin: '-90% 50%',
                    x: 0,
                    y: '45.5vh',
                    scale: 1,
                }, 'key1')
                .to(svgRight.current, {
                    transformOrigin: '100% 50%',
                    x: 0,
                    y: '45.5vh',
                    scale: 1,
                }, 'key1');

            scrollTriggers.push(tBot1.scrollTrigger);
        });

        const heroLogoColors = gsap.utils.toArray('.header-logo');
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-about',
                start: 'top bottom',
                scrub: true,
                onEnter: () => {
                    heroLogoColors.forEach((heroLogoColor) => {
                        heroLogoColor.classList.add('disable');
                    });
                },
                onLeaveBack: () => {
                    heroLogoColors.forEach((heroLogoColor) => {
                        heroLogoColor.classList.remove('disable');
                    });
                },
            },
        });

        scrollTriggers.push(t1.scrollTrigger);

        const tBot2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-diversity',
                start: 'bottom-=100 50%',
                end: 'bottom bottom',
                scrub: 2,
            },
        });

        tBot2
            .to(svgLeft.current, {
                transformOrigin: '0% 50%',
                x: 0,
                y: '38vh',
            }, 'key0')
            .to(svgCenter.current, {
                transformOrigin: '-90% 50%',
                x: 0,
                y: '38vh',
            }, 'key0')
            .to(svgRight.current, {
                transformOrigin: '100% 50%',
                x: 0,
                y: '38vh',
            }, 'key0')
            .to(svgLeft.current, {
                transformOrigin: '0% 50%',
                x: 0,
                y: '38vh',
                scale: 1,
            }, 'key1')
            .to(svgCenter.current, {
                transformOrigin: '-100% 50%',
                x: 0,
                y: '38vh',
                scale: 1,
            }, 'key1')
            .to(svgRight.current, {
                transformOrigin: '100% 50%',
                x: 0,
                y: '38vh',
                scale: 1,
            }, 'key1');

        scrollTriggers.push(tBot2.scrollTrigger);

        return () => {
            scrollTriggers.forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="header-logo nuxt-link-exact-active nuxt-link-active">
            <div className="header-logo__svg header-logo__svg--left" ref={svgLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1037 180" className="header-logo-mover">
                    <path d="M0 179.636V0h71.925c13.215 0 24.238 1.959 33.068 5.877 8.829 3.918 15.466 9.356 19.91 16.314 4.445 6.9 6.667 14.853 6.667 23.858 0 7.017-1.404 13.187-4.211 18.508-2.806 5.263-6.666 9.59-11.578 12.981-4.853 3.333-10.408 5.702-16.665 7.105v1.754c6.841.293 13.244 2.222 19.209 5.79 6.023 3.566 10.906 8.566 14.648 14.998 3.742 6.374 5.614 13.976 5.614 22.806 0 9.531-2.369 18.039-7.105 25.524-4.678 7.427-11.607 13.303-20.788 17.631-9.181 4.327-20.496 6.49-33.945 6.49H0Zm37.98-31.05h30.962c10.585 0 18.303-2.017 23.157-6.052 4.853-4.094 7.28-9.532 7.28-16.315 0-4.97-1.199-9.356-3.596-13.157-2.398-3.801-5.819-6.783-10.263-8.947-4.385-2.163-9.619-3.245-15.7-3.245H37.98v47.716Zm0-73.416h28.156c5.204 0 9.824-.906 13.858-2.719 4.094-1.871 7.31-4.503 9.649-7.894 2.397-3.392 3.596-7.456 3.596-12.192 0-6.491-2.31-11.725-6.93-15.7-4.56-3.977-11.051-5.965-19.472-5.965H37.98v44.47Z"></path>
                    <path d="M146.01 179.636V0h121.044v31.314H183.99v42.804h76.836v31.313H183.99v42.892h83.415v31.313H146.01Z" className="bennett__letter"></path>
                    <path d="M430.212 0v179.636h-32.805L319.254 66.574h-1.315v113.062h-37.98V0h33.331l77.538 112.974h1.579V0h37.805Z" className="bennett__letter"></path>
                    <path d="M594.553 0v179.636h-32.804L483.596 66.574h-1.315v113.062h-37.98V0h33.331l77.538 112.974h1.579V0h37.804Z" className="bennett__letter"></path>
                    <path d="M608.643 179.636V0h121.044v31.314h-83.065v42.804h76.837v31.313h-76.837v42.892h83.416v31.313H608.643Z" className="bennett__letter"></path>
                    <path d="M735.75 31.314V0h147.534v31.314h-54.996v148.322h-37.542V31.314H735.75Z" className="bennett__letter"></path>
                    <path d="M889.463 31.314V0H1037v31.314h-55v148.322h-37.541V31.314h-54.996Z" className="bennett__letter"></path>
                </svg>
            </div>
            <div className="header-logo__svg header-logo__svg--center" ref={svgCenter}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 189 223" className="header-logo-mover">
                    <path d="M73.164 222.164c-14.906 0-27.773-2.672-38.602-8.016-10.828-5.343-19.16-12.585-24.996-21.726-5.765-9.211-8.648-19.477-8.648-30.797 0-8.438 1.687-15.926 5.062-22.465s8.086-12.551 14.133-18.035c6.047-5.555 13.078-11.074 21.094-16.559l41.871-27.527c5.414-3.445 9.387-7.066 11.918-10.863 2.531-3.867 3.797-8.051 3.797-12.551 0-4.29-1.723-8.262-5.168-11.918-3.445-3.656-8.332-5.45-14.66-5.379-4.219 0-7.875.95-10.969 2.848-3.094 1.828-5.52 4.254-7.277 7.277-1.688 2.953-2.532 6.258-2.532 9.914 0 4.5 1.266 9.07 3.797 13.711 2.532 4.64 5.907 9.563 10.125 14.766a2744.39 2744.39 0 0 0 13.817 16.664L188.336 219h-46.828l-85.43-95.133a630.818 630.818 0 0 1-16.875-20.039c-5.555-7.031-10.195-14.484-13.922-22.36-3.726-7.945-5.59-16.558-5.59-25.84 0-10.476 2.426-19.898 7.278-28.265C31.89 18.996 38.78 12.387 47.64 7.535 56.5 2.613 66.836.152 78.648.152c11.532 0 21.481 2.356 29.848 7.067 8.438 4.64 14.906 10.828 19.406 18.562 4.571 7.664 6.856 16.102 6.856 25.313 0 10.195-2.531 19.441-7.594 27.738-4.992 8.227-12.023 15.61-21.094 22.148l-44.086 31.747c-5.976 4.359-10.406 8.824-13.289 13.394-2.812 4.5-4.218 8.824-4.218 12.973 0 5.133 1.265 9.738 3.796 13.816 2.532 4.078 6.118 7.313 10.758 9.703 4.64 2.321 10.09 3.481 16.348 3.481 7.594 0 15.082-1.723 22.465-5.168 7.453-3.516 14.203-8.473 20.25-14.871 6.117-6.469 11.004-14.133 14.66-22.993 3.656-8.859 5.484-18.667 5.484-29.425h37.231c0 13.218-1.442 25.136-4.324 35.754-2.883 10.547-6.891 19.757-12.024 27.632-5.133 7.805-11.004 14.204-17.613 19.196a392.014 392.014 0 0 1-6.117 3.797 387.092 387.092 0 0 0-6.118 3.796c-8.015 6.469-16.98 11.145-26.894 14.028-9.844 2.883-19.582 4.324-29.215 4.324Z"></path>
                </svg>
            </div>
            <div className="header-logo__svg header-logo__svg--right" ref={svgRight}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 748 217" className="header-logo-mover">
                    <path d="M190.097 76.837H144.92c-.826-5.844-2.51-11.036-5.055-15.574-2.544-4.606-5.81-8.526-9.798-11.757-3.989-3.232-8.596-5.707-13.822-7.426-5.157-1.72-10.761-2.579-16.813-2.579-10.933 0-20.457 2.716-28.571 8.148-8.114 5.363-14.406 13.202-18.876 23.516-4.47 10.244-6.704 22.69-6.704 37.335 0 15.058 2.235 27.709 6.704 37.954 4.539 10.245 10.865 17.981 18.98 23.206 8.113 5.226 17.5 7.839 28.158 7.839 5.982 0 11.518-.791 16.606-2.373 5.158-1.581 9.73-3.884 13.719-6.91 3.988-3.094 7.289-6.841 9.902-11.242 2.681-4.4 4.538-9.419 5.57-15.058l45.177.207c-1.169 9.694-4.091 19.046-8.767 28.053-4.607 8.938-10.83 16.949-18.669 24.031-7.771 7.013-17.054 12.582-27.85 16.708-10.727 4.057-22.864 6.085-36.41 6.085-18.841 0-35.688-4.263-50.541-12.789-14.785-8.526-26.474-20.868-35.07-37.026C4.263 151.027 0 131.465 0 108.5c0-23.034 4.332-42.63 12.996-58.788 8.665-16.158 20.423-28.466 35.276-36.923C63.125 4.263 79.835 0 98.401 0c12.24 0 23.586 1.719 34.038 5.157 10.521 3.438 19.838 8.457 27.952 15.058 8.115 6.532 14.716 14.542 19.804 24.03 5.158 9.49 8.458 20.353 9.902 32.592Z" className="clive__letter"></path>
                    <path d="M201.792 214.112V2.888h44.662v174.404h90.562v36.82H201.792Z" className="clive__letter"></path>
                    <path d="M390.923 2.888v211.224h-44.662V2.888h44.662Z" className="clive__letter"></path>
                    <path d="m445.5 2.888 51.057 160.481h1.96l51.16-160.481h49.51l-72.821 211.224h-57.555L395.887 2.888H445.5Z" className="clive__letter"></path>
                    <path d="M604.281 214.112V2.888h142.341v36.82h-97.679v50.33h90.355v36.82h-90.355v50.434h98.091v36.82H604.281Z" className="clive__letter"></path>
                </svg>
            </div>
            <div className="header-logo__placeholder header-logo__placeholder--left"></div>
            <div className="header-logo__placeholder header-logo__placeholder--center"></div>
            <div className="header-logo__placeholder header-logo__placeholder--right"></div>
            <div className="header-logo__footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1899 185" className="">
                    <g className="logo__bennett">
                        <path d="M0 182.092V2.456h71.925c13.215 0 24.238 1.959 33.068 5.877 8.829 3.918 15.466 9.356 19.91 16.314 4.445 6.9 6.667 14.853 6.667 23.858 0 7.017-1.404 13.186-4.211 18.508-2.806 5.263-6.666 9.59-11.578 12.981-4.853 3.333-10.408 5.702-16.665 7.105v1.754c6.841.293 13.244 2.222 19.209 5.79 6.023 3.566 10.906 8.566 14.648 14.998 3.742 6.374 5.614 13.976 5.614 22.806 0 9.531-2.369 18.039-7.105 25.524-4.678 7.427-11.607 13.303-20.788 17.631-9.181 4.327-20.496 6.49-33.945 6.49H0Zm37.98-31.05h30.962c10.585 0 18.303-2.017 23.157-6.052 4.853-4.094 7.28-9.532 7.28-16.315 0-4.97-1.199-9.356-3.596-13.157-2.398-3.801-5.819-6.783-10.263-8.947-4.385-2.163-9.619-3.245-15.7-3.245H37.98v47.716Zm0-73.416h28.156c5.204 0 9.824-.906 13.858-2.719 4.094-1.871 7.31-4.503 9.649-7.894 2.397-3.392 3.596-7.456 3.596-12.192 0-6.491-2.31-11.725-6.93-15.701-4.56-3.976-11.051-5.964-19.472-5.964H37.98v44.47Z"></path>
                        <path d="M146.01 182.092V2.456h121.044V33.77H183.99v42.803h76.836v31.314H183.99v42.892h83.415v31.313H146.01Z"></path>
                        <path d="M430.212 2.456v179.636h-32.805L319.254 69.03h-1.315v113.062h-37.98V2.456h33.331l77.538 112.974h1.579V2.456h37.805Z"></path>
                        <path d="M594.553 2.456v179.636h-32.804L483.596 69.03h-1.315v113.062h-37.98V2.456h33.331L555.17 115.43h1.579V2.456h37.804Z"></path>
                        <path d="M608.643 182.092V2.456h121.044V33.77h-83.065v42.803h76.837v31.314h-76.837v42.892h83.416v31.313H608.643Z"></path>
                        <path d="M735.75 33.77V2.456h147.534V33.77h-54.996v148.322h-37.542V33.769H735.75Z"></path>
                        <path d="M889.463 33.77V2.456H1037V33.77h-55v148.322h-37.541V33.769h-54.996Z"></path>
                    </g>
                    <g className="logo__and">
                        <path d="M1132.25 184.724c-12.4 0-23.1-2.222-32.11-6.666-9-4.445-15.93-10.468-20.78-18.069-4.8-7.661-7.2-16.198-7.2-25.613 0-7.017 1.41-13.244 4.21-18.682 2.81-5.439 6.73-10.438 11.76-14.999 5.03-4.62 10.87-9.21 17.54-13.771l34.82-22.894c4.51-2.865 7.81-5.876 9.91-9.034 2.11-3.216 3.16-6.695 3.16-10.438 0-3.567-1.43-6.87-4.3-9.911-2.86-3.041-6.93-4.532-12.19-4.474-3.51 0-6.55.79-9.12 2.369-2.57 1.52-4.59 3.537-6.05 6.052-1.41 2.456-2.11 5.204-2.11 8.245 0 3.742 1.05 7.543 3.16 11.403 2.11 3.859 4.91 7.952 8.42 12.28 3.51 4.268 7.34 8.888 11.49 13.858l85.17 97.712h-38.94l-71.05-79.117A525.024 525.024 0 0 1 1104 86.31c-4.62-5.848-8.47-12.046-11.57-18.596-3.1-6.607-4.65-13.77-4.65-21.49 0-8.712 2.01-16.548 6.05-23.506 4.09-6.959 9.82-12.456 17.19-16.49 7.37-4.094 15.96-6.14 25.79-6.14 9.59 0 17.86 1.959 24.82 5.876 7.02 3.86 12.4 9.006 16.14 15.438 3.8 6.374 5.7 13.39 5.7 21.051 0 8.48-2.1 16.169-6.31 23.069-4.16 6.841-10 12.981-17.55 18.42l-36.66 26.401c-4.97 3.626-8.65 7.339-11.05 11.14-2.34 3.742-3.51 7.338-3.51 10.788 0 4.269 1.05 8.099 3.16 11.491 2.1 3.391 5.08 6.081 8.94 8.069 3.86 1.93 8.4 2.895 13.6 2.895 6.31 0 12.54-1.433 18.68-4.298 6.2-2.924 11.81-7.046 16.84-12.368 5.09-5.379 9.15-11.753 12.2-19.121 3.04-7.368 4.56-15.525 4.56-24.472h30.96c0 10.993-1.2 20.905-3.6 29.735-2.39 8.771-5.73 16.431-10 22.981-4.26 6.49-9.15 11.812-14.64 15.963a330.678 330.678 0 0 1-5.09 3.158c-1.64.994-3.33 2.047-5.09 3.158-6.67 5.379-14.12 9.268-22.37 11.665-8.18 2.398-16.28 3.597-24.29 3.597Z"></path>
                    </g>
                    <g className="logo__clive">
                        <path d="M1425.39 65.346h-38.42c-.7-4.97-2.14-9.385-4.3-13.244-2.16-3.918-4.94-7.251-8.33-10-3.4-2.748-7.31-4.853-11.76-6.315-4.38-1.462-9.15-2.193-14.29-2.193-9.3 0-17.4 2.31-24.3 6.93-6.9 4.56-12.25 11.227-16.05 19.998-3.8 8.713-5.7 19.297-5.7 31.752 0 12.806 1.9 23.566 5.7 32.279 3.86 8.712 9.24 15.291 16.14 19.735 6.9 4.444 14.88 6.666 23.94 6.666 5.09 0 9.8-.672 14.12-2.017 4.39-1.345 8.28-3.304 11.67-5.877a33.844 33.844 0 0 0 8.42-9.561c2.28-3.742 3.86-8.011 4.74-12.806l38.42.176c-1 8.245-3.48 16.197-7.46 23.858-3.92 7.601-9.21 14.414-15.88 20.437-6.6 5.964-14.5 10.701-23.68 14.209-9.12 3.45-19.44 5.175-30.96 5.175-16.02 0-30.35-3.625-42.98-10.876-12.57-7.251-22.51-17.747-29.82-31.489-7.25-13.742-10.88-30.378-10.88-49.909 0-19.59 3.68-36.255 11.05-49.996 7.37-13.742 17.37-24.21 30-31.402C1317.41 3.626 1331.62 0 1347.41 0c10.41 0 20.06 1.462 28.94 4.386 8.95 2.923 16.87 7.192 23.77 12.806 6.9 5.555 12.52 12.367 16.85 20.437 4.38 8.07 7.19 17.309 8.42 27.717Z"></path>
                        <path d="M1435.33 182.092V2.456h37.98v148.323h77.01v31.313h-114.99Z"></path>
                        <path d="M1596.16 2.456v179.636h-37.98V2.456h37.98Z"></path>
                        <path d="m1642.58 2.456 43.41 136.482h1.67l43.51-136.482h42.1l-61.93 179.636h-48.94L1600.39 2.456h42.19Z"></path>
                        <path d="M1777.6 182.092V2.456h121.04V33.77h-83.06v42.803h76.84v31.314h-76.84v42.892h83.41v31.313H1777.6Z"></path>
                    </g>
                </svg>
            </div>
        </div>
    );
}
export default HeaderLogo;