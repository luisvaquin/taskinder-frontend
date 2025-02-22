"use client";

import { useState, useEffect } from "react";

export default function SectionUser() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-400 to-blue-900 overflow-hidden relative">
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`,
        }}
      />
      <div className="text-center z-10 p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold text-white mb-4 transition-transform duration-500 hover:scale-105">
          BIENVENIDO xd
        </h1>
        <p className="text-xl text-white mb-6 opacity-90">
          Explore, Create, and Inspire
        </p>
        <a href="/">
          <button className="px-6 py-3 bg-white text-black-600 rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
            Volver
          </button>
        </a>
      </div>
    </div>
  );
}
