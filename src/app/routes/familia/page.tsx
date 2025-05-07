"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import FamilyProfileCartillas from "./components/FamilyProfileCartillas";
import { Handshake, Users } from "lucide-react";
import Image from "next/image"; // Importación del componente Image

export default function FamilyProfilePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Encabezado superior */}
      <header className="bg-cyan-300 text-blue-900 py-12 text-center shadow">
        <h1 className="text-4xl font-bold">Perfil de la familia</h1>
      </header>

      <div className="max-w-5xl mx-auto space-y-10 p-8">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Comprender el rol de la familia en el cuidado de personas con Alzheimer es esencial para crear entornos empáticos, solidarios y resilientes.
          </p>
        </motion.div>

        <Separator />

        {/* MISIÓN DEL CENTRO */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="shadow-lg border-blue-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Handshake className="text-blue-500" />
                <h2 className="text-xl font-semibold text-blue-600">Nuestro compromiso</h2>
              </div>
              <p className="text-gray-700 text-justify">
              Es por esto que nuestro centro integral busca prevenir la sobrecarga emocional del cuidador del paciente con Alzheimer desde un enfoque sistémico, fortaleciendo las relaciones interpersonales de los familiares del cuidador para crear conciencia de las implicaciones del cuidado del paciente entre los miembros de la familia y así involucrarse en el cuidado de este 
              .
              </p>
            </CardContent>
          </Card>

          <div className="w-full h-auto hidden md:block">
            <Image 
              src="/familial.jpg" 
              alt="Apoyo familiar" 
              className="rounded-xl shadow-md"
              width={500}  // Ajusta el tamaño según lo necesario
              height={300} // Ajusta el tamaño según lo necesario
            />
          </div>
        </motion.div>

        {/* ROL DE LA FAMILIA */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="w-full h-auto hidden md:block">
            <Image 
              src="/familial.jpg" 
              alt="Valores familiares" 
              className="rounded-xl shadow-md"
              width={500}  // Ajusta el tamaño según lo necesario
              height={300} // Ajusta el tamaño según lo necesario
            />
          </div>

          <Card className="shadow-lg border-blue-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-blue-500" />
                <h2 className="text-xl font-semibold text-blue-600">El poder del sistema familiar</h2>
              </div>
              <p className="text-gray-700 text-justify">
              La familia es un sistema de convivencia, con o sin lazos de consanguinidad, en el que los miembros del hogar participan y colaboran en diversas funciones que permiten el sostenimiento de la familia, satisfacen sus necesidades psicosociales y desarrollan sus potencialidades. En 1974, la OMS propone una definición de salud y bienestar en la que se contemplan 3 dimensiones: “La salud es el completo bienestar físico, mental y social y no simplemente la ausencia de dolencias y enfermedades” el sistema familiar puede actuar como factor protector para el cumplimiento de lo definido anteriormente, esta puede influir en el bienestar físico y psicológico de sus miembros, por ello es importante el apoyo de la familia en situaciones de adversidad, como lo es que uno de sus integrantes sea diagnosticado con demencia tipo Alzheimer
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CARTILLAS DEL PERFIL FAMILIAR */}
        <FamilyProfileCartillas />
      </div>
    </section>
  );
}
