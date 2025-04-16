"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Ballpit from "./Ballpit";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.footer
      className="w-full py-8 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >

<div className="absolute inset-0 h-full -z-10">
        <Ballpit
          className="w-full h-full"
          count={50}
          gravity={0.5}
          friction={0.9}
          wallBounce={0.9}
          followCursor={true}
          colors={[0x00ffff, 0xffffff, 0x87cefa, 0xa855f7, 0xcccccc]}
        />
      </div>




      {/* Glassmorphism container */}
      <div className="container mx-auto max-w-6xl px-4">
      <div className="backdrop-blur-3xl dark:backdrop-blur-3xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3
                className="text-xl font-medium text-black dark:text-white"
              >
                Portfolio
              </h3>
              <p
                className="text-black dark:text-white text-sm leading-relaxed"
              >
                Desarrollador web especializado en crear experiencias digitales
                atractivas y funcionales.
              </p>
              <div className="flex space-x-4 pt-2">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Enlaces rápidos */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3
                className="text-xl font-medium text-black dark:text-white"
              >
                Enlaces rápidos
              </h3>
              <nav className="flex flex-col space-y-2">
                {[
                  "Inicio",
                  "Sobre mí",
                  "Habilidades",
                  "Proyectos",
                  "Contacto",
                ].map((item) => (
                  <motion.div key={item} whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      className="text-black dark:text-white text-sm flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>{item}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contacto */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3
                className="text-xl font-medium text-black dark:text-white"
              >
                Contacto
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-black dark:text-white">
                  Buenos Aires, Argentina
                </p>
                <p className="text-black dark:text-white">+54 3751 608480</p>
                <p className="text-black dark:text-white break-all">
                  Angelica.bengelsdorff.5@gmail.com
                </p>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-white/10 text-center text-black dark:text-white text-base"
          >
            © {currentYear} Bengelsdorff Angélica. Todos los derechos
            reservados.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/app/components/ui/button"
// import { Github, Linkedin, Mail } from "lucide-react"
// import Link from "next/link"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   const socialLinks = [
//     { icon: <Github className="h-5 w-5" />, href: "https://github.com/ABengelsdorff", label: "GitHub" },
//     { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/angelica-bengelsdorff", label: "LinkedIn" },
//     { icon: <Mail className="h-5 w-5" />, href: "mailto:Angelica.bengelsdorff.5@gmail.com", label: "Email" },
//   ]

//   const navLinks = [
//     { name: "Inicio", href: "#hero" },
//     { name: "Sobre mí", href: "#about" },
//     { name: "Habilidades", href: "#skills" },
//     { name: "Proyectos", href: "#projects" },
//     { name: "Contacto", href: "#contact" },
//   ]

//   return (
//     <footer className="bg-transparent py-16 flex justify-center items-center">
//       <div className="w-full max-w-screen-lg bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
//         <div className="grid md:grid-cols-3 gap-8 mb-8">
//           <div>
//             <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
//               Portfolio
//             </Link>
//             <p className="text-gray-400 mb-4">
//               Desarrollador web especializado en crear experiencias digitales atractivas y funcionales.
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((link, index) => (
//                 <motion.div key={index} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href={link.href} target="_blank" aria-label={link.label}>
//                       {link.icon}
//                     </Link>
//                   </Button>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
//             <ul className="space-y-2">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4">Contacto</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>Buenos Aires, Argentina</li>
//               <li>+54 3751 608480</li>
//               <li>Angelica.bengelsdorff.5@gmail.com</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-4 mt-4 text-center text-gray-500">
//           <p>© {currentYear} Bengelsdorff Angélica. Todos los derechos reservados.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

//!--------------------------------------------

//!--------------------------------------------

// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/app/components/ui/button"
// import { Github, Linkedin, Mail } from "lucide-react"
// import Link from "next/link"
// import Ballpit from "./Ballpit" // 👈 Importado aquí

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   const socialLinks = [
//     { icon: <Github className="h-5 w-5" />, href: "https://github.com/ABengelsdorff", label: "GitHub" },
//     { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/angelica-bengelsdorff", label: "LinkedIn" },
//     { icon: <Mail className="h-5 w-5" />, href: "mailto:Angelica.bengelsdorff.5@gmail.com", label: "Email" },
//   ]

//   const navLinks = [
//     { name: "Inicio", href: "#hero" },
//     { name: "Sobre mí", href: "#about" },
//     { name: "Habilidades", href: "#skills" },
//     { name: "Proyectos", href: "#projects" },
//     { name: "Contacto", href: "#contact" },
//   ]

//   return (
//     <footer className="relative overflow-hidden bg-transparent text-white py-6">

//       {/* Fondo animado */}
//       <div className="absolute inset-0 -z-10">
//         <Ballpit
//           count={80}
//           gravity={0.5}
//           friction={0.85}
//           wallBounce={0.9}
//           followCursor={true}
//           colors={[0x00ffff, 0xffffff, 0x87cefa, 0xcccccc]}

//         />
//       </div>

//       {/* Contenido del footer */}
//       <div className="container mx-auto px-4 py-16 relative z-10">
//         <div className="grid md:grid-cols-3 gap-8 mb-8">
//           <div>
//             <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
//               Portfolio
//             </Link>
//             <p className="text-gray-400 mb-4">
//               Desarrollador web especializado en crear experiencias digitales atractivas y funcionales.
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((link, index) => (
//                 <motion.div key={index} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
//                   <Button variant="ghost" size="icon" asChild>
//                     <Link href={link.href} target="_blank" aria-label={link.label}>
//                       {link.icon}
//                     </Link>
//                   </Button>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
//             <ul className="space-y-2">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4">Contacto</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>Buenos Aires, Argentina</li>
//               <li>+54 3751 608480</li>
//               <li>Angelica.bengelsdorff.5@gmail.com</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-4 mt-4 text-center text-gray-500">
//           <p>© {currentYear} Bengelsdorff Angélica. Todos los derechos reservados.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }
