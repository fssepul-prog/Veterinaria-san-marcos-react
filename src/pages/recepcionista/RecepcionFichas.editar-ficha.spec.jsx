import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import RecepcionFichas from "./RecepcionFichas"

beforeEach(() => {
  localStorage.clear()
})

describe("RecepcionFichas - editar ficha", () => {
  it("muestra el formulario de edición al hacer clic en Editar", async () => {
    const usuario = userEvent.setup()
    render(<RecepcionFichas />)
    const botonesEditar = screen.getAllByRole("button", { name: /editar/i })
    await usuario.click(botonesEditar[0])
    expect(screen.getByRole("heading", { name: /editar ficha de toby/i })).toBeInTheDocument()
  })

  it("actualiza la ficha y oculta el formulario al guardar", async () => {
    const usuario = userEvent.setup()
    render(<RecepcionFichas />)
    await usuario.click(screen.getAllByRole("button", { name: /editar/i })[0])
    const campoMotivo = screen.getByLabelText(/motivo/i)
    await usuario.clear(campoMotivo)
    await usuario.type(campoMotivo, "Revisión de rutina")
    await usuario.click(screen.getByRole("button", { name: /guardar/i }))
    expect(screen.queryByRole("heading", { name: /editar ficha de toby/i })).not.toBeInTheDocument()
  })
})
