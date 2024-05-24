
'use client'
import { gsap } from "gsap";
import Hero from "./components/hero/Hero";
import History from "./components/history/History";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import TitleFixed from "./components/titleFixed/TitleFixed";
import Sustainability from "./components/sustainability/Sustainability";
import Diversity from "./components/diversity/Diversity";
const About = () => {
    return (
        <div className="About">
			<HeaderLogo />
            <TitleFixed />
			<Hero />
            <History />
            <Sustainability />
            <Diversity />
		</div>
    );
};

export default About;
