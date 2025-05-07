// components/CuidadorQuiz.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const preguntas = [
  "¿Has sentido alteraciones de sueño últimamente?",
  "¿Te sientes físicamente agotado con frecuencia?",
  "¿Te cuesta disfrutar las cosas que antes te gustaban?",
  "¿Te sientes solo o sin apoyo emocional?",
  "¿Has sentido que no puedes con tus responsabilidades?",
];

export const CuidadorQuiz = () => {
  const [respuestas, setRespuestas] = useState<number[]>(Array(preguntas.length).fill(0));
  const [enviado, setEnviado] = useState(false);

  const handleRespuesta = (index: number, valor: number) => {
    const nuevas = [...respuestas];
    nuevas[index] = valor;
    setRespuestas(nuevas);
  };

  const calcularResultado = () => {
    const total = respuestas.reduce((acc, val) => acc + val, 0);
    const maximo = preguntas.length * 5;
    const porcentaje = (total / maximo) * 100;

    if (porcentaje < 33) return { color: "green", mensaje: "Sin signos de sobrecarga", porcentaje };
    if (porcentaje < 66) return { color: "yellow", mensaje: "Atención necesaria", porcentaje };
    return { color: "red", mensaje: "Cuidado urgente", porcentaje };
  };

  const resultado = calcularResultado();

  const getColorClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-400";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <Card className="bg-white shadow-xl rounded-2xl p-6">
      <CardContent>
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Test De Valoración Autodidacta</h3>
        {!enviado ? (
          <div className="space-y-6">
            {preguntas.map((pregunta, index) => (
              <div key={index}>
                <p className="font-medium text-gray-700">{pregunta}</p>
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((valor) => (
                    <button
                      key={valor}
                      onClick={() => handleRespuesta(index, valor)}
                      className={`w-10 h-10 rounded-full text-white font-bold ${
                        respuestas[index] === valor ? "bg-blue-600" : "bg-gray-300 hover:bg-blue-400"
                      }`}
                    >
                      {valor}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <Button
              onClick={() => setEnviado(true)}
              className="bg-blue-600 text-white hover:bg-blue-700 mt-6"
            >
              Ver Resultado
            </Button>
          </div>
        ) : (
          <div className="text-center mt-6">
            <p className="text-lg font-semibold mb-4">
              Resultado:{" "}
              <span
                className={`${
                  resultado.color === "green"
                    ? "text-green-600"
                    : resultado.color === "yellow"
                    ? "text-yellow-500"
                    : "text-red-600"
                }`}
              >
                {resultado.mensaje}
              </span>
            </p>
            {/* Barra personalizada */}
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-700 ${getColorClass(resultado.color)}`}
                style={{ width: `${resultado.porcentaje}%` }}
              />
            </div>
            <Button
              onClick={() => {
                setRespuestas(Array(preguntas.length).fill(0));
                setEnviado(false);
              }}
              className="mt-4 bg-gray-300 text-black hover:bg-gray-400"
            >
              Reintentar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
