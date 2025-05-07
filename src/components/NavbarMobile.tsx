'use client'

import Link from 'next/link'
import {
  Menu,
  Landmark,
  Settings,
  FileText,
  HelpCircle,
  CreditCard,
  DollarSign,
  UserPlus,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'
import { Modal } from './Modal'

const NavbarMobile = () => {
  const [openSheet, setOpenSheet] = useState(false)
  const [openPago, setOpenPago] = useState(false)
  const [openFinanciamiento, setOpenFinanciamiento] = useState(false)
  const [openInscripcion, setOpenInscripcion] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleOpenPago = () => setOpenPago(true)
  const handleClosePago = () => setOpenPago(false)
  const handleOpenFinanciamiento = () => setOpenFinanciamiento(true)
  const handleCloseFinanciamiento = () => setOpenFinanciamiento(false)
  const handleOpenInscripcion = () => setOpenInscripcion(true)
  const handleCloseInscripcion = () => setOpenInscripcion(false)

  const handleDropdownClick = () => setOpenDropdown(!openDropdown)

  const handleLinkClick = () => {
    setOpenDropdown(false)
    setOpenSheet(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Abrir menú">
            <Menu className="h-6 w-6 text-gray-700" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[260px] sm:w-[300px] bg-blue-100 px-6 py-8 shadow-lg">
          <nav className="flex flex-col h-full justify-between">
            <div className="space-y-5 text-gray-800 font-medium text-base">
              <Link href="/routes/sobre-nosotros" className="flex items-center gap-2 hover:text-primary transition-colors" onClick={handleLinkClick}>
              
                <Landmark className="h-5 w-5" /> Institución
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors" onClick={handleLinkClick}>
                <Settings className="h-5 w-5" /> Servicios
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FileText className="h-5 w-5" /> Normatividad
              </Link>

              <div>
                <button
                  onClick={handleDropdownClick}
                  className="flex items-center gap-2 w-full text-left hover:text-primary transition-colors"
                >
                  <HelpCircle className="h-5 w-5" />
                  ¿Usted es?
                  {openDropdown ? <ChevronUp className="h-4 w-4 ml-auto" /> : <ChevronDown className="h-4 w-4 ml-auto" />}
                </button>
                {openDropdown && (
                  <div className="ml-6 mt-2 space-y-2 text-sm text-gray-700">
                    <Link href="/routes/cuidador" className="block hover:text-primary" onClick={handleLinkClick}>
                      Cuidador
                    </Link>
                    <Link href="/routes/familia" className="block hover:text-primary" onClick={handleLinkClick}>
                      Familiar
                    </Link>
                    <Link href="/routes/paciente" className="block hover:text-primary" onClick={handleLinkClick}>
                      Paciente
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <Button
                onClick={handleOpenPago}
                className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors"
              >
                <CreditCard className="h-4 w-4 mr-2" /> Realiza tu pago
              </Button>
              <Button
                onClick={handleOpenFinanciamiento}
                className="w-full bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <DollarSign className="h-4 w-4 mr-2" /> Financiamiento
              </Button>
              <Button
                onClick={handleOpenInscripcion}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <UserPlus className="h-4 w-4 mr-2" /> Inscribirse
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      <Modal
        open={openPago}
        onOpenChange={handleClosePago}
        title="Pago"
        buttonText="Realizar pago"
        onSubmit={(formData) => console.log(formData)}
        formType="pago"
      />
      <Modal
        open={openFinanciamiento}
        onOpenChange={handleCloseFinanciamiento}
        title="Opciones de Financiamiento"
        buttonText="Solicitar financiamiento"
        onSubmit={(formData) => console.log(formData)}
        formType="financiamiento"
      />
      <Modal
        open={openInscripcion}
        onOpenChange={handleCloseInscripcion}
        title="Formulario de Inscripción"
        buttonText="Inscribirse"
        onSubmit={(formData) => console.log(formData)}
        formType="inscripcion"
      />
    </div>
  )
}

export default NavbarMobile
