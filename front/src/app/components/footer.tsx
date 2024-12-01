"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-black text-lg font-semibold mb-4">Nuestra Compañía</h2>
            <p>
              Innovando para un futuro mejor. Descubre cómo estamos transformando
              el mundo, un proyecto a la vez.
            </p>
          </div>

        
          <div>
            <h2 className="text-black text-lg font-semibold mb-4">Enlaces Rápidos</h2>
            <ul>

              <li>
                <Link href="/about" className="hover:text-red-600 transition-colors duration-300">
                  Sobre Nosotros
                </Link>
              </li>

              <li>
                <Link href="/product" className="hover:text-red-600 transition-colors duration-300">
                  Productos
                </Link>
              </li>

              <li>
                <Link href="/shopping-cart" className="hover:text-red-600 transition-colors duration-300">
                  Carrito de Compras
                </Link>
              </li>

              <li>
                <Link href="#" className="text-black hover:text-red-600 transition-colors duration-300">
                Volver al inicio
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-black text-lg font-semibold mb-4">Contáctanos</h2>
            <p className="mb-2">📞 +1 234 567 890</p>
            <p>✉️ contacto@tucompañia.com</p>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm">
          <p>&copy; {new Date().getFullYear()} Tu Compañía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

