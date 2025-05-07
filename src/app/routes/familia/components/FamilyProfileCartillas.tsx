// components/FamilyProfileCartillas.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image"; // Importación del componente Image

const cartillas = [
  {
    title: "Lista de Actividades en Familia",
    image: "/4.jpg",
    link: "/cartillas/lista-actividades.pdf",
  },
  {
    title: "Calendario en Familia",
    image: "/4.jpg",
    link: "/cartillas/calendario-familia.pdf",
  },
  {
    title: "DOFA en Familia",
    image: "/4.jpg",
    link: "/cartillas/dofa-familia.pdf",
  },
  {
    title: "Registro del Pensamiento",
    image: "/4.jpg",
    link: "/cartillas/registro-pensamiento.pdf",
  },
];

export default function FamilyProfileCartillas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 py-10"
    >
      <h2 className="text-2xl font-bold text-blue-700 text-center">
        Lee y descarga las cartillas del perfil de la familia
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cartillas.map((item, idx) => (
          <Card key={idx} className="shadow-md relative">
            {/* Etiquetas */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
              PDF
            </div>
            <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
              2025
            </div>

            {/* Usando Image de Next.js */}
            <div className="w-full h-52 relative">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-md"
                layout="fill" // Esto asegura que la imagen cubra el espacio sin deformarse
              />
            </div>

            <CardContent className="space-y-2 py-4 text-center">
              <p className="font-semibold text-gray-800 px-2">{item.title}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Descargar Cartilla
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
