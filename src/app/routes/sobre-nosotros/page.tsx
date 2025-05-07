"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const valores = [
  { titulo: "Compromiso", descripcion: "Nos dedicamos con responsabilidad y entrega a cada acción que realizamos." },
  { titulo: "Respeto", descripcion: "Valoramos y promovemos un trato digno hacia todas las personas." },
  { titulo: "Innovación", descripcion: "Buscamos constantemente nuevas formas de mejorar y crecer." },
  { titulo: "Trabajo en equipo", descripcion: "Fomentamos la colaboración y el apoyo mutuo para alcanzar objetivos comunes." },
];

export default function SobreNosotros() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col gap-24">
      
      {/* Encabezado */}
      <motion.header
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full bg-sky-100 text-sky-800 py-16 text-center shadow-sm border-b border-sky-300"
>
  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sobre Nosotros</h1>
  <p className="text-md md:text-lg text-sky-700 mt-4 max-w-3xl mx-auto px-4">
    Conoce quiénes somos, nuestra misión, visión y los valores que nos guían día a día.
  </p>
</motion.header>


      {/* ¿Quiénes Somos? */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-md border-l-8 border-green-400"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4">¿Quiénes Somos?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Seremos un referente internacional en la prevención del síndrome del cuidador, ofreciendo herramientas innovadoras para fortalecer el bienestar psicológico, la unión familiar y la calidad de vida de los cuidadores y pacientes, impactando positivamente en la sociedad.
        </p>
      </motion.section>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-10">
        {[{
          title: "Nuestra Misión",
          text: "Promover el bienestar integral de las personas a través de programas, servicios y acciones que fortalezcan su calidad de vida.",
          color: "sky"
        }, {
          title: "Nuestra Visión",
          text: "Ser reconocidos como una organización líder en transformación social, innovación comunitaria y apoyo integral a la ciudadanía.",
          color: "green"
        }].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <Card className={`border-${item.color}-400 border-l-4 shadow-md hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="p-6">
                <h3 className={`text-2xl font-bold text-${item.color}-500 mb-3`}>{item.title}</h3>
                <p className="text-gray-700 text-base">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Nuestros Valores */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-teal-400 text-transparent bg-clip-text mb-10">
          Nuestros Valores
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6 flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400 w-5 h-5" />
                    <h4 className="text-lg font-semibold text-green-500">{valor.titulo}</h4>
                  </div>
                  <p className="text-sm text-gray-600 text-left">{valor.descripcion}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
