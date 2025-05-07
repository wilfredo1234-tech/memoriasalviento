import PatientProfileBooklets from "./components/PatientProfileBooklets";

export default function PacientePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado superior */}
      <header className="bg-cyan-300 text-blue-900 py-12 text-center shadow">
        <h1 className="text-4xl font-bold">Perfil del paciente</h1>
      </header>

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {/* Cards de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-yellow-200 p-6 rounded-2xl shadow-md border border-gray-200 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-800">
              ¿Por qué es importante recibir tratamiento neuropsicológico?
            </h2>
            <p className="text-gray-800">
              
              La estimulación y rehabilitación de funciones cognitivas han demostrado resultados favorables que ayudan a ralentízar la perdida de los diferentes dominios cognitivos de pacientes con EA
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-lime-300 p-6 rounded-2xl shadow-md border border-gray-200 space-y-4">
            <h2 className="text-2xl font-semibold text-lime-800">Diagnóstico</h2>
            <p className="text-gray-800"><strong>Condición:</strong> Demencia tipo Alzheimer</p>
            <p className="text-gray-800">SENIL / PRE-SENIL</p>
            <p className="text-gray-800">Fase: Leve / Moderada</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 space-y-4 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold text-cyan-700">¿Qué es Alzheimer?</h2>
            <p className="text-gray-700">
              Es una enfermedad neurodegenerativa que deteriora progresivamente las funciones cognitivas de quien la padece.
            </p>
          </div>
        </div>

        {/* Sección de estimulación */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            ¿Qué quieres estimular hoy?
          </h2>
        </div>

        {/* Cuadernillos */}
        <PatientProfileBooklets />
      </main>
    </div>
  );
}
