"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PreciosPaciente = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tarifaspaciente.pdf"; // Asegúrate de tener este archivo en /public
    link.download = "tarifas-paciente.pdf";
    link.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-100 py-16 shadow-inner"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-900">
          Tarifas para Pacientes
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Descarga el documento PDF con todos los precios actualizados para los servicios dirigidos a pacientes. Mantenemos nuestro compromiso con la transparencia y accesibilidad del tratamiento.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button
            onClick={handleDownload}
            className="bg-cyan-300 text-cyan-900 hover:bg-cyan-400 transition-all px-6 py-3 rounded-xl text-lg font-semibold shadow-md"
          >
            <Download className="mr-2 h-5 w-5 animate-bounce-slow" />
            Descargar Tarifas
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PreciosPaciente;
