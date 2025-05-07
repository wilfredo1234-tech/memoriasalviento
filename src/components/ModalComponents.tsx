'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'

type ModalType = 'pago' | 'financiamiento' | 'inscribirse' | null

export const useModals = () => {
  const [open, setOpen] = useState<ModalType>(null)
  const openModal = (type: ModalType) => setOpen(type)
  const closeModal = () => setOpen(null)
  return { open, openModal, closeModal }
}

export const PagoModal = ({ open, onClose }: { open: boolean, onClose: () => void }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Realiza tu pago</DialogTitle>
      </DialogHeader>
      <p>Puedes hacer el pago por transferencia o QR. Pronto habilitaremos otros métodos.</p>
    </DialogContent>
  </Dialog>
)

export const FinanciamientoModal = ({ open, onClose }: { open: boolean, onClose: () => void }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Opciones de Financiamiento</DialogTitle>
      </DialogHeader>
      <p>Ofrecemos planes flexibles para que el cuidado no sea una carga económica.</p>
    </DialogContent>
  </Dialog>
)

export const InscribirseModal = ({ open, onClose }: { open: boolean, onClose: () => void }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Formulario de Inscripción</DialogTitle>
      </DialogHeader>
      <p>Déjanos tus datos y pronto nos pondremos en contacto.</p>
    </DialogContent>
  </Dialog>
)