'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { matchMedia } from 'gsap/all';
import './history.scss';

const History = () => {
    const titleLine0 = useRef(null)
    const titleLine1 = useRef(null)
    const titleLine2 = useRef(null)
    const titleLine3 = useRef(null)
    const titleLine4 = useRef(null)
    const titleLine5 = useRef(null)
    const titleLine6 = useRef(null)
    const titleLine7 = useRef(null)
    const titleLine8 = useRef(null)
    const titleLine9 = useRef(null)
    const titleLine10 = useRef(null)

    const spanLine00 = useRef(null)
    const spanLine01 = useRef(null)
    const spanLine02 = useRef(null)
    const spanLine03 = useRef(null)
    const spanLine04 = useRef(null)
    const spanLine05 = useRef(null)
    const spanLine06 = useRef(null)
    
    const spanLine10 = useRef(null)
    const spanLine11 = useRef(null)
    const spanLine12 = useRef(null)
    const spanLine13 = useRef(null)
    const spanLine14 = useRef(null)
    const spanLine15 = useRef(null)
    const spanLine16 = useRef(null)

    const spanLine20 = useRef(null)
    const spanLine21 = useRef(null)
    const spanLine22 = useRef(null)
    const spanLine23 = useRef(null)
    const spanLine24 = useRef(null)
    const spanLine25 = useRef(null)
    const spanLine26 = useRef(null)

    const spanLine30 = useRef(null)
    const spanLine31 = useRef(null)
    const spanLine32 = useRef(null)
    const spanLine33 = useRef(null)
    const spanLine34 = useRef(null)
    const spanLine35 = useRef(null)
    const spanLine36 = useRef(null)

    const spanLine40 = useRef(null)
    const spanLine41 = useRef(null)
    const spanLine42 = useRef(null)
    const spanLine43 = useRef(null)
    const spanLine44 = useRef(null)
    const spanLine45 = useRef(null)
    const spanLine46 = useRef(null)

    const spanLine50 = useRef(null)
    const spanLine51 = useRef(null)
    const spanLine52 = useRef(null)
    const spanLine53 = useRef(null)
    const spanLine54 = useRef(null)
    const spanLine55 = useRef(null)
    const spanLine56 = useRef(null)

    const spanLine60 = useRef(null)
    const spanLine61 = useRef(null)
    const spanLine62 = useRef(null)
    const spanLine63 = useRef(null)
    const spanLine64 = useRef(null)
    const spanLine65 = useRef(null)
    const spanLine66 = useRef(null)

    const spanLine70 = useRef(null)
    const spanLine71 = useRef(null)
    const spanLine72 = useRef(null)
    const spanLine73 = useRef(null)
    const spanLine74 = useRef(null)
    const spanLine75 = useRef(null)
    const spanLine76 = useRef(null)

    const spanLine80 = useRef(null)
    const spanLine81 = useRef(null)
    const spanLine82 = useRef(null)
    const spanLine83 = useRef(null)
    const spanLine84 = useRef(null)
    const spanLine85 = useRef(null)
    const spanLine86 = useRef(null)

    const spanLine90 = useRef(null)
    const spanLine91 = useRef(null)
    const spanLine92 = useRef(null)
    const spanLine93 = useRef(null)
    const spanLine94 = useRef(null)
    const spanLine95 = useRef(null)
    const spanLine96 = useRef(null)

    const spanLine100 = useRef(null)
    const spanLine101 = useRef(null)
    const spanLine102 = useRef(null)
    const spanLine103 = useRef(null)
    const spanLine104 = useRef(null)
    const spanLine105 = useRef(null)
    const spanLine106 = useRef(null)


    const figWrapper0 = useRef(null)
    const figWrapper1 = useRef(null)
    const figWrapper2 = useRef(null)
    const figWrapper3 = useRef(null)

    const bgOverlay = useRef(null)

    const subTitle = useRef(null)
    const contentFig = useRef(null)
    const contentCopy = useRef(null)
    
    const aboutResponsive = gsap.matchMedia()
    const hisContent = useRef(null)

    useEffect(() => {
        aboutResponsive.add("(max-width: 992px)", () => {
                let aboutRespon = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.about-history',
                        start: 'top 30%',
                        end:'bottom bottom',
                        // markers: true,
                        scrub: 2,
                    },
                })
                .to (
                    '.about-history__fig-inner',
                    {
                        y:"0",
                        stagger:0.2,
                        duration:3,
                    },
                    "key0"
                )
                .to (
                    '.about-history__fig',
                    {
                        y:"0",
                        stagger:0.2,
                        duration:3,
                    },
                    "key0"
                )
                .to (
                    figWrapper0.current,
                    {
                        x:"23.5vw",
                        duration:2.3,
                    },
                    "key1"
                )
                .to (
                    figWrapper1.current,
                    {
                        x:"-23.5vw",
                        duration:2.4,
                    },
                    "key1"
                )
                .to (
                    figWrapper2.current,
                    {
                        x:"20.5vw",
                        duration:2.4,
                    },
                    "key1"
                )
                .to (
                    figWrapper3.current,
                    {
                        x:"-23.5vw",
                        duration:2.3,
                    },
                    "key1"
                )
                .to (
                    figWrapper0.current,
                    {
                        x:"23.5vw",
                        y:"65%",
                        scale:1,
                        duration:2.3,
                    },
                    "key2"
                )
                .to (
                    figWrapper1.current,
                    {
                        x:"-23.5vw",
                        y:"65%",
                        duration:2.4,
                    },
                    "key2"
                )
                .to (
                    figWrapper2.current,
                    {
                        x:"23.5vw",
                        y:"-65%",
                        duration:2.4,
                    },
                    "key2"
                )
                .to (
                    figWrapper3.current,
                    {
                        x:"-23.5vw",
                        y:"-65%",
                        duration:2.3,
                    },
                    "key2"
                )
                .to (
                    spanLine45.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key2"
                )
                .to (
                    spanLine64.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key2"
                )
                .to (
                    titleLine0.current,
                    {
                        x:"-1.23%"
                    },
                    "key2"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"1.23%",
                    },
                    "key2"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-1.23%"
                    },
                    "key2"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"1.23%",
                    },
                    "key2"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-1.23%"
                    },
                    "key2"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"1.23%",
                    },
                    "key2"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-1.23%"
                    },
                    "key2"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"1.23%",
                    },
                    "key2"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-1.23%"
                    },
                    "key2"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"1.23%",
                    },
                    "key2"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-1.23%"
                    },
                    "key2"
                )
    
                .to (
                    spanLine10.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    spanLine15.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    spanLine23.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    spanLine25.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    spanLine31.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    spanLine66.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine0.current,
                    {
                        x:"-3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"3%",
                        duration:2.4,
                    },
                    "key3"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-3%",
                        duration:2.4,
                    },
                    "key3"
                )
                
                .to (
                    figWrapper0.current,
                    {
                        scale:"2",
                        duration:3,
                    },
                    "key3"
                )
                .to (
                    spanLine12.current,
                    {
                        opacity:"1",
                        duration:2.4,
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    spanLine13.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    spanLine44.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    spanLine52.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    spanLine75.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    spanLine85.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    spanLine86.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine0.current,
                    {
                        x:"-6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-6.9%",
                        duration:2.4,
                    },
                    "key4"
                )
                .to (
                    '.about-titles__item-two',
                    {
                        x:"-30%",
                        opacity:0,
                        duration:4,
                    },
                    "key4"
                )
                .to (
                    figWrapper0.current,
                    {
                        scale:"4.5",
                        duration:3,
                    },
                    "key5"
                )
                .to (
                    spanLine00.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine01.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine26.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine30.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine33.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine40.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine43.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine51.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine54.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine56.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine100.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine104.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    spanLine105.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine0.current,
                    {
                        x:"-9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-9.3%",
                        duration:2.4,
                    },
                    "key5"
                )
                .to (
                    figWrapper0.current,
                    {
                        scale:"6",
                        duration:3,
                    },
                    "key6"
                )
                .to (
                    spanLine02.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine03.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine04.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine11.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine22.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine24.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine32.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine36.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine46.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine53.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine71.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine73.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine76.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine84.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine94.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine95.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    spanLine96.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    titleLine0.current,
                    {
                        x:"-10.3%",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"10.3%",
                    },
                    "key6"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-10.3%",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"10.3%",
                    },
                    "key6"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-10.3%",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"10.3%",
                    },
                    "key6"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-10.3%",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"10.3%",
                    },
                    "key6"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-10.3%",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"10.3%",
                    },
                    "key6"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-10.3%",
                        duration:2.4,
                    },
                    "key6"
                )
                .to (
                    figWrapper0.current,
                    {
                        scale:"6.45",
                        duration:1.4,
                    },
                    "key7"
                )
                .to (
                    spanLine05.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine06.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine14.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine16.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine20.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine21.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine34.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine35.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine41.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine42.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine50.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine55.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine65.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine60.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine61.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine62.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine70.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine72.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine74.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine80.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine81.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine82.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine83.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine90.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine91.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine92.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine93.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine101.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine102.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine103.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    spanLine106.current,
                    {
                        opacity:"1",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine0.current,
                    {
                        x:"-16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-16.3%",
                        duration:2.4,
                    },
                    "key7"
                )
                .to (
                    bgOverlay.current,
                    {
                        opacity:1,
                    },
                    "key7"
                )
                .to (
                    hisContent.current,
                    {
                        y:"-120%",
                        stagger:0.22,
                        duration: 40,
                    },
                    "key8"
                )
                .to (
                    titleLine0.current,
                    {
                        x:"-26.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-21.3%",
                        duration:2.4,
                    },
                    "key8"
                )
                // .to (
                //     '.animated',
                //     {
                //         y:"0",
                //         stagger:0.32,
                //         duration: 3.4,
                //     },
                //     "key9"
                // )
                // .to (
                //     contentCopy.current,
                //     {
                //         y:"0%",
                //         stagger:0.06,
                //         duration: 3.8,
                //     },
                //     "key9"
                // )
                .to (
                    titleLine0.current,
                    {
                        x:"-25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-25.3%",
                        duration:2.4,
                    },
                    "key9"
                )
                // .to (
                //     contentCopy.current,
                //     {
                //         y:"0%",
                //         duration: 9.4,
                //     },
                //     "key10"
                // )
                .to (
                    titleLine0.current,
                    {
                        x:"-29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine1.current,
                    {
                        x:"29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine2.current,
                    {
                        x:"-29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine3.current,
                    {
                        x:"29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine4.current,
                    {
                        x:"-29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine5.current,
                    {
                        x:"29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine6.current,
                    {
                        x:"-29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine7.current,
                    {
                        x:"29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine8.current,
                    {
                        x:"-29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine9.current,
                    {
                        x:"29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                .to (
                    titleLine10.current,
                    {
                        x:"-29.3%",
                        duration:2.4,
                    },
                    "key10"
                )
                // .to (
                //     contentCopy.current,
                //     {
                //         y:"-200%",
                //         duration: 6,
                //     },
                //     "key11"
                // )
                // .to (
                //     '.animated',
                //     {
                //         y:"0%",
                //         stagger:0.06,
                //         duration: 10.4,
                //     },
                //     "key11"
                // )
                .to (
                    bgOverlay.current,
                    {
                        scale:1.3,
                        duration: 5.4,
                    },
                    "key11"
                )
            })
        
        let t10 = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.about-history',
					start: 'top 30%',
                    end:'bottom bottom',
					// markers: true,
					scrub: 2,
				},
			})
            t10
            .to (
                '.about-history__fig-inner',
                {
                    y:"0",
                    stagger:0.2,
                    duration:3,
                },
                "key0"
            )
            .to (
                '.about-history__fig',
                {
                    y:"0",
                    stagger:0.2,
                    duration:3,
                },
                "key0"
            )
            .to (
                figWrapper0.current,
                {
                    x:"35.9vw",
                    duration:2.3,
                },
                "key1"
            )
            .to (
                figWrapper1.current,
                {
                    x:"12.5vw",
                    duration:2.4,
                },
                "key1"
            )
            .to (
                figWrapper2.current,
                {
                    x:"-12.5vw",
                    duration:2.4,
                },
                "key1"
            )
            .to (
                figWrapper3.current,
                {
                    x:"-35.9vw",
                    duration:2.3,
                },
                "key1"
            )
            // .to (
            //     figWrapper0.current,
            //     {
            //         // scale:"1.28",
            //         duration:2.4,
            //     },
            //     "key2"
            // )
            .to (
                spanLine45.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key2"
            )
            .to (
                spanLine64.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key2"
            )
            .to (
                titleLine0.current,
                {
                    x:"-1.23%"
                },
                "key2"
            )
            .to (
                titleLine1.current,
                {
                    x:"1.23%",
                },
                "key2"
            )
            .to (
                titleLine2.current,
                {
                    x:"-1.23%"
                },
                "key2"
            )
            .to (
                titleLine3.current,
                {
                    x:"1.23%",
                },
                "key2"
            )
            .to (
                titleLine4.current,
                {
                    x:"-1.23%"
                },
                "key2"
            )
            .to (
                titleLine5.current,
                {
                    x:"1.23%",
                },
                "key2"
            )
            .to (
                titleLine6.current,
                {
                    x:"-1.23%"
                },
                "key2"
            )
            .to (
                titleLine7.current,
                {
                    x:"1.23%",
                },
                "key2"
            )
            .to (
                titleLine8.current,
                {
                    x:"-1.23%"
                },
                "key2"
            )
            .to (
                titleLine9.current,
                {
                    x:"1.23%",
                },
                "key2"
            )
            .to (
                titleLine10.current,
                {
                    x:"-1.23%"
                },
                "key2"
            )

            .to (
                spanLine10.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                spanLine15.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                spanLine23.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                spanLine25.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                spanLine31.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                spanLine66.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine0.current,
                {
                    x:"-3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine1.current,
                {
                    x:"3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine2.current,
                {
                    x:"-3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine3.current,
                {
                    x:"3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine4.current,
                {
                    x:"-3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine5.current,
                {
                    x:"3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine6.current,
                {
                    x:"-3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine7.current,
                {
                    x:"3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine8.current,
                {
                    x:"-3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine9.current,
                {
                    x:"3%",
                    duration:2.4,
                },
                "key3"
            )
            .to (
                titleLine10.current,
                {
                    x:"-3%",
                    duration:2.4,
                },
                "key3"
            )
            
            .to (
                figWrapper0.current,
                {
                    scale:"3",
                    duration:3,
                },
                "key4"
            )
            .to (
                spanLine12.current,
                {
                    opacity:"1",
                    duration:2.4,
                    duration:2.4,
                },
                "key4"
            )
            .to (
                spanLine13.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                spanLine44.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                spanLine52.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                spanLine75.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                spanLine85.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                spanLine86.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine0.current,
                {
                    x:"-6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine1.current,
                {
                    x:"6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine2.current,
                {
                    x:"-6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine3.current,
                {
                    x:"6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine4.current,
                {
                    x:"-6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine5.current,
                {
                    x:"6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine6.current,
                {
                    x:"-6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine7.current,
                {
                    x:"6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine8.current,
                {
                    x:"-6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine9.current,
                {
                    x:"6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                titleLine10.current,
                {
                    x:"-6.9%",
                    duration:2.4,
                },
                "key4"
            )
            .to (
                '.about-titles__item-two',
                {
                    x:"-30%",
                    opacity:0,
                    duration:4,
                },
                "key4"
            )
            .to (
                figWrapper0.current,
                {
                    scale:"4.5",
                    duration:3,
                },
                "key5"
            )
            .to (
                spanLine00.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine01.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine26.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine30.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine33.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine40.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine43.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine51.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine54.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine56.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine100.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine104.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                spanLine105.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine0.current,
                {
                    x:"-9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine1.current,
                {
                    x:"9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine2.current,
                {
                    x:"-9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine3.current,
                {
                    x:"9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine4.current,
                {
                    x:"-9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine5.current,
                {
                    x:"9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine6.current,
                {
                    x:"-9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine7.current,
                {
                    x:"9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine8.current,
                {
                    x:"-9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine9.current,
                {
                    x:"9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                titleLine10.current,
                {
                    x:"-9.3%",
                    duration:2.4,
                },
                "key5"
            )
            .to (
                figWrapper0.current,
                {
                    scale:"6",
                    duration:3,
                },
                "key6"
            )
            .to (
                spanLine02.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine03.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine04.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine11.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine22.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine24.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine32.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine36.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine46.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine53.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine71.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine73.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine76.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine84.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine94.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine95.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                spanLine96.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                titleLine0.current,
                {
                    x:"-10.3%",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                titleLine1.current,
                {
                    x:"10.3%",
                },
                "key6"
            )
            .to (
                titleLine2.current,
                {
                    x:"-10.3%",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                titleLine3.current,
                {
                    x:"10.3%",
                },
                "key6"
            )
            .to (
                titleLine4.current,
                {
                    x:"-10.3%",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                titleLine5.current,
                {
                    x:"10.3%",
                },
                "key6"
            )
            .to (
                titleLine6.current,
                {
                    x:"-10.3%",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                titleLine7.current,
                {
                    x:"10.3%",
                },
                "key6"
            )
            .to (
                titleLine8.current,
                {
                    x:"-10.3%",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                titleLine9.current,
                {
                    x:"10.3%",
                },
                "key6"
            )
            .to (
                titleLine10.current,
                {
                    x:"-10.3%",
                    duration:2.4,
                },
                "key6"
            )
            .to (
                figWrapper0.current,
                {
                    scale:"6.45",
                    duration:1.4,
                },
                "key7"
            )
            .to (
                spanLine05.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine06.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine14.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine16.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine20.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine21.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine34.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine35.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine41.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine42.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine50.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine55.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine65.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine60.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine61.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine62.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine70.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine72.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine74.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine80.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine81.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine82.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine83.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine90.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine91.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine92.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine93.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine101.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine102.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine103.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                spanLine106.current,
                {
                    opacity:"1",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine0.current,
                {
                    x:"-16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine1.current,
                {
                    x:"16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine2.current,
                {
                    x:"-16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine3.current,
                {
                    x:"16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine4.current,
                {
                    x:"-16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine5.current,
                {
                    x:"16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine6.current,
                {
                    x:"-16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine7.current,
                {
                    x:"16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine8.current,
                {
                    x:"-16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine9.current,
                {
                    x:"16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                titleLine10.current,
                {
                    x:"-16.3%",
                    duration:2.4,
                },
                "key7"
            )
            .to (
                bgOverlay.current,
                {
                    opacity:1,
                },
                "key7"
            )
            .to (
                '.animated',
                {
                    y:"-35%",
                    stagger:0.22,
                    duration: 3,
                },
                "key8"
            )
            .to (
                titleLine0.current,
                {
                    x:"-26.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine1.current,
                {
                    x:"21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine2.current,
                {
                    x:"-21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine3.current,
                {
                    x:"21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine4.current,
                {
                    x:"-21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine5.current,
                {
                    x:"21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine6.current,
                {
                    x:"-21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine7.current,
                {
                    x:"21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine8.current,
                {
                    x:"-21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine9.current,
                {
                    x:"21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                titleLine10.current,
                {
                    x:"-21.3%",
                    duration:2.4,
                },
                "key8"
            )
            .to (
                '.animated',
                {
                    y:"-100%",
                    stagger:0.32,
                    duration: 3.4,
                },
                "key9"
            )
            .to (
                contentCopy.current,
                {
                    y:"-25%",
                    stagger:0.06,
                    duration: 3.8,
                },
                "key9"
            )
            .to (
                titleLine0.current,
                {
                    x:"-25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine1.current,
                {
                    x:"25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine2.current,
                {
                    x:"-25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine3.current,
                {
                    x:"25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine4.current,
                {
                    x:"-25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine5.current,
                {
                    x:"25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine6.current,
                {
                    x:"-25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine7.current,
                {
                    x:"25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine8.current,
                {
                    x:"-25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine9.current,
                {
                    x:"25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                titleLine10.current,
                {
                    x:"-25.3%",
                    duration:2.4,
                },
                "key9"
            )
            .to (
                contentCopy.current,
                {
                    y:"-120%",
                    duration: 9.4,
                },
                "key10"
            )
            .to (
                titleLine0.current,
                {
                    x:"-29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine1.current,
                {
                    x:"29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine2.current,
                {
                    x:"-29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine3.current,
                {
                    x:"29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine4.current,
                {
                    x:"-29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine5.current,
                {
                    x:"29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine6.current,
                {
                    x:"-29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine7.current,
                {
                    x:"29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine8.current,
                {
                    x:"-29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine9.current,
                {
                    x:"29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                titleLine10.current,
                {
                    x:"-29.3%",
                    duration:2.4,
                },
                "key10"
            )
            .to (
                contentCopy.current,
                {
                    y:"-200%",
                    duration: 6,
                },
                "key11"
            )
            .to (
                '.animated',
                {
                    y:"-220%",
                    stagger:0.06,
                    duration: 10.4,
                },
                "key11"
            )
            .to (
                bgOverlay.current,
                {
                    scale:1.3,
                    duration: 5.4,
                },
                "key11"
            )

        if (window.innerWidth < 992) {
            if (t10) t10.kill();
        }

        return () => {
            t10.kill();
        };
    },[aboutResponsive])
    return (
        <div className='about-history about-trigger'>
            
            <div className="about-history__scroller about-history__scroller--figs"></div>
            <div className="about-history__scroller about-history__scroller--scaling"></div>
            <div className="about-history__scroller about-history__scroller--content grid">
                <div className="about-history__content-subtitle project-label ttu h3">
                    About Bennett & Clive
                </div>
                <figure className="about-history__content-fig">
                    <div className="base-video base-video--fit base-video--loaded">
                        <video width="1920" height="1080" autoPlay muted loop>
                            <source src="./home/video-08.mp4" type="video/mp4" />
                        </video>
                    </div>
                </figure>
                <div className="about-history__content-copy h4">
                    <p>
                        What if a production company could be so much more than a production company? Not just a capable vendor but a genuinely trusted partner? <br/><br/>Founded by Sara Mouzayanni in 2018 after a decade of dedicated work in the industry, Bennett & Clive is a woman-led team that partners with premier companies across the globe to enrich their visual excellence. Our mission is to partner with you in the most thoughtful way possible, to help build, raise, create and evolve the way the world sees your brand. <br/><br/>While production is core to all our projects, we’ve learned over the years that offering true creative support alongside it can really bring value to our clients. Our award-winning creative team listens attentively and collaborates closely, guiding you through the process. Supporting you every step of the way to build and execute a visually compelling narrative that captivates your audience and strengthens your brand.
                    </p>
                    <p>
                        We also work directly with agencies seeking production support, <span style={{ color: 'rgb(0, 0, 0)' }}>the humble assured force that amplifies your brilliance</span>. <span style={{ color: 'rgb(0, 0, 0)' }}>By working closely together, our aim is to not just elevate but to execute your creative vision in the most optimal way.</span><br/><br/>Rooted in a foundation of mutual trust and understanding, Bennett & Clive continues to grow by committing to a single noble ideal: When your brand soars, so do we.
                    </p>
                </div>
            </div>
            <div className="about-history__sticky-container">
                <div className="about-history__sticky">
                    <div className="about-history__titles-container h1 ttu">
                        <div className="about-history__title-line" ref={titleLine0}>
                            <span className="about-history__title-line-span" ref={spanLine00}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine01}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine02}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine03}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine04}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine05}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine06}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine1}>
                            <span className="about-history__title-line-span" ref={spanLine10}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine11}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine12}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine13}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine14}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine15}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine16}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine2}>
                            <span className="about-history__title-line-span" ref={spanLine20}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine21}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine22}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine23}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine24}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine25}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine26}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine3}>
                            <span className="about-history__title-line-span" ref={spanLine30}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine31}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine32}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine33}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine34}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine35}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine36}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine4}>
                            <span className="about-history__title-line-span" ref={spanLine40}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine41}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine42}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine43}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine44}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine45}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine46}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine5}>
                            <span className="about-history__title-line-span" ref={spanLine50}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine51}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine52}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine53}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine54}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine55}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine56}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine6}>
                            <span className="about-history__title-line-span" ref={spanLine60}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine61}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine62}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine63}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine64}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine65}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine66}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine7}>
                            <span className="about-history__title-line-span" ref={spanLine70}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine71}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine72}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine73}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine74}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine75}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine76}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine8}>
                            <span className="about-history__title-line-span" ref={spanLine80}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine81}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine82}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine83}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine84}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine85}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine86}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine9}>
                            <span className="about-history__title-line-span" ref={spanLine90}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine91}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine92}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine93}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine94}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine95}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine96}>About</span>
                        </div>
                        <div className="about-history__title-line about-history__title-line--clone" ref={titleLine10}>
                            <span className="about-history__title-line-span" ref={spanLine100}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine101}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine102}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine103}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine104}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine105}>About</span>
                            <span className="about-history__title-line-span" ref={spanLine106}>About</span>
                        </div>
                    </div>
                    <div className="about-history__figs-container grid">
                        <div className="about-history__fig-wrapper" ref={figWrapper0}>
                            <div className="about-history__fig-inner">
                                <figure className="about-history__fig">
                                    <video width="1920" height="1080" autoPlay muted loop>
                                        <source src="./../about/video-08.mp4" type="video/mp4" />
                                    </video>
                                </figure>
                            </div>
                        </div>
                        <div className="about-history__fig-wrapper" ref={figWrapper1}>
                            <div className="about-history__fig-inner">
                                <figure className="about-history__fig">
                                    <picture className="base-image base-image--fit base-image--loaded">
                                        <img src="./about/history-01.png" alt="" />
                                    </picture>
                                </figure>
                            </div>
                        </div>
                        <div className="about-history__fig-wrapper" ref={figWrapper2}>
                            <div className="about-history__fig-inner">
                                <figure className="about-history__fig">
                                    <picture className="base-image base-image--fit base-image--loaded">
                                        <img src="./about/history-02.png" alt="" />
                                    </picture>
                                </figure>
                            </div>
                        </div>
                        <div className="about-history__fig-wrapper" ref={figWrapper3}>
                            <div className="about-history__fig-inner">
                                <figure className="about-history__fig">
                                    <picture className="base-image base-image--fit base-image--loaded">
                                        <img src="./about/history-03.png" alt="" />
                                    </picture>
                                </figure>
                            </div>
                        </div>
                        <div className="about-history__fig-placeholder"></div>
                    </div>
                    <div className="about-history__overlay" ref={bgOverlay}></div>
                    <div className="about-history__content-wrapper" style={{ '--rightY': '0%', '--leftY': '0%' }}>
                        <div className="about-history__content grid" ref={hisContent}>
                            <div className="about-history__content-subtitle about-history__content-subtitle--animated animated" ref={subTitle}>
                                <h3 className="project-label ttu">
                                    About Bennett & Clive
                                </h3>
                            </div>
                            <div className="about-history__content-fig about-history__content-fig--animated animated" ref={contentFig}>
                                <div className="about-history__content-fig">
                                    <figure className="">
                                        <div className="base-video base-video--fit base-video--loaded">
                                            <video width="1920" height="1080" autoPlay muted loop>
                                                <source src="./home/video-08.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </figure>
                                </div>
                                    
                            </div>
                            <div className="about-history__content-copy h4" ref={contentCopy}>
                                <p>What if a production company could be so much more than a production company? Not just a capable vendor but a genuinely trusted partner? <br/><br/>Founded by Sara Mouzayanni in 2018 after a decade of dedicated work in the industry, Bennett &amp; Clive is a woman-led team that partners with premier companies across the globe to enrich their visual excellence. Our mission is to partner with you in the most thoughtful way possible, to help build, raise, create and evolve the way the world sees your brand. <br/><br/>While production is core to all our projects, we’ve learned over the years that offering true creative support alongside it can really bring value to our clients. Our award-winning creative team listens attentively and collaborates closely, guiding you through the process. Supporting you every step of the way to build and execute a visually compelling narrative that captivates your audience and strengthens your brand. </p>
                                <p>We also work directly with agencies seeking production support, <span style={{ color: 'rgb(0, 0, 0)' }}>the humble assured force that amplifies your brilliance</span>. <span style={{ color: 'rgb(0, 0, 0)' }}>By working closely together, our aim is to not just elevate but to execute your creative vision in the most optimal way.</span><br/><br/>Rooted in a foundation of mutual trust and understanding, Bennett &amp; Clive continues to grow by committing to a single noble ideal: When your brand soars, so do we.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
