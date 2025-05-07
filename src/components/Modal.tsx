// components/modals/Modal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  buttonText: string
  onSubmit: (formData: Record<string, string>) => void
  formType: "pago" | "financiamiento" | "inscripcion"
}

export function Modal({ open, onOpenChange, title, buttonText, onSubmit, formType }: ModalProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>
      onSubmit(formData)
    }
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-sky-50 p-6 rounded-lg shadow-lg space-y-6">
          <DialogHeader className="border-b border-gray-200 pb-4">
            <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            {formType === "pago" && (
              <>
                <div>
                  <Label>Tipo de documento</Label>
                  <Select name="tipo_documento" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tipo de documento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cc">Cédula de ciudadanía</SelectItem>
                      <SelectItem value="ti">Tarjeta de identidad</SelectItem>
                      <SelectItem value="profesional">Profesional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Número de documento</Label>
                  <Input
                    name="numero_documento"
                    type="text"
                    required
                    minLength={5}
                    pattern="^[0-9]+$"
                    placeholder="Ej: 1234567890"
                  />
                </div>
                <div>
                  <Label>Referencia de pago</Label>
                  <Input
                    name="referencia_pago"
                    type="text"
                    required
                    minLength={4}
                    placeholder="Ej: REF123456"
                  />
                </div>
              </>
            )}
  
  {formType === "financiamiento" && (
  <>
    <div>
      <Label> Efectivo</Label>
      <Input
        name="efectivo"
        type="text"
        placeholder="Ej: 50000"
        required
        pattern="^[0-9]+$"
      />
    </div>
    <div>
      <Label> Seguro médico</Label>
      <Input
        name="seguro_medico"
        type="text"
        placeholder="Ej: Plan básico"
        required
      />
    </div>
    <div>
      <Label>Transferencia bancaria</Label>
      <Input
        name="transferencia_bancaria"
        type="text"
        placeholder="Ej: Número de cuenta"
        required
      />
    </div>
    <div>
      <Label> Pago a cuotas</Label>
      <Input
        name="pago_cuotas"
        type="text"
        placeholder="Ej: 3 cuotas de 15000"
        required
      />
    </div>
  </>
)}

  
            {formType === "inscripcion" && (
              <>
                <div>
                  <Label>Nombre</Label>
                  <Input name="nombre" required minLength={2} />
                </div>
                <div>
                  <Label>Apellido</Label>
                  <Input name="apellido" required minLength={2} />
                </div>
                <div>
                  <Label>Tipo de documento</Label>
                  <Select name="tipo_documento" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tipo de documento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cc">Cédula de ciudadanía</SelectItem>
                      <SelectItem value="ti">Tarjeta de identidad</SelectItem>
                      <SelectItem value="ce">Cédula de extranjería</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Número de documento</Label>
                  <Input
                    name="numero_documento"
                    required
                    minLength={5}
                    pattern="^[0-9]+$"
                    placeholder="Ej: 123456789"
                  />
                </div>
                <div>
                  <Label>Celular</Label>
                  <Input
                    name="celular"
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    placeholder="Ej: 3001234567"
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input name="email" type="email" required placeholder="correo@ejemplo.com" />
                </div>
                <div>
                  <Label>Servicio</Label>
                  <Input name="servicio" required  />
                </div>
              </>
            )}
  
            <DialogFooter>
              <Button
                type="submit"
                className="bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out px-6 py-2 rounded-lg"
              >
                {buttonText}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
  }
  
