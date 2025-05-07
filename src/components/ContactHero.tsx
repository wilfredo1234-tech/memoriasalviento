'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactHero() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full bg-[#E6F6F5] rounded-2xl shadow-xl overflow-hidden mb-12"> {/* Espacio adicional abajo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Aumentar el espacio entre las columnas */}
        {/* Lado izquierdo: texto e info */}
        <div className="p-12 flex flex-col justify-center"> {/* Aumentar el padding */}
          <h2 className="text-5xl font-extrabold text-[#222] mb-6 leading-tight"> {/* Aumentar el tamaño del texto */}
            Vive experiencias únicas,<br />crea recuerdos eternos.
          </h2>
          <p className="text-gray-700 text-xl mb-8"> {/* Aumentar el tamaño del texto */}
            Conoce nuestros paquetes, actividades y servicios. Creamos experiencias con alma para que cada momento sea inolvidable.
          </p>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#3FD0C9] hover:bg-[#33b8b0] text-white font-semibold px-8 py-4 rounded-full w-fit shadow-md"> {/* Botón más grande */}
                Contáctanos
              </Button>
            </DialogTrigger>

            <DialogContent className="bg-white rounded-2xl p-8 max-w-2xl w-full"> 
              <DialogHeader>
                <DialogTitle className="text-3xl text-center text-[#333] mb-6"> 
                  Déjanos tus datos
                </DialogTitle>
              </DialogHeader>

              <form className="space-y-6"> 
                <div className="flex gap-6">
                  <Input placeholder="Nombres" className="bg-[#E6F6F5]" />
                  <Input placeholder="Apellidos" className="bg-[#E6F6F5]" />
                </div>
                <div className="flex gap-6">
                  <Input placeholder="Celular" className="bg-[#E6F6F5]" />
                  <Input type="email" placeholder="E-mail" className="bg-[#E6F6F5]" />
                </div>
                <Input placeholder="Servicio de interés" className="bg-[#E6F6F5]" />
                <Textarea placeholder="¿Cómo podemos ayudarte?" className="bg-[#E6F6F5]" />
                <Button type="submit" className="bg-[#3FD0C9] hover:bg-[#33b8b0] text-white w-full font-semibold text-lg py-4">
                  Enviar Solicitud
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Lado derecho: imagen */}
        <div className="relative w-full h-[600px] md:h-auto"> 
          <Image
            src="/inicio.png" 
            alt="Experiencias únicas"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
