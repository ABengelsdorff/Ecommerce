"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: ReactNode
  index: number
}

export default function AnimatedCard({ children, index }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}
