// "use client"

// import { useEffect, useRef } from "react"
// import { motion, useMotionValue, useSpring } from "framer-motion"

// const TRAIL_LENGTH = 80 // cantidad de elementos en la cola

// export function MouseGradientEffect() {
//   const mouse = useRef({ x: 0, y: 0 })
//   const trail = Array.from({ length: TRAIL_LENGTH }, () => ({
//     x: useMotionValue(0),
//     y: useMotionValue(0),
//   }))

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.current = { x: e.clientX, y: e.clientY }
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   useEffect(() => {
//     const animateTrail = () => {
//       trail.forEach((dot, i) => {
//         const prev = i === 0 ? mouse.current : {
//           x: trail[i - 1].x.get(),
//           y: trail[i - 1].y.get(),
//         }

//         const dx = prev.x - dot.x.get()
//         const dy = prev.y - dot.y.get()

//         dot.x.set(dot.x.get() + dx * 0.25) // menor = más delay
//         dot.y.set(dot.y.get() + dy * 0.25)
//       })

//       requestAnimationFrame(animateTrail)
//     }

//     animateTrail()
//   }, [trail])

//   return (
//     <>
//       {trail.map((dot, i) => {
//         const size = 300 - i * 30
//         const opacity = 0.1 + (0.1 * (1 - i / TRAIL_LENGTH))
//         const blur = i === 0 ? "blur-3xl" : "blur-2xl"
//         const z = 50 - i

//         const xSpring = useSpring(dot.x, {
//           damping: 30,
//           stiffness: 150,
//         })

//         const ySpring = useSpring(dot.y, {
//           damping: 30,
//           stiffness: 150,
//         })

//         return (
//           <motion.div
//             key={i}
//             className={`fixed pointer-events-none rounded-full bg-gradient-to-br from-pink-500 via-purple-400 to-yellow-400 ${blur}`}
//             style={{
//               width: size,
//               height: size,
//               x: xSpring,
//               y: ySpring,
//               translateX: "-50%",
//               translateY: "-50%",
//               opacity,
//               zIndex: z,
//             }}
//           />
//         )
//       })}
//     </>
//   )
// }


