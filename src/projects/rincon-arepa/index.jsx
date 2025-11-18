import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

export default function RinconArepa() {
	const products = [
		{
			id: 1,
			name: "Arepa con Queso Campesino",
			description: "Deliciosas arepas con queso campesino tradicional",
			prices: [
				{ qty: "5 unidades", price: "$6,500" },
				{ qty: "10 unidades", price: "$12,000" },
			],
			emoji: "🌽🧀",
		},
		{
			id: 2,
			name: "Arepa Campesino (Tela)",
			description: "Arepas tipo tela con queso campesino, perfectas para acompañar",
			prices: [{ qty: "10 unidades", price: "$7,000" }],
			emoji: "🌽",
		},
		{
			id: 3,
			name: "Arepa Solo Maíz (Tela)",
			description: "Arepas tipo tela de puro maíz, ideales para cualquier acompañamiento",
			prices: [{ qty: "10 unidades", price: "$5,000" }],
			emoji: "🌽",
		},
		{
			id: 4,
			name: "Arepa con Queso Mozzarella",
			description: "Arepas con delicioso queso mozzarella derretido",
			prices: [
				{ qty: "5 unidades", price: "$9,000" },
				{ qty: "10 unidades", price: "$17,000" },
			],
			emoji: "🧀✨",
		},
	];

	const whatsappNumber = "573158724587";
	const whatsappMessage = (product) => {
		if (product) {
			return `¡Hola! Me gustaría pedir: ${product.name}`;
		}
		return "¡Hola! Me gustaría hacer un pedido";
	};

	const handleWhatsApp = (product = null) => {
		const message = encodeURIComponent(whatsappMessage(product));
		window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
	};

	return (
		<div style={{ background: "linear-gradient(135deg, #FFF8E1 0%, #FFE0B2 100%)", minHeight: "100vh" }}>
			{/* Header */}
			<header
				style={{
					background: "rgba(255, 255, 255, 0.95)",
					backdropFilter: "blur(10px)",
					padding: "1rem 2rem",
					position: "sticky",
					top: 0,
					zIndex: 100,
					boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
					borderBottom: "3px solid #FF6F00",
				}}
			>
				<div
					style={{
						maxWidth: "1200px",
						margin: "0 auto",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "1rem",
					}}
				>
					{/* ← CAMBIO AQUÍ: Agregar Link para volver */}
					<Link to="/#projects" style={{ color: "#D84315", textDecoration: "none", fontWeight: "800", fontSize: "1.5rem" }}>
						← Rincón Arepa
					</Link>

					<button
						onClick={() => handleWhatsApp()}
						style={{
							background: "#25D366",
							color: "white",
							border: "none",
							padding: "10px 20px",
							borderRadius: "25px",
							fontWeight: "600",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "8px",
							fontSize: "14px",
							boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
						}}
					>
						💬 WhatsApp
					</button>
				</div>
			</header>

			{/* Hero Section */}
			<section
				style={{
					padding: "4rem 2rem",
					textAlign: "center",
					background: "linear-gradient(135deg, #FF6F00 0%, #FFB300 50%, #FFA000 100%)",
					color: "white",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
						pointerEvents: "none",
					}}
				/>

				<div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
					{/* ← CAMBIO AQUÍ: Reemplazar el div con emoji por una imagen */}
					<div
						style={{
							width: "250px",
							height: "250px",
							margin: "0 auto 2rem",
							background: "white",
							borderRadius: "50%",
							padding: "20px",
							boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img
							src={logo}
							alt="Rincón Arepa Logo"
							style={{
								width: "115%",
								height: "115%",
								objectFit: "contain",
								borderRadius: "100%",
							}}
						/>
					</div>

					<h1
						style={{
							fontSize: "clamp(2.5rem, 6vw, 4rem)",
							fontWeight: "900",
							margin: "0 0 1rem",
							textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
							letterSpacing: "-1px",
						}}
					>
						Rincón Arepa
					</h1>

					{/* Resto del hero... */}
				</div>
			</section>

			{/* Products Section */}
			<section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
				<h2
					style={{
						textAlign: "center",
						fontSize: "clamp(2rem, 4vw, 3rem)",
						color: "#D84315",
						marginBottom: "1rem",
						fontWeight: "800",
					}}
				>
					Nuestros Productos
				</h2>

				<p
					style={{
						textAlign: "center",
						color: "#795548",
						fontSize: "1.1rem",
						marginBottom: "3rem",
					}}
				>
					Escoge tu favorita y haz tu pedido
				</p>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: "2rem",
					}}
				>
					{products.map((product) => (
						<div
							key={product.id}
							style={{
								background: "white",
								borderRadius: "20px",
								padding: "2rem",
								boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								transition: "transform 0.3s, box-shadow 0.3s",
								border: "3px solid transparent",
								cursor: "pointer",
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.transform = "translateY(-8px)";
								e.currentTarget.style.boxShadow = "0 15px 40px rgba(255, 111, 0, 0.2)";
								e.currentTarget.style.borderColor = "#FF6F00";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.transform = "translateY(0)";
								e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
								e.currentTarget.style.borderColor = "transparent";
							}}
						>
							<div style={{ fontSize: "4rem", textAlign: "center", marginBottom: "1rem" }}>{product.emoji}</div>

							<h3
								style={{
									color: "#D84315",
									fontSize: "1.4rem",
									marginBottom: "0.5rem",
									fontWeight: "700",
								}}
							>
								{product.name}
							</h3>

							<p
								style={{
									color: "#795548",
									marginBottom: "1.5rem",
									lineHeight: "1.6",
								}}
							>
								{product.description}
							</p>

							<div
								style={{
									background: "#FFF3E0",
									padding: "1rem",
									borderRadius: "12px",
									marginBottom: "1rem",
									border: "2px solid #FFE0B2",
								}}
							>
								{product.prices.map((price, idx) => (
									<div
										key={idx}
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											padding: "0.5rem 0",
										}}
									>
										<span style={{ color: "#795548", fontWeight: "600" }}>{price.qty}</span>
										<span
											style={{
												color: "#FF6F00",
												fontSize: "1.3rem",
												fontWeight: "800",
											}}
										>
											{price.price}
										</span>
									</div>
								))}
							</div>

							<button
								onClick={() => handleWhatsApp(product)}
								style={{
									width: "100%",
									background: "#25D366",
									color: "white",
									border: "none",
									padding: "14px",
									borderRadius: "12px",
									fontSize: "1rem",
									fontWeight: "700",
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "8px",
									transition: "background 0.3s",
								}}
								onMouseOver={(e) => (e.target.style.background = "#22C55E")}
								onMouseOut={(e) => (e.target.style.background = "#25D366")}
							>
								💬 Pedir ahora
							</button>
						</div>
					))}
				</div>
			</section>

			{/* About Section */}
			<section
				style={{
					padding: "4rem 2rem",
					background: "linear-gradient(135deg, #FF6F00 0%, #F57C00 100%)",
					color: "white",
				}}
			>
				<div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
					<h2
						style={{
							fontSize: "clamp(2rem, 4vw, 3rem)",
							marginBottom: "1.5rem",
							fontWeight: "800",
						}}
					>
						¿Por qué elegir Rincón Arepa?
					</h2>

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
							gap: "2rem",
							marginTop: "3rem",
						}}
					>
						<div style={{ padding: "1.5rem" }}>
							<div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏆</div>
							<h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Calidad Premium</h3>
							<p style={{ opacity: 0.9 }}>Ingredientes frescos y seleccionados para garantizar el mejor sabor</p>
						</div>

						<div style={{ padding: "1.5rem" }}>
							<div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚚</div>
							<h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Entrega Rápida</h3>
							<p style={{ opacity: 0.9 }}>Pedidos frescos entregados en el menor tiempo posible</p>
						</div>

						<div style={{ padding: "1.5rem" }}>
							<div style={{ fontSize: "3rem", marginBottom: "1rem" }}>❤️</div>
							<h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Hecho con Amor</h3>
							<p style={{ opacity: 0.9 }}>Cada arepa es preparada con dedicación y tradición familiar</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
				<h2
					style={{
						fontSize: "clamp(2rem, 4vw, 3rem)",
						color: "#D84315",
						marginBottom: "2rem",
						fontWeight: "800",
					}}
				>
					Contáctanos
				</h2>

				<div
					style={{
						background: "white",
						padding: "3rem",
						borderRadius: "20px",
						boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
						border: "3px solid #FFE0B2",
					}}
				>
					<div style={{ marginBottom: "2rem" }}>
						<div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📱</div>
						<h3 style={{ color: "#D84315", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Teléfono / WhatsApp</h3>
						<a
							href={`https://wa.me/${whatsappNumber}`}
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#FF6F00",
								fontSize: "1.5rem",
								fontWeight: "700",
								textDecoration: "none",
							}}
						>
							315 872 4587
						</a>
					</div>

					<div>
						<div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📸</div>
						<h3 style={{ color: "#D84315", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Instagram</h3>
						<a
							href="https://instagram.com/el_rincondelaarepa"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#FF6F00",
								fontSize: "1.3rem",
								fontWeight: "700",
								textDecoration: "none",
							}}
						>
							@el_rincondelaarepa
						</a>
					</div>

					<button
						onClick={() => handleWhatsApp()}
						style={{
							marginTop: "2rem",
							background: "#25D366",
							color: "white",
							border: "none",
							padding: "16px 40px",
							borderRadius: "50px",
							fontSize: "1.1rem",
							fontWeight: "700",
							cursor: "pointer",
							boxShadow: "0 8px 25px rgba(37, 211, 102, 0.3)",
							width: "100%",
						}}
					>
						💬 Enviar mensaje por WhatsApp
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer
				style={{
					background: "#D84315",
					color: "white",
					padding: "2rem",
					textAlign: "center",
				}}
			>
				<p style={{ margin: "0 0 1rem", fontSize: "1.1rem", fontWeight: "600" }}>Rincón Arepa - Donde la tradición cobra vida</p>
				<p style={{ margin: 0, opacity: 0.8, fontSize: "0.7rem" }}>
					Desarrollado por{" "}
					<Link to="/" style={{ color: "white", fontWeight: "600", textDecoration: "underline" }}>
						Samuel Vargas
					</Link>
				</p>
			</footer>

			{/* Floating WhatsApp Button */}
			<button
				onClick={() => handleWhatsApp()}
				style={{
					position: "fixed",
					bottom: "2rem",
					right: "2rem",
					width: "60px",
					height: "60px",
					borderRadius: "50%",
					background: "#25D366",
					color: "white",
					border: "none",
					fontSize: "2rem",
					cursor: "pointer",
					boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
					zIndex: 1000,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					transition: "transform 0.3s",
				}}
				onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
				onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
			>
				💬
			</button>
		</div>
	);
}
