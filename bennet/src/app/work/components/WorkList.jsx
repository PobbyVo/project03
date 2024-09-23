"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import "./WorkList.scss";

const WorkList = () => {
	useEffect(() => {
		const items = document.querySelectorAll(".work-list-item");
		// Danh sách các lớp 'before' ngẫu nhiên
		const beforeClasses = ["class1", "class2", "class3", "class4", "class5"];
		items.forEach((item) => {
			// Chọn ngẫu nhiên một lớp từ danh sách
			const randomBeforeClass =
				beforeClasses[Math.floor(Math.random() * beforeClasses.length)];

			// Thêm lớp ngẫu nhiên cho phần tử .img của work-list-item
			const video = item.querySelector("video");
			item.querySelector(".img").classList.add(randomBeforeClass);

			// Kiểm tra xem video có tồn tại không trước khi thực hiện
			// Tạo một animation timeline
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					toggleActions: "play none none none",
					// markers: true,
					// stagger: 0.04,
					onEnter: () => {
						if (video) {
							video.play(); // Khi cuộn vào view, video sẽ phát
						}
						item.querySelector(".img").classList.add("hide-before"); // Ẩn lớp hide-before
					},
					onLeaveBack: () => {
						if (video) {
							video.pause(); // Khi cuộn ra khỏi view, video sẽ tạm dừng
						}
						item.querySelector(".img").classList.remove("hide-before"); // Hiển thị lớp hide-before trở lại
					},
				},
			});

			// Thêm animation vào timeline
			tl.to(item, {
				opacity: 1, // Hiển thị work-list-item khi cuộn đến 70%
				y: 0, // Slide-up
				duration: 2,
			});
		});
		//

		gsap.to(".work-title", {
			duration: 1,
			scale: 1,
			transformOrigin: "0 0",
		});

		// hover test nè bạn

		const workHoverTitles = document.querySelectorAll(".work-hover-title");
		const workTitle = document.querySelector(".work-title");
		const workListItems = document.querySelectorAll(".work-list-item");
		let currentIndex = null;

		gsap.set(workHoverTitles, { opacity: 0 });
		gsap.set(".work-hero__line", { opacity: 0 });

		const handleMouseEnter = (index) => {
			if (currentIndex === index) return;

			if (currentIndex !== null) {
				gsap.to(workHoverTitles[currentIndex], {
					opacity: 0,
					duration: 0.2,
					scale: 0,
					onComplete: () => {
						showHoverTitle(index);
					},
				});
			} else {
				showHoverTitle(index);
			}
			currentIndex = index;
		};

		const showHoverTitle = (index) => {
			gsap
				.timeline()
				.to(workTitle, {
					opacity: 0,
					duration: 0.1,
					scale: 0,
					transformOrigin: "unset",
				})
				.set(workHoverTitles, { opacity: 0 })
				.to(workHoverTitles[index], {
					opacity: 1,
					duration: 0.2,
					scale: 1,
					transformOrigin: "0 0",
				})
				.to(workHoverTitles[index].querySelectorAll(".work-hero__line"), {
					opacity: 1,
					duration: 0.2,
					stagger: 0.04,
					scale: 1,
					transformOrigin: "0 0",
				});

			workListItems.forEach((item, i) => {
				if (i !== index) item.classList.add("blur");
			});
		};

		const handleMouseLeave = () => {
			currentIndex = null;

			gsap
				.timeline()
				.set(workHoverTitles, {
					opacity: 0,
					duration: 0.1,
					scale: 0,
					transformOrigin: "unset",
				})
				.to(workTitle, {
					opacity: 1,
					duration: 0.2,
					scale: 1,
					transformOrigin: "0 0",
				})
				.set(".work-hero__line", {
					opacity: 0,
					duration: 0.1,
					scale: 0,
					transformOrigin: "unset",
				});

			workListItems.forEach((item) => {
				item.classList.remove("blur");
			});
		};

		workListItems.forEach((item, index) => {
			item.addEventListener("mouseenter", () => handleMouseEnter(index));
			item.addEventListener("mouseleave", handleMouseLeave);
		});

		return () => {
			workListItems.forEach((item, index) => {
				item.removeEventListener("mouseenter", () => handleMouseEnter(index));
				item.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	}, []);

	return (
		<div className="work-list grid">
			{/* <h1 className="work-title title-fixed ttu">Work</h1> */}
			<div className="work-hover-titles title-fixed">
				{/* 1-4 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Khakis</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Adidas by</div>
						<div className="work-hero__line">steplla</div>
						<div className="work-hero__line">mccartney</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Adidas by</div>
						<div className="work-hero__line">pharrell</div>
						<div className="work-hero__line">williams</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">MAC lipglass</div>
					</div>
				</div>
				{/* end 1-4 */}
				{/* 5-8 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Hourglass</div>
						<div className="work-hero__line">Curator</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">U Beauty Face</div>
						<div className="work-hero__line">Oil</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">BOSS By Hugo</div>
						<div className="work-hero__line">Boss</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Naturals</div>
					</div>
				</div>
				{/* end 5-8 */}
				{/* 9-12 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Eilish Eau De</div>
						<div className="work-hero__line">Parfum</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Ilia C Beyond</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Calvins Or</div>
						<div className="work-hero__line">Nothing</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">adidas</div>
						<div className="work-hero__line">Originals</div>
					</div>
				</div>
				{/* end 9-12 */}
				{/* 13-16 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Instagram No</div>
						<div className="work-hero__line">Right Way</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Athletics</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Ilia Super</div>
						<div className="work-hero__line">Serum Skin</div>
						<div className="work-hero__line">Tint</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Augustinus</div>
						<div className="work-hero__line">Bader</div>
					</div>
				</div>
				{/* end 13-16 */}
				{/* 17-20 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">U Beauty</div>
						<div className="work-hero__line">Super Tinted</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Graff Wild</div>
						<div className="work-hero__line">Flower</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Harpers</div>
						<div className="work-hero__line">Bazaar</div>
						<div className="work-hero__line">Upcycle</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">adidas</div>
						<div className="work-hero__line">Originals</div>
					</div>
				</div>
				{/* end 17-20 */}
				{/* 21-24 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">adidas By</div>
						<div className="work-hero__line">Stella</div>
						<div className="work-hero__line">McCartney</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Hourglass</div>
						<div className="work-hero__line">Red 0</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">ILIA True Skin</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">MAC Studio</div>
						<div className="work-hero__line">Fix</div>
					</div>
				</div>
				{/* end 21-24 */}
				{/* 25-28 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Hourglass</div>
						<div className="work-hero__line">Arch Brow</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Clinique</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">MAC Magic</div>
						<div className="work-hero__line">Extension</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">U Beauty</div>
					</div>
				</div>
				{/* end 25-28 */}
				{/* 29-32 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">The Outset</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Kaleidoscope</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Living Proof</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">adidas By</div>
						<div className="work-hero__line">Stella</div>
						<div className="work-hero__line">McCartney</div>
					</div>
				</div>
				{/* end 29-32 */}
				{/* 33-36 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">MAC Locked</div>
						<div className="work-hero__line">Kiss</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Vegamour</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">U Beauty</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">MAC Stack</div>
						<div className="work-hero__line">Mascara</div>
					</div>
				</div>
				{/* end 33-36 */}
				{/* 37-40 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">CO By</div>
						<div className="work-hero__line">Colgate</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">ILIA Eye Matte</div>
						<div className="work-hero__line">Tint</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">MAC Colour</div>
						<div className="work-hero__line">Excess</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Adidas</div>
						<div className="work-hero__line">Originals</div>
					</div>
				</div>
				{/* end 37-40 */}
				{/* 41-44 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">205w39</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Dior</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">205w39</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Hugo Boss</div>
					</div>
				</div>
				{/* end 41-44 */}
				{/* 45-48 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">CK One</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">My Truth</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Adidas Pure</div>
						<div className="work-hero__line">Boost</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Underwear</div>
					</div>
				</div>
				{/* end 45-48 */}
				{/* 49-52 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Numero</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Jeans</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">W Magazine</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Main Label</div>
					</div>
				</div>
				{/* end 49-52 */}
				{/* 53-56 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Vogue</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Watches</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Dior Magazine</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Interview</div>
					</div>
				</div>
				{/* end 53-56 */}
				{/* 56-60 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Performance</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Givenchy</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Numero</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Sportswear</div>
					</div>
				</div>
				{/* end 56-60 */}
				{/* 61-64 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Interview</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Love</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Prada</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Interview</div>
					</div>
				</div>
				{/* end 61-64 */}
				{/* 65-68 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Performance</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Violet Grey</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Calvin Klein</div>
						<div className="work-hero__line">Energy</div>
					</div>
				</div>
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Vogue</div>
					</div>
				</div>
				{/* end 65-68 */}
				{/* end 69 */}
				<div className="work-hover-title h1 ttu">
					<div className="text-splitter text-splitter--splitted">
						<div className="work-hero__line">Zara Man</div>
					</div>
				</div>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKleinKhakis.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">001</span>
						<span className="work-list-item__title">Calvin Klein Khakis</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-01.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">002</span>
						<span className="work-list-item__title">
							adidas By Stella McCartney
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/adidasByPharrellWilliams.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">003</span>
						<span className="work-list-item__title">
							adidas By Pharrell Williams
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-02.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">004</span>
						<span className="work-list-item__title">MAC Lipglass</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-03.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">005</span>
						<span className="work-list-item__title">Hourglass Curator</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/UBeautyFaceOil.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">006</span>
						<span className="work-list-item__title">U Beauty Face Oil</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/BOSSByHugoBoss.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">007</span>
						<span className="work-list-item__title">BOSS By Hugo Boss</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-04.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">008</span>
						<span className="work-list-item__title">Calvin Klein Naturals</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-05.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">009</span>
						<span className="work-list-item__title">Eilish Eau De Parfum</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-06.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">010</span>
						<span className="work-list-item__title">Ilia C Beyond</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-07.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">011</span>
						<span className="work-list-item__title">
							Calvin Klein Calvins Or Nothing
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/adidasOriginals.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">012</span>
						<span className="work-list-item__title">adidas Originals</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-13.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">013</span>
						<span className="work-list-item__title">
							Instagram No Right Way
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKleinAthletics.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">014</span>
						<span className="work-list-item__title">
							Calvin Klein Athletics
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-15.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">015</span>
						<span className="work-list-item__title">
							Ilia Super Serum Skin Tint
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-16.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">016</span>
						<span className="work-list-item__title">Augustinus Bader</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/UBeautySuperTinted.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">017</span>
						<span className="work-list-item__title">U Beauty Super Tinted</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-18.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">018</span>
						<span className="work-list-item__title">Graff Wild Flower</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/HarpersBazaarUpcycle.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">019</span>
						<span className="work-list-item__title">
							Harpers Bazaar Upcycle
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/adidasOriginals-1.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">020</span>
						<span className="work-list-item__title">adidas Originals</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-21.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">021</span>
						<span className="work-list-item__title">
							adidas By Stella McCartney
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-22.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">022</span>
						<span className="work-list-item__title">Hourglass Red 0</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/ILIATrueSkin.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">023</span>
						<span className="work-list-item__title">ILIA True Skin</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-24.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">024</span>
						<span className="work-list-item__title">MAC Studio Fix</span>
					</span>
				</a>
			</div>

			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-25.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">025</span>
						<span className="work-list-item__title">Hourglass Arch Brow</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-26.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">026</span>
						<span className="work-list-item__title">Clinique</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/MACMagicExtension.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">027</span>
						<span className="work-list-item__title">MAC Magic Extension</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/UBeauty.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">028</span>
						<span className="work-list-item__title">U Beauty</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-29.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">029</span>
						<span className="work-list-item__title">The Outset</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/Kaleidoscope.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">030</span>
						<span className="work-list-item__title">Kaleidoscope</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-31.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">031</span>
						<span className="work-list-item__title">Living Proof</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-32.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">032</span>
						<span className="work-list-item__title">
							adidas By Stella McCartney
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-33.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">033</span>
						<span className="work-list-item__title">MAC Locked Kiss</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-34.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">034</span>
						<span className="work-list-item__title">Vegamour</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/UBeauty-1.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">035</span>
						<span className="work-list-item__title">U Beauty</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-36.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">036</span>
						<span className="work-list-item__title">MAC Stack Mascara</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-37.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">037</span>
						<span className="work-list-item__title">CO By Colgate</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-38.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">038</span>
						<span className="work-list-item__title">ILIA Eye Matte Tint</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-39.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">039</span>
						<span className="work-list-item__title">MAC Colour Excess</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/AdidasOriginals-2.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">040</span>
						<span className="work-list-item__title">Adidas Originals</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKlein205w39.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">041</span>
						<span className="work-list-item__title">Calvin Klein 205w39</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/dior.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">042</span>
						<span className="work-list-item__title">dior</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKlein205w39-1.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">043</span>
						<span className="work-list-item__title">Calvin Klein 205w39</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/HugoBoss.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">044</span>
						<span className="work-list-item__title">Hugo Boss</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/ckone.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">045</span>
						<span className="work-list-item__title">Ck one</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKleinMyTruth.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">046</span>
						<span className="work-list-item__title">Calvin Klein My Truth</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-47.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">047</span>
						<span className="work-list-item__title">Adidas Pure Boost</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-48.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">048</span>
						<span className="work-list-item__title">
							Calvin Klein Underwear
						</span>
					</span>
				</a>
			</div>

			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/Numero.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">049</span>
						<span className="work-list-item__title">Numero</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKleinJeans.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">050</span>
						<span className="work-list-item__title">Calvin Klein Jeans</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/WMagazine.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">051</span>
						<span className="work-list-item__title">W Magazine</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-52.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">052</span>
						<span className="work-list-item__title">
							Calvin Klein Main Label
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/vogue-1.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">053</span>
						<span className="work-list-item__title">vogue</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKleinWatches.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">054</span>
						<span className="work-list-item__title">Calvin Klein Watches</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/DiorMagazine.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">055</span>
						<span className="work-list-item__title">Dior Magazine</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/Interview-2.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">056</span>
						<span className="work-list-item__title">Interview</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKleinPerformance.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">057</span>
						<span className="work-list-item__title">
							Calvin Klein Performance
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/givenchy.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">058</span>
						<span className="work-list-item__title">givenchy</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/Numero-1.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">059</span>
						<span className="work-list-item__title">Numero</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/CalvinKleinSportswear.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">060</span>
						<span className="work-list-item__title">
							Calvin Klein Sportswear
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/Interview-1.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">061</span>
						<span className="work-list-item__title">Interview</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/love.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">062</span>
						<span className="work-list-item__title">love</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-63.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">063</span>
						<span className="work-list-item__title">PRADA</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/Interview.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">064</span>
						<span className="work-list-item__title">Interview</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-65.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">065</span>
						<span className="work-list-item__title">
							Calvin Klein Performance
						</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/VioletGrey.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">066</span>
						<span className="work-list-item__title">Violet Grey</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-67.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">067</span>
						<span className="work-list-item__title">Calvin Klein Energy</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<img src="./work/Vogue.webp" />
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">068</span>
						<span className="work-list-item__title">Vogue</span>
					</span>
				</a>
			</div>
			<div className="work-list-item">
				<a href="" className="work-list-item__link">
					<span className="img">
						<video width="320" height="240" muted loop>
							<source src="./work/video-69.mp4" />
						</video>
					</span>
					<span className="work-list-item__caption project-label ttu">
						<span className="work-list-item__caption-id">069</span>
						<span className="work-list-item__title">Zara Man</span>
					</span>
				</a>
			</div>
		</div>
	);
};

export default WorkList;
