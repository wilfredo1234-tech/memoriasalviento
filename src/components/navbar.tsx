
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Building2,
  Wrench,
  FileText,
  Users
} from 'lucide-react'
import NavbarMobile from './NavbarMobile'
import { useState } from 'react'
import { Modal } from './Modal'


const Navbar = () => {
  const [openPago, setOpenPago] = useState(false)
  const [openFinanciamiento, setOpenFinanciamiento] = useState(false)
  const [openInscripcion, setOpenInscripcion] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between">

        {/* Logo + título */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/1.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full shadow-md cursor-pointer"
          />
          <div className="text-gray-800 leading-tight">
            <p className="font-extrabold text-lg tracking-tight">MEMORIAS AL VIENTO</p>
            <p className="text-sm text-gray-500">Una lucha contra el olvido</p>
          </div>
        </Link>

        {/* Navegación escritorio */}
        <div className="hidden md:flex items-center gap-8">
          {/* Institución */}
          <div className="relative group">
            <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Building2 className="w-4 h-4 text-gray-500" />
              Institución
            </Link>
            <div className="absolute left-0 hidden group-hover:flex flex-col top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 border">
              <p className="font-semibold text-gray-800 mb-2">Sobre nosotros</p>
              <Link href="/nosotros#quienes-somos" className="block text-sm text-gray-700 hover:text-primary py-1">¿Quiénes somos?</Link>
              <Link href="/nosotros#mision" className="block text-sm text-gray-700 hover:text-primary py-1">Misión</Link>
              <Link href="/nosotros#vision" className="block text-sm text-gray-700 hover:text-primary py-1">Visión</Link>
              <Link href="/nosotros#valores" className="block text-sm text-gray-700 hover:text-primary py-1">Valores Institucionales</Link>
              <hr className="my-2" />
              <Link href="/routes/sobre-nosotros" className="text-sm text-blue-600 hover:underline font-medium">Ver todo</Link>
            </div>
          </div>

          {/* Servicios */}
          <div className="relative group">
            <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Wrench className="w-4 h-4 text-gray-500" />
              Servicios
            </Link>
            <div className="absolute left-0 hidden group-hover:flex flex-col top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 border">
              <p className="font-semibold text-gray-800 mb-2">Nuestros servicios</p>
              <Link href="/servicios/valoracion" className="block text-sm text-gray-700 hover:text-primary py-1">Valoración</Link>
              <Link href="/servicios/psicologia" className="block text-sm text-gray-700 hover:text-primary py-1">Psicología</Link>
              <Link href="/servicios/cuidado" className="block text-sm text-gray-700 hover:text-primary py-1">Cuidado en casa</Link>
              <Link href="/servicios/recreacion" className="block text-sm text-gray-700 hover:text-primary py-1">Recreación</Link>
            </div>
          </div>

          {/* Normatividad */}
          <div className="relative group">
            <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FileText className="w-4 h-4 text-gray-500" />
              Normatividad
            </Link>
          </div>

          {/* ¿Usted es? */}
          <div className="relative group">
            <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Users className="w-4 h-4 text-gray-500" />
              ¿Usted es?
            </Link>
            <div className="absolute left-0 hidden group-hover:flex flex-col top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 border">
              <p className="font-semibold text-gray-800 mb-2">Seleccione su perfil</p>
              <Link href="/routes/cuidador" className="block text-sm text-gray-700 hover:text-primary py-1">Cuidador</Link>
              <Link href="/routes/paciente" className="block text-sm text-gray-700 hover:text-primary py-1">Paciente</Link>
              <Link href="/routes/familia" className="block text-sm text-gray-700 hover:text-primary py-1">Familiar</Link>
            </div>
          </div>

          {/* Botones */}
          <div className="flex items-center gap-3 ml-6">
            <Button onClick={() => setOpenPago(true)} className="bg-yellow-200 text-gray-900 hover:bg-yellow-500 transition rounded-full">Realiza tu pago</Button>
            <Button onClick={() => setOpenFinanciamiento(true)} className="bg-lime-300 text-black hover:bg-green-600 transition rounded-full">Financiamiento</Button>
            <Button onClick={() => setOpenInscripcion(true)} className="bg-cyan-300 text-black hover:bg-blue-700 transition rounded-full">Inscribirse</Button>
          </div>
        </div>

        {/* Menú móvil */}
        <NavbarMobile />
      </div>

      <Modal
  open={openPago}
  onOpenChange={setOpenPago}
  title="Realiza tu pago"
  buttonText="Pagar"
  formType="pago"
  onSubmit={(data) => console.log("Pago:", data)}
/>

<Modal
  open={openFinanciamiento}
  onOpenChange={setOpenFinanciamiento}
  title="Solicita financiamiento"
  buttonText="Solicitar"
  formType="financiamiento"
  onSubmit={(data) => console.log("Financiamiento:", data)}
/>

<Modal
  open={openInscripcion}
  onOpenChange={setOpenInscripcion}
  title="Formulario de inscripción"
  buttonText="Inscribirme"
  formType="inscripcion"
  onSubmit={(data) => console.log("Inscripción:", data)}
/>

    </header>
  )
}

export default Navbar
