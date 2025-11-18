import React from "react";
import { useReveal } from "./useReveal";

export default function Experience() {
	useReveal(".card");

	const experiences = [
		{
			title: "MEGATECH - Software Web de Seguridad Social",
			role: "Desarrollador FullStack",
			period: "Funcionando",
			tech: ["Node.js", "Express", "React", "PostgreSQL", "SEO"],
			achievements: [
				"Web en desarrollo y constante mejora, orientado a facilitar la generación y gestión de planillas de seguridad social para dependientes e independientes.",
				"Desarrollo de módulos para gestión de clientes, usuarios, facturas y planillas.",
				"Integración con APIs de operadores (Simple, Arus).",
				"Implementación de SEO técnico con Open Graph y Schema.org",
				"Configuración de Search Console y posicionamiento web.",
			],
		},
		{
			title: "Aplicación para Restaurantes",
			role: "Desarrollador FullStack",
			period: "En desarrollo",
			tech: ["Electron", "SQLite", "TypeScript"],
			achievements: ["Implementación de autenticación con cifrado.", "Base de datos local con SQLite.", "Empaquetado con Electron Forge."],
		},
	];

	return (
		<section id="experience" className="section">
			<div className="inner container">
				<h2>Experiencia</h2>
				<div style={{ maxWidth: "800px", margin: "0 auto" }}>
					{experiences.map((exp, i) => (
						<article key={i} className="card" style={{ marginBottom: "20px" }}>
							<h3 style={{ color: "var(--primary)" }}>{exp.title}</h3>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "12px",
									flexWrap: "wrap",
									gap: "8px",
								}}
							>
								<span style={{ color: "var(--text)", fontWeight: "600" }}>{exp.role}</span>
								<span style={{ color: "var(--muted)", fontSize: "14px" }}>{exp.period}</span>
							</div>

							<div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
								{exp.tech.map((tech, idx) => (
									<span
										key={idx}
										style={{
											background: "rgba(122, 162, 255, 0.15)",
											color: "var(--primary)",
											padding: "4px 10px",
											borderRadius: "6px",
											fontSize: "12px",
											fontWeight: "600",
										}}
									>
										{tech}
									</span>
								))}
							</div>

							<ul style={{ color: "var(--muted)", marginLeft: "20px" }}>
								{exp.achievements.map((achievement, idx) => (
									<li key={idx} style={{ marginBottom: "8px" }}>
										{achievement}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
