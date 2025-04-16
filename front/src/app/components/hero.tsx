"use client";

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import AnimatedText from "./ui/animated-text";
import SplashCursor from "./SplashCursor";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      <SplashCursor />
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <p className="text-primary font-medium text-xl mb-2">¡Hola! 👋 Soy</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <AnimatedText text="Angelica Bengelsdorff" />
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
            Desarrolladora Web Full Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Creo experiencias web atractivas y funcionales con React, TypeScript
            y las últimas tecnologías web.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">Ver proyectos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contáctame</Link>
            </Button>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/ABengelsdorff"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/angelica-bengelsdorff"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="tel:+543751608480"
                target="_blank"
                aria-label="Teléfono"
              >
                <Phone className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-purple-400 rounded-full opacity-70 blur-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="relative w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden border-4 border-primary/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              <img
                src="animeangie.jpg"
                alt="Tu foto de perfil"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Button variant="ghost" size="icon" asChild></Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
