"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CuidadorInfo } from "./component/CuidadorInfo";
import { CuidadorQuiz } from "./component/CuidadorAccordion";
import ContenidoCuidador3 from "./component/ContenidoCuidador3";
import Image from "next/image"; // Importar Image
import CuidadorPrecios from "./component/CuidadorPrecios";

const CuidadorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección de encabezado */}
      <header className="bg-cyan-300 text-blue-900 py-12 text-center shadow">
        <h1 className="text-4xl font-bold">Perfil del Cuidador</h1>
        <p className="mt-4 text-lg">Evaluación del Síndrome del Cuidador Primario</p>
      </header>

      {/* Sección de descripción */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800">¿Qué es el Síndrome del Cuidador?</h2>
            <p className="mt-4 text-gray-700">
              El síndrome del cuidador primario hace referencia al desgaste físico, psicológico, emocional y
              social de las personas encargadas del cuidado, especialmente de aquellos con enfermedades crónicas, como
              las neurodegenerativas demenciales. Este desgaste afecta a nivel emocional y físico debido a la sobrecarga
              de responsabilidades.
            </p>
          </div>
          <div className="bg-lime-300 rounded-lg p-6 flex items-center justify-center">
            {/* Reemplazar <img> con <Image> */}
            <Image 
              src="/cuidador.jpg" 
              alt="Cuidador" 
              className="rounded-lg shadow-md max-w-full h-auto" 
              width={500} // Ajusta el valor según el tamaño de la imagen
              height={300} // Ajusta el valor según el tamaño de la imagen
            />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Sección de criterios y síntomas */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-cyan-700">Criterios, Síntomas y Factores de Riesgo</h2>
          <p className="mt-4 text-lg text-gray-600">Identificación temprana y manejo del síndrome.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-yellow-200 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-800">Criterios Principales</h3>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Tener un paciente con enfermedad crónica, especialmente neurodegenerativa.</li>
              <li>Responsabilidad del cuidado recaída principalmente en un solo miembro de la familia.</li>
              <li>Desgaste emocional y físico debido a la carga de trabajo constante.</li>
            </ul>
          </div>

          <div className="bg-lime-200 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-lime-800">Factores de Riesgo y Protección</h3>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Falta de apoyo social y emocional.</li>
              <li>Enfermedades crónicas no tratadas adecuadamente.</li>
              <li>Factores de resiliencia y apoyo de la comunidad.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPONENTES PERSONALIZADOS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-12">
        <CuidadorInfo />
        <ContenidoCuidador3 />
        <CuidadorPrecios />
        <CuidadorQuiz />
      </section>

      <Separator className="my-12" />

      {/* BOTÓN FINAL */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-lg text-gray-700">¿Estás listo para recibir más información y apoyo?</p>
        <Button className="mt-6 bg-yellow-200 text-gray-800 hover:bg-yellow-300 transition-all">
          Solicitar Ayuda
        </Button>
      </section>
    </div>
  );
};

export default CuidadorPage;
