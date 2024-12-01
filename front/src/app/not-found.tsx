import Link from "next/link";
import { Image } from "@nextui-org/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center bg-gray-50 px-4">
      {/* Imagen más grande y centrada */}
      <Image 
        isBlurred
        alt="not-found" 
        src="https://www.pngitem.com/pimgs/m/716-7167673_error-png-transparent-png.png" 
        className="w-full max-w-md md:max-w-lg lg:max-w-2xl mb-8 mt-[-20px]"
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
