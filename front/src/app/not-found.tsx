"use client";

import Link from "next/link";
import { Image } from "@nextui-org/image";
import styled, { keyframes } from "styled-components";

// Define los keyframes para una animación de achicar y agrandar
const zoomInOut = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Aplica la animación a la imagen
const AnimatedImage = styled(Image)`
  animation: ${zoomInOut} 2s ease-out;
`;

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[85vh] text-center px-4 mt-10">
      {/* Imagen animada */}
      <AnimatedImage
        alt="not-found"
        src="/flork.jpg"
        className="w-full max-w-md md:max-w-lg lg:max-w-2xl mb-8"
      />

      {/* Texto estilizado */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Página no encontrada
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Lo sentimos, la página que está buscando no existe o ha sido eliminada.
      </p>

      {/* Enlace estilizado */}
      <Link
        href="/"
        className="bg-blue-600 text-white py-2 px-3 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
      >
        Regresar al Inicio
      </Link>
    </div>
  );
}
