"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CuidadorPrecios = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tarifascuidador.pdf";
    link.download = "precios-cuidador.pdf";
    link.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-100 py-16 shadow-inner"
    >
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">
          Tarifas cuidador
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Aquí puedes descargar el archivo con todos los precios actualizados de nuestros servicios de cuidado.
          Nos comprometemos con la transparencia y el bienestar de quienes más lo necesitan.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button
            onClick={handleDownload}
            className="bg-sky-300 text-sky-900 hover:bg-sky-400 transition-all px-6 py-3 rounded-xl text-lg font-semibold shadow-md"
          >
            <Download className="mr-2 h-5 w-5 animate-bounce-slow" />
            Descargar PDF
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CuidadorPrecios;
