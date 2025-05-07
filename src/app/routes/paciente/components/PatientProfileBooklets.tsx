"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image"; // Importación del componente Image

const booklets = [
  {
    title: "Memoria",
    image: "/4.jpg",
    link: "/cuadernillos/memoria.pdf",
  },
  {
    title: "Atención",
    image: "/4.jpg",
    link: "/cuadernillos/atencion.pdf",
  },
  {
    title: "Lenguaje",
    image: "/4.jpg",
    link: "/cuadernillos/lenguaje.pdf",
  },
  {
    title: "Sensación",
    image: "/4.jpg",
    link: "/cuadernillos/sensacion.pdf",
  },
  {
    title: "Cálculo",
    image: "/4.jpg",
    link: "/cuadernillos/calculo.pdf",
  },
  {
    title: "Grafomotricidad",
    image: "/4.jpg",
    link: "/cuadernillos/grafomotricidad.pdf",
  },
  {
    title: "Percepción",
    image: "/4.jpg",
    link: "/cuadernillos/percepcion.pdf",
  },
  {
    title: "Aprendizaje",
    image: "/4.jpg",
    link: "/cuadernillos/aprendizaje.pdf",
  },
  {
    title: "Funciones Ejecutivas",
    image: "/4.jpg",
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
            {/* Etiqueta PDF */}
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              PDF
            </div>
            {/* Etiqueta Año */}
            <div className="absolute top-3 right-3 bg-cyan-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
              2025
            </div>

            {/* Imagen usando Next.js Image */}
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-xl"
                width={500}  // Ajusta el tamaño según lo necesario
                height={240} // Ajusta el tamaño según lo necesario
              />
            </div>

            {/* Contenido */}
            <CardContent className="py-6 text-center space-y-3">
              <p className="text-lg font-semibold text-gray-800">{`Manejo de ${item.title}`}</p>
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
