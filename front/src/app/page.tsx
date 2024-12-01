"use client";

import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <div className="m-4 min-h-screen flex flex-col items-center justify-center">
      {/* Título principal */}
      <h1 className="font-serif text-center font-bold text-5xl m-8 text-black drop-shadow-lg">
        BIENVENIDO A MI TIENDA TECNOLÓGICA
      </h1>

      {/* Descripción */}
      <p className="font-serif text-center text-black text-xl mx-8 mb-12 max-w-4xl leading-relaxed drop-shadow-md">
        Explora nuestra tienda con lo mejor en tecnología. Desde los dispositivos más avanzados hasta accesorios innovadores,
        ofrecemos una experiencia única para los entusiastas de la tecnología. ¡Descubre lo que tenemos para ti!
      </p>

    

      {/* Contenedor de la grilla */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-9xl mx-auto justify-items-center">


        {/* 1 */}
        <div className="relative w-full h-full max-w-md">
          <div className="absolute top-0 left-0 z-20 p-4 rounded-lg">
            <p className="text-tiny text-white uppercase font-bold">El legado de Apple</p>
            <h4 className="text-white font-medium text-large">Conoce la historia detrás de los íconos tecnológicos</h4>
          </div>
          <Image
            isZoomed
            alt="Card background"
            className="w-110 h-80 object-cover rounded-lg"
            src="https://onetech.pl/wp-content/uploads/2024/04/Apple-1.jpg"
          />
        </div>


         {/* 2 */}
         <div className="relative w-full h-full max-w-md">
          <div className="absolute top-0 left-0 z-20 p-4 rounded-lg">
            <p className="text-tiny text-white uppercase font-bold">Innovación robótica</p>
            <h4 className="text-white font-medium text-large">Explora el futuro de la inteligencia artificial</h4>
          </div>
          <Image
            isZoomed
            alt="Card background"
            className="w-110 h-80 object-cover rounded-lg"
            src="https://i.blogs.es/80d0bf/iphone-ai-on-device-alt/500_333.webp"
          />
        </div>
        
        
        
        {/* 3 */}
        <div className="relative w-full h-full max-w-md">
          <div className="absolute top-0 left-0 z-20 p-4 rounded-lg">
            <p className="text-tiny text-white uppercase font-bold">Tecnología del mañana</p>
            <h4 className="text-white font-medium text-large">Descubre lo último en dispositivos de última generación</h4>
          </div>
          <Image
            isZoomed
            alt="Card background"
           className="w-110 h-80 object-cover rounded-lg"
            src="https://images.unian.net/photos/2019_09/thumb_files/800_0_1568152604-4450.JPG?0.5216978511062438"
          />
        </div>

         {/* 4 */}
        <div className="relative w-full h-full max-w-md">
          <div className="absolute top-0 left-0 z-20 p-4 rounded-lg">
            <p className="text-tiny text-white uppercase font-bold">El poder de la creatividad</p>
            <h4 className="text-white font-medium text-large">Inspírate con diseños tecnológicos revolucionarios</h4>
          </div>
          <Image
            isZoomed
            alt="Card background"
           className="w-110 h-80 object-cover rounded-lg"
            src="https://nextui.org/images/hero-card-complete.jpeg"
          />
        </div>

         {/* 5 */}
         <div className="relative w-100 h-96 max-w-md">
          <div className="absolute top-0 left-0 z-20 p-4 rounded-lg">
            <p className="text-tiny text-white uppercase font-bold">Ciberseguridad avanzada</p>
            <h4 className="text-white font-medium text-large">Protege tu mundo digital con las mejores herramientas</h4>
          </div>
          <Image
            isBlurred
            isZoomed
            alt="Card background"
            className="w-110 h-80 object-cover rounded-lg"
            src="https://blog.underc0de.org/wp-content/uploads/2022/03/september2021__f5zmksnt6cuq_og.jpg"
          />
        </div>
         

         {/* 6 */}
         <div className="relative w-100 h-96 max-w-md">
          <div className="absolute top-0 left-0 z-20 p-4 rounded-lg">
            <p className="text-tiny text-white uppercase font-bold">El universo tecnológico</p>
            <h4 className="text-white font-medium text-large">Adéntrate en el mundo de las posibilidades infinitas</h4>
          </div>
          <Image
            isBlurred
            isZoomed
            alt="Card background"
            className="w-110 h-80 object-cover rounded-lg"
            src="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2024/04/iPhone-e-iPad-y-accesorios.png"
          />
        </div>
      </div>
    </div>
  );
}
