"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const booklets = [
  {
    title: "Memoria",
    image: "/4.jpg",
    link: "/cuadernillos/memoria.pdf",
  },
  {
    title: "Atención",
    image: "/atencion.png",
    link: "/cuadernillos/atencion.pdf",
  },
  {
    title: "Lenguaje",
    image: "/lenguaje.png",
    link: "/cuadernillos/lenguaje.pdf",
  },
  {
    title: "Sensación",
    image: "/sensacion.png",
    link: "/cuadernillos/sensacion.pdf",
  },
  {
    title: "Cálculo",
    image: "/calculo.png",
    link: "/cuadernillos/calculo.pdf",
  },
  {
    title: "Grafomotricidad",
    image: "/gramo.png",
    link: "/cuadernillos/grafomotricidad.pdf",
  },
  {
    title: "Percepción",
    image: "/percepcion.png",
    link: "/cuadernillos/percepcion.pdf",
  },
  {
    title: "Aprendizaje",
    image: "/aprendizaje.png",
    link: "/cuadernillos/aprendizaje.pdf",
  },
  {
    title: "Funciones Ejecutivas",
    image: "/funciones.png",
    link: "/cuadernillos/funciones.pdf",
  },
];

export default function PatientProfileBooklets() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 py-10"
    >
      <h2 className="text-3xl font-bold text-sky-600 text-center">
        Cuadernillos de Estimulación Cognitiva del Paciente
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {booklets.map((item, idx) => (
          <Card
            key={idx}
            className="relative bg-white rounded-xl shadow-md"
          >
            {/* Imagen + etiquetas en contenedor relative */}
            <div className="relative w-full h-60 bg-gray-200 overflow-hidden rounded-t-xl">
              {/* Etiqueta PDF */}
              <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                PDF
              </div>
              {/* Etiqueta Año */}
              <div className="absolute top-3 right-3 z-10 bg-cyan-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
                2025
              </div>

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Contenido */}
            <CardContent className="py-6 text-center space-y-3">
              <p className="text-lg font-semibold text-gray-800">{item.title}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Descargar Cuadernillo
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
