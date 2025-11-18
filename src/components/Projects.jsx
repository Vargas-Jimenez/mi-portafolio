import React from "react";
import { Link } from "react-router-dom";
import { useReveal } from "./useReveal.js";

const data = [
	{
		title: "Rincón Arepa",
		desc: "Landing page para emprendimiento de arepas artesanales con integración directa a WhatsApp.",
		tech: ["React", "Responsive Design", "WhatsApp API"],
		link: "/projects/rincon-arepa",
		status: "Completado",
	},
	{
		title: "SaaS Web",
		desc: "Plataforma SaaS en construcción con sistema de autenticación, dashboard y gestión de usuarios.",
		tech: ["Node.js", "React", "PostgreSQL", "Express"],
		link: "/projects/saas-web",
		status: "En desarrollo",
	},
];

export default function Projects() {
	useReveal(".card");
	return (
		<section id="projects" className="section">
			<div className="inner container">
				<h2>Proyectos</h2>
				<p style={{ color: "var(--muted)", marginBottom: "32px", textAlign: "center" }}>Algunos de mis trabajos recientes</p>
				<div className="grid">
					{data.map((p, i) => (
						<article key={i} className="card">
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "12px",
								}}
							>
								<h3 style={{ margin: 0 }}>{p.title}</h3>
								<span
									style={{
										fontSize: "11px",
										padding: "4px 8px",
										borderRadius: "6px",
										background: p.status === "Completado" ? "rgba(74, 222, 128, 0.15)" : "rgba(251, 191, 36, 0.15)",
										color: p.status === "Completado" ? "#4ade80" : "#fbbf24",
										border: `1px solid ${p.status === "Completado" ? "rgba(74, 222, 128, 0.3)" : "rgba(251, 191, 36, 0.3)"}`,
										fontWeight: "600",
									}}
								>
									{p.status}
								</span>
							</div>

							<p>{p.desc}</p>

							<div
								style={{
									display: "flex",
									gap: "8px",
									flexWrap: "wrap",
									marginBottom: "16px",
								}}
							>
								{p.tech.map((tech, idx) => (
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

							<Link className="btn" to={p.link}>
								Ver detalles
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
