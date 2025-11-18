import React from "react";
import { useScrollToHash } from "../hooks/useScrollToHash";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Starfield from "../components/Starfield";

export default function Home() {
	useScrollToHash(); // ✨ Simple y limpio

	return (
		<>
			<Starfield />
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</>
	);
}
