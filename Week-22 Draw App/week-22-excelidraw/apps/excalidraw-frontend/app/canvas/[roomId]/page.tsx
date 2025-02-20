"use client";
import { useEffect, useRef } from "react";

export default function DrawingCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
		}
	}, [canvasRef]);
	return <canvas width={1000} height={1000} ref={canvasRef}></canvas>;
}
