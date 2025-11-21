import { useEffect } from "react";

export function useReveal(selector) {
	useEffect(() => {
		// Usar requestAnimationFrame para evitar reflows forzados
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Usar requestAnimationFrame
						requestAnimationFrame(() => {
							entry.target.classList.add("reveal");
						});
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		// Esperar un frame antes de observar
		requestAnimationFrame(() => {
			const elements = document.querySelectorAll(selector);
			elements.forEach((el) => observer.observe(el));
		});

		return () => observer.disconnect();
	}, [selector]);
}
