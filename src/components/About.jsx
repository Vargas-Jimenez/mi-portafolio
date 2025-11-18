import React from "react";
import { useReveal } from "./useReveal";

export default function About() {
	useReveal(".card");

	const skills = [
		"React",
		"Node.js",
		"Express",
		"TypeScript",
		"JavaScript",
		"PostgreSQL",
		"SQLite",
		"MongoDB",
		"Vite",
		"Git & GitHub",
		"SEO Técnico",
		"Open Graph",
		"Schema.org",
		"Google Search Console",
		"API Siigo",
		"API Simple",
		"API Arus",
		"Electron Forge",
	];

	return (
		<section id="about" className="section">
			<div className="inner container">
				<h2>Sobre mí</h2>
				<p style={{ color: "var(--muted)", marginBottom: "48px" }}>
					Me apasiona desarrollar páginas web con una estética personalizada y completa. Trabajo con React, Node y bases de datos para
					construir experiencias completas. Valoro la calidad antes que la cantidad.
				</p>

				<h2>Perfil Profesional</h2>

				<div
					style={{
						background: "var(--card)",
						border: "1px solid var(--border)",
						borderRadius: "18px",
						padding: "24px",
						marginBottom: "32px",
						boxShadow: "var(--shadow)",
					}}
				>
					<h3 style={{ color: "var(--primary)", marginTop: 0 }}>
						Desarrollador FullStack | Node.js + React | Seguridad Social + SEO Técnico
					</h3>

					<p style={{ color: "var(--muted)", lineHeight: "1.8", marginBottom: "16px" }}>
						Desarrollador con experiencia en desarrollo de software web y de escritorio, gestionando proyectos completos de frontend,
						backend y bases de datos. Especializado en sistemas para seguridad social y facturación electrónica.
					</p>
					<p style={{ color: "var(--muted)", lineHeight: "1.8", marginBottom: "16px" }}>
						Capacidad para liderar proyectos técnicos, levantar requerimientos y construir soluciones escalables. Con enfoque en
						seguridad, optimización SEO y automatización de procesos clave.
					</p>
					<p style={{ color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
						Experiencia sólida integrando APIs (Siigo, Arus, Simple), posicionamiento web (Google Search Console, Open Graph, JSON-LD), y
						despliegues.
					</p>
				</div>

				<h3 style={{ marginBottom: "20px" }}>Tecnologías y Herramientas</h3>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "10px",
						justifyContent: "center",
					}}
				>
					{skills.map((skill, i) => (
						<span
							key={i}
							className="card"
							style={{
								padding: "10px 16px",
								fontSize: "14px",
								fontWeight: "500",
								display: "inline-block",
								background: "var(--card)",
								border: "1px solid var(--border)",
							}}
						>
							{skill}
						</span>
					))}
				</div>

				<div style={{ marginTop: "40px", textAlign: "center" }}>
					<a href="/Hoja de vida.pdf" download="CV-Samuel-Vargas.pdf" className="btn">
						📄 Descargar CV completo
					</a>
				</div>
			</div>
		</section>
	);
}
