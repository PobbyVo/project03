"use client";
import WorkList from "./components/WorkList"
import HeaderLogo from "@/components/headerLogo/HeaderLogo";
import "./work.scss"
function Work() {
    return (
		<main>	
			<HeaderLogo />
			<div className="work is-visible">
				<WorkList />
			</div>
		</main>
    )
}

export default Work
