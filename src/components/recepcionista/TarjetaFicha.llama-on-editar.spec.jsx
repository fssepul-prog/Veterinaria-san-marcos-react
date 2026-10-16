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
  it("llama a onEditar con el id de la ficha al hacer clic en Editar", async () => {
    const onEditar = vi.fn()
    const usuario = userEvent.setup()
    render(<TarjetaFicha ficha={ficha} onEditar={onEditar} />)
    await usuario.click(screen.getByRole("button", { name: /editar/i }))
    expect(onEditar).toHaveBeenCalledWith(1)
  })
})
