import React, { useEffect, useRef } from "react";

export default function Starfield() {
	const canvasRef = useRef(null);
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let w, h, animationId;
		const DPR = Math.min(window.devicePixelRatio || 1, 2);
		const stars = [];
		const STAR_COUNT = 1000;

		function resize() {
			w = canvas.width = Math.floor(window.innerWidth * DPR);
			h = canvas.height = Math.floor(window.innerHeight * DPR);
		}
		resize();
		window.addEventListener("resize", resize);

		function init() {
			stars.length = 0;
			for (let i = 0; i < STAR_COUNT; i++) {
				stars.push({
					x: Math.random() * w,
					y: Math.random() * h,
					z: Math.random() * 1 + 0.2,
					r: Math.random() * 1.2 + 0.2,
					vx: (Math.random() - 0.5) * 0.12,
					vy: (Math.random() - 0.5) * 0.12,
					tw: Math.random() * Math.PI * 2,
				});
			}
		}
		init();

		function draw() {
			ctx.clearRect(0, 0, w, h);
			for (const s of stars) {
				s.x += s.vx * s.z;
				s.y += s.vy * s.z;
				s.tw += 0.02;
				if (s.x < 0) s.x = w;
				if (s.x > w) s.x = 0;
				if (s.y < 0) s.y = h;
				if (s.y > h) s.y = 0;
				const alpha = 0.6 + Math.sin(s.tw) * 0.4;
				ctx.fillStyle = `rgba(255,255,255,${alpha})`;
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
				ctx.fill();
			}
			animationId = requestAnimationFrame(draw);
		}
		draw();

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return <canvas className="starfield" ref={canvasRef} />;
}
