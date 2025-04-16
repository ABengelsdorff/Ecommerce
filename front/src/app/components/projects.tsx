"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Vets For Pets",
    description: "Una aplicación web moderna construida con React y Next.js.",
    images: ["/Home_1.png", "/maps.png", "/perfil.png", "/SignIn.png", "/SignUp_1.png", "/SignUp_Form_Users.png", "/SignUp_Form_Vets.png"],
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "INNOVA",
    description: "Una plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
    images: ["/innova.jpg", "/iniciosesion.jpg", "/registro.jpg","/productos.jpg","/ordenes.jpg","/miperfil.jpg","/sobrenosotros.jpg",],
    tags: ["TypeScript", "React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  // {
  //   title: "Proyecto 3",
  //   description: "Una aplicación de gestión de tareas con autenticación y base de datos.",
  //   images: ["/Home_1.png"],
  //   tags: ["Next.js", "MongoDB", "Tailwind CSS"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   title: "Proyecto 4",
  //   description: "Un dashboard interactivo con gráficos y visualización de datos.",
  //   images: ["/innova.jpg"],
  //   tags: ["React", "D3.js", "TypeScript"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
]

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [previewIndexes, setPreviewIndexes] = useState(projects.map(() => 0))

  useEffect(() => {
    const intervals = projects.map((_, index) =>
      setInterval(() => {
        setPreviewIndexes((prev) => {
          const updated = [...prev]
          updated[index] = (prev[index] + 1) % projects[index].images.length
          return updated
        })
      }, 3000)
    )
    return () => intervals.forEach(clearInterval)
  }, [])

  useEffect(() => {
    if (selected !== null) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % projects[selected].images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [selected])

  const handleNextImage = () => {
    if (selected !== null) {
      setCurrentImage((prev) => (prev + 1) % projects[selected].images.length)
    }
  }

  const handlePrevImage = () => {
    if (selected !== null) {
      setCurrentImage((prev) => (prev - 1 + projects[selected].images.length) % projects[selected].images.length)
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Aquí hay una selección de proyectos en los que he trabajado. Cada uno demuestra diferentes habilidades y
            tecnologías.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`project-${index}`}
              onClick={() => {
                setSelected(index)
                setCurrentImage(previewIndexes[index])
              }}
              className="cursor-pointer"
            >
              <motion.div layoutId={`project-content-${index}`} className="overflow-hidden h-full border-none shadow-lg rounded-xl bg-white dark:bg-gray-800">
                <motion.img
                  layoutId={`project-image-${index}`}
                  src={project.images[previewIndexes[index]] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              layoutId={`project-${selected}`}
              className="fixed inset-0 z-50 bg-white/90 dark:bg-black/90 p-8 flex items-center justify-center"
              onClick={() => setSelected(null)}
            >
              <motion.div layoutId={`project-content-${selected}`} className="max-w-4xl w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl relative">
                <div className="relative">
                  <motion.img
                    layoutId={`project-image-${selected}`}
                    src={projects[selected].images[currentImage]}
                    alt={projects[selected].title}
                    className="w-full h-96 object-cover rounded-lg mb-6"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <motion.h2 layoutId={`project-title-${selected}`} className="text-2xl font-bold mb-4">
                  {projects[selected].title}
                </motion.h2>
                <motion.p layoutId={`project-description-${selected}`} className="text-gray-700 dark:text-gray-300">
                  {projects[selected].description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {projects[selected].tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild size="sm" variant="default">
                    <Link href={projects[selected].demoUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href={projects[selected].githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com" target="_blank">
              <Github className="h-5 w-5 mr-2" />
              Ver más proyectos en GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


//!--------------------------------------------------------------------------------

// "use client"

// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { Button } from "@/app/components/ui/button"
// import { ExternalLink, Github } from "lucide-react"
// import Link from "next/link"

// gsap.registerPlugin(ScrollTrigger)

// const projects = [
//   {
//     title: "Vets For Pets",
//     description: "Una aplicación web moderna construida con React y Next.js.",
//     images: ["/Home_1.png", "/innova.jpg", "/angieimg.jpg", "/animeangie.jpg"],
//     tags: ["React", "Next.js", "Tailwind CSS"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Proyecto 2",
//     description: "Una plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
//     images: ["/innova.jpg"],
//     tags: ["TypeScript", "React", "Node.js"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Proyecto 3",
//     description: "Una aplicación de gestión de tareas con autenticación y base de datos.",
//     images: ["/Home_1.png"],
//     tags: ["Next.js", "MongoDB", "Tailwind CSS"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Proyecto 4",
//     description: "Un dashboard interactivo con gráficos y visualización de datos.",
//     images: ["/innova.jpg"],
//     tags: ["React", "D3.js", "TypeScript"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
// ]

// export default function Projects() {
//   const sectionRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     const elements = sectionRef.current?.querySelectorAll(".project-item")
//     if (elements) {
//       elements.forEach((el, index) => {
//         gsap.fromTo(
//           el,
//           { y: 100, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: el,
//               start: "top 85%",
//               toggleActions: "play none none none",
//             },
//           }
//         )
//       })
//     }
//   }, [])

//   return (
//     <section id="projects" className="bg-white dark:bg-black py-32">
//       <div className="container mx-auto px-6" ref={sectionRef}>
//         <h2 className="text-5xl font-bold mb-20 text-center">Mis Proyectos</h2>

//         <div className="relative border-l border-primary/20 ml-4">
//           {projects.map((project, index) => (
//             <div key={index} className="project-item pl-6 pb-20 relative">
//               <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full -ml-[9px]" />
//               <div className="overflow-hidden rounded-xl shadow-xl border border-primary/10">
//                 <img
//                   src={project.images[0]}
//                   alt={project.title}
//                   className="w-full h-80 object-cover"
//                 />
//               </div>
//               <div className="mt-6">
//                 <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <Button asChild size="sm" variant="default">
//                     <Link href={project.demoUrl} target="_blank">
//                       <ExternalLink className="h-4 w-4 mr-2" />
//                       Demo
//                     </Link>
//                   </Button>
//                   <Button asChild size="sm" variant="outline">
//                     <Link href={project.githubUrl} target="_blank">
//                       <Github className="h-4 w-4 mr-2" />
//                       Código
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


//!--------------------------------------------------------------------------------

