// src/components/recepcionista/TarjetaFicha.spec.jsx

// Prueba de renderizado y evento: verifica que la tarjeta muestra los datos de la ficha
// y que el botón Editar llama al callback con el id correcto.
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import TarjetaFicha from "./TarjetaFicha"

const ficha = {
  id: 1,
  dueno: "Javiera Contreras",
  mascota: "Toby",
  fecha: "09-10-2026",
  motivo: "Picazón en la piel",
  diagnostico: "Dermatitis leve.",
}

describe("TarjetaFicha", () => {
  it("muestra el nombre de la mascota y el dueño recibidos por props", () => {
    render(<TarjetaFicha ficha={ficha} onEditar={() => {}} />)
    expect(screen.getByText("Toby")).toBeInTheDocument()
    expect(screen.getByText(/Javiera Contreras/i)).toBeInTheDocument()
  })

  it("llama a onEditar con el id de la ficha al hacer clic en Editar", async () => {
    const usuario = userEvent.setup()
    const onEditar = vi.fn()
    render(<TarjetaFicha ficha={ficha} onEditar={onEditar} />)
    await usuario.click(screen.getByRole("button", { name: /editar/i }))
    expect(onEditar).toHaveBeenCalledWith(ficha.id)
  })
})
