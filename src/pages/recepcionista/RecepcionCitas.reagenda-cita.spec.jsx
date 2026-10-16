import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import RecepcionCitas from "./RecepcionCitas"

beforeEach(() => {
  localStorage.clear()
})

describe("RecepcionCitas - reagendar cita", () => {
  it("muestra el formulario de reagendado al hacer clic en Reagendar", async () => {
    const usuario = userEvent.setup()
    render(<RecepcionCitas />)
    const botonesReagendar = screen.getAllByRole("button", { name: /reagendar/i })
    await usuario.click(botonesReagendar[0])
    expect(screen.getByText(/reagendar a/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/nueva fecha/i)).toBeInTheDocument()
  })

  it("oculta el formulario al guardar la nueva fecha", async () => {
    const usuario = userEvent.setup()
    render(<RecepcionCitas />)
    await usuario.click(screen.getAllByRole("button", { name: /reagendar/i })[0])
    const inputFecha = screen.getByLabelText(/nueva fecha/i)
    await usuario.clear(inputFecha)
    await usuario.type(inputFecha, "2026-11-01")
    await usuario.click(screen.getByRole("button", { name: /guardar/i }))
    expect(screen.queryByLabelText(/nueva fecha/i)).not.toBeInTheDocument()
  })
})
