import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Logo from "public/zf.png";
import Image from "next/image";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-400 hover:text-zinc-100"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={500}
			/>

			<Image src={Logo} alt="description of image" width={200} height={200} />
			<h1 className="z-10 my-5 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				ZappFinity
			</h1>
			<h6 className="z-10 text-1xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-6xl whitespace-nowrap bg-clip-text ">
				Beyond Infinity
			</h6>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					ZappFinity is a software development company based in Pakistan. We can
					build your product like mobile applications using {" "}
					<Link
						target="_blank"
						href="https://flutter.dev/"
						className="underline duration-500 hover:text-zinc-300"
					>
						FLUTTER,
					</Link>

					<br />
					management systems i.e., CRMs, ERPs, RMSs, CMS, using {" "} 
					<Link
						target="_blank"
						href="https://laravel.com/"
						className="underline duration-500 hover:text-zinc-300"
					>
					LARAVEL
					</Link>{" "}.
				</h2>
			</div>
		</div>
	);
}
