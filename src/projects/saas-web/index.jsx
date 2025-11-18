import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Reutilizamos los estilos

export default function SaasPlatform() {
	return (
		<div className="project-landing">
			<header className="project-header">
				<Link to="/#projects" className="back-btn">
					← Volver al portafolio
				</Link>
			</header>

			<section className="project-hero">
				<span className="badge-status in-progress">En desarrollo</span>
				<h1>SaaS Platform</h1>
				<p className="subtitle">Plataforma SaaS completa con sistema de autenticación y gestión de usuarios</p>
			</section>

			<main className="project-content">
				<section className="section">
					<h2>Sobre el proyecto</h2>
					<p>
						Plataforma SaaS en desarrollo que busca ofrecer una solución completa para [describe brevemente el propósito]. Este proyecto
						me está permitiendo profundizar en arquitectura de aplicaciones escalables y mejores prácticas de desarrollo.
					</p>
				</section>

				<section className="section">
					<h2>Funcionalidades implementadas</h2>
					<ul className="features-list">
						<li>✅ Sistema de autenticación (registro/login)</li>
						<li>✅ Dashboard interactivo con métricas</li>
						<li>✅ Gestión de usuarios y permisos</li>
						<li>✅ API RESTful con Node.js y Express</li>
						<li>✅ Base de datos PostgreSQL</li>
						<li>⏳ Sistema de suscripciones (próximamente)</li>
						<li>⏳ Pasarela de pagos (próximamente)</li>
						<li>⏳ Notificaciones en tiempo real (próximamente)</li>
					</ul>
				</section>

				<section className="section">
					<h2>Stack tecnológico</h2>
					<div className="tech-stack">
						<span className="badge">React</span>
						<span className="badge">Node.js</span>
						<span className="badge">Express</span>
						<span className="badge">PostgreSQL</span>
						<span className="badge">JWT</span>
						<span className="badge">RESTful API</span>
					</div>
				</section>

				<section className="section">
					<h2>Desafíos técnicos</h2>
					<div className="challenge-card">
						<h3>🔐 Seguridad</h3>
						<p>
							Implementación de autenticación segura con JWT, hash de contraseñas con bcrypt y validación de datos en frontend y
							backend.
						</p>
					</div>
					<div className="challenge-card">
						<h3>🏗️ Arquitectura</h3>
						<p>Diseño de una arquitectura escalable que permita agregar nuevas funcionalidades sin comprometer el código existente.</p>
					</div>
					<div className="challenge-card">
						<h3>📊 Performance</h3>
						<p>Optimización de consultas a base de datos y implementación de caché para mejorar tiempos de respuesta.</p>
					</div>
				</section>

				<section className="section">
					<h2>Estado actual</h2>
					<p>
						El proyecto está en fase de desarrollo activo. Las funcionalidades core están implementadas y funcionando correctamente.
						Actualmente trabajando en el sistema de suscripciones y pasarela de pagos.
					</p>
				</section>

				<div className="cta-section">
					<Link to="/#projects" className="btn">
						← Ver más proyectos
					</Link>
				</div>
			</main>
		</div>
	);
}
