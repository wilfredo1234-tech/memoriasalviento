import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const cuadernillos = [
  {
    titulo: "Manejo del Estrés",
    imagen: "/estresimg.png",
    archivo: "/Cuadernillo. Estrés .pdf",
  },
  {
    titulo: "Promoción de Vida Social",
    imagen: "/socialimg.png",
    archivo: "/promocionsocial.pdf",
  },
  {
    titulo: "Manejo de Ansiedad",
    imagen: "/ansiedadimg.png",
    archivo: "/ansiedad.pdf",
  },
  {
    titulo: "Manejo de Síntomas Depresivos",
    imagen: "/estres.jpg",
    archivo: "/sintomasdepresivos.pdf",
  },
];

export default function ContenidoCuidador3() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center gap-12">
      {/* Pregunta */}
      <div className="bg-white text-center text-xl font-semibold px-8 py-4 rounded-full shadow-md w-fit">
        ¿Qué es promocionar la salud y prevenir sobrecarga emocional en cuidadores?
      </div>

      {/* Texto explicativo */}
      <div className="border-l-8 border-purple-500 bg-white p-8 rounded-xl shadow-xl text-center text-gray-800 text-lg max-w-4xl">
        Se refiere a las acciones y estrategias destinadas a proteger y mejorar la salud física, emocional y mental de los cuidadores.
      </div>

      {/* Título general */}
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Lee y descarga los cuadernillos de apoyo emocional
      </h2>

      {/* Cuadernillos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {cuadernillos.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300 border border-gray-200"
          >
            {/* Imagen tipo portada */}
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center ring-1 ring-gray-300">
              <Image
                src={item.imagen}
                alt={item.titulo}
                className="max-h-full max-w-full object-contain p-2"
                width={500}  // Tamaño sugerido, puedes ajustarlo según sea necesario
                height={288} // Tamaño sugerido, ajustable según el diseño
              />
            </div>

            {/* Etiquetas PDF y año */}
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
              PDF
            </div>
            <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
              2025
            </div>

            {/* Contenido y botón */}
            <div className="bg-white p-4 text-center">
              <p className="text-base font-semibold text-gray-800 mb-4">{item.titulo}</p>
              {item.archivo ? (
                <a
                  href={item.archivo}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button
                    variant="default"
                    className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-blue-600 hover:to-indigo-500 font-semibold shadow-md transition-all w-full rounded-full"
                  >
                    Descargar Cuadernillo
                  </Button>
                </a>
              ) : (
                <Button
                  disabled
                  className="text-sm bg-gray-200 text-gray-500 cursor-not-allowed w-full rounded-full"
                >
                  No disponible
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
