import React from "react";

export default function Contact() {
	const contactMethods = [
		{
			icon: "📧",
			title: "Gmail",
			value: "Enviame un correo directamente.",
			link: "mailto:vargassamuel@gmail.com",
			description: "Conectemos profesionalmente.",
		},
		{
			icon: "💼",
			title: "LinkedIn",
			value: "Samuel Alejandro Vargas Jiménez",
			link: "https://www.linkedin.com/in/vargassamuel503/",
			description: "Analiza mi perfil.",
		},
		{
			icon: "💬",
			title: "WhatsApp",
			value: "Samuel A. Vargas Jiménez",
			link: "https://wa.me/573116033614",
			description: "Chatea conmigo.",
		},
		// {
		// 	icon: "💻",
		// 	title: "GitHub",
		// 	value: "@tuusuario",
		// 	link: "https://github.com/tuusuario",
		// 	description: "Revisa mi código",
		// },
	]; /* Github aun tengo que hacer remodelación */

	return (
		<section id="contact" className="section">
			<div className="inner container">
				<h2>Contacto</h2>
				<p style={{ color: "var(--muted)", marginBottom: "32px", textAlign: "center" }}>¿Tienes un proyecto en mente? ¡Hablemos!</p>

				<div className="grid">
					{contactMethods.map((method, index) => (
						<a
							key={index}
							href={method.link}
							target={method.link.startsWith("http") ? "_blank" : undefined}
							rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
							className="card"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<div style={{ fontSize: "32px", marginBottom: "12px" }}>{method.icon}</div>
							<h3>{method.title}</h3>
							<p style={{ color: "var(--primary)", marginBottom: "4px" }}>{method.value}</p>
							<p style={{ fontSize: "14px" }}>{method.description}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
