'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Service {
  name: string;
  image: string;
}

const services: Service[] = [
  {
    name: 'Apoyo Psicológico al Cuidador',
    image: '/cuidador.jpg',
  },
  {
    name: 'Talleres de Autocuidado para Cuidadores',
    image: '/talleres.jpg',
  },
  {
    name: 'Estimulación Cognitiva para Pacientes con Alzheimer',
    image: '/estimulacion.jpg',
  },
  {
    name: 'Taller de Habilidades Sociales para Personas con Demencia',
    image: '/habilidades.jpg',
  },
  {
    name: 'Intervención Sistémica Familiar',
    image: '/4.jpg',
  },
];

const ServiceSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-xl shadow-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={services[index].image}
            alt={services[index].name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h2 className="text-white text-xl md:text-3xl font-semibold text-center">
              {services[index].name}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <button onClick={prevSlide} className="bg-white/80 rounded-full p-2 hover:bg-white">
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <button onClick={nextSlide} className="bg-white/80 rounded-full p-2 hover:bg-white">
          ▶
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
