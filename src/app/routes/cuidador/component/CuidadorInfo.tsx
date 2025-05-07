// components/CuidadorInfo.tsx
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Brain, HeartPulse, ShieldCheck } from "lucide-react";

export const CuidadorInfo = () => {
  return (
    <Card className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
      <CardContent>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-cyan-700 flex items-center justify-center gap-2">
            <AlertTriangle className="text-yellow-500" />
            Síntomas indicadores de sobrecarga en el cuidador
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Reconoce señales tempranas para buscar apoyo y prevenir el agotamiento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* COMORBILIDADES */}
          <div className="bg-yellow-200 border border-yellow-300 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-yellow-700 font-semibold">
              <ShieldCheck className="w-5 h-5" />
              Comorbilidades
            </div>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Ansiedad</li>
              <li>Alextimia</li>
              <li>Depresión</li>
              <li>Estrés crónico</li>
            </ul>
          </div>

          {/* SÍNTOMAS FÍSICOS */}
          <div className="bg-lime-200 border border-lime-300 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-lime-700 font-semibold">
              <HeartPulse className="w-5 h-5" />
              Síntomas Físicos
            </div>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Alteraciones de sueño</li>
              <li>Pérdida de apetito</li>
              <li>Cansancio físico</li>
            </ul>
          </div>

          {/* SÍNTOMAS PSICOLÓGICOS */}
          <div className="bg-cyan-200 border border-cyan-300 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-cyan-700 font-semibold">
              <Brain className="w-5 h-5" />
              Síntomas Psicológicos
            </div>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Estado de ánimo irritable</li>
              <li>Sentimientos de inutilidad</li>
              <li>Pérdida del placer (anhedonia)</li>
              <li>Baja autoestima</li>
              <li>pérdida de significado de su propia vida</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
