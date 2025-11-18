import React from "react";

export default function Hero() {
	return (
		<section id="home" className="section hero">
			<div className="inner container">
				<h2>Desarrollador Web</h2>
				<h1>Samuel Alejandro Vargas Jiménez</h1>
				<p style={{ maxWidth: 720, margin: "0 auto", color: "var(--muted)" }}>
					Desarrollador FullStack | Node.js + React | Seguridad Social + SEO Técnico
				</p>
				<div className="cta">
					<a className="btn" href="#projects">
						Ver proyectos
					</a>
					<a className="btn secondary" href="#contact">
						Contactar
					</a>
				</div>
			</div>
		</section>
	);
}
