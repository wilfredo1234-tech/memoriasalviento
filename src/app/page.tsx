
import ServiceSlider from "@/components/ServiceSlider"
import ContactHero from "@/components/ContactHero"

export default function Home() {
  return (
    <>
      <main className="w-full">
        <ServiceSlider />

        {/* Componente ContactHero reemplazando "Bienvenido" */}
        <div className="mt-10 px-4">
          <ContactHero />
        </div>
      </main>
    </>
  )
}
