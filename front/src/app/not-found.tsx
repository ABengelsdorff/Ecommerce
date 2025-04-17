"use client"

import { motion } from "framer-motion"
import { Home, Frown } from "lucide-react"
import Link from "next/link"
import BubbleBackground from "./components/bubble-background"

export default function NotFound() {


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  // Floating animation for the icon
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <BubbleBackground />
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <motion.div className="w-full max-w-lg" initial="hidden" animate="visible" variants={containerVariants}>
        {/* Glassmorphism container */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <motion.div className="mb-6 text-white/80" variants={itemVariants} {...floatAnimation}>
              <Frown size={80} />
            </motion.div>

            {/* Title */}
            <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4" variants={itemVariants}>
              404
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 className="text-xl md:text-2xl font-medium text-white/90 mb-2" variants={itemVariants}>
              Página no encontrada
            </motion.h2>

            {/* Description */}
            <motion.p className="text-white/70 mb-8 max-w-md" variants={itemVariants}>
              Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" variants={itemVariants}>
              <Link href="/" className="w-full sm:w-auto">
                <motion.button
                  className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Home size={18} />
                  <span>Ir al inicio</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  )
}
