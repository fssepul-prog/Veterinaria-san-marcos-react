import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import RecepcionCitas from "./RecepcionCitas"

beforeEach(() => {
  localStorage.clear()
})

describe("RecepcionCitas - cancelar reagendado", () => {
  it("oculta el formulario de reagendado al hacer clic en Cancelar", async () => {
    const usuario = userEvent.setup()
    render(<RecepcionCitas />)
    await usuario.click(screen.getAllByRole("button", { name: /reagendar/i })[0])
    expect(screen.getByLabelText(/nueva fecha/i)).toBeInTheDocument()
    await usuario.click(screen.getByRole("button", { name: /cancelar/i }))
    expect(screen.queryByLabelText(/nueva fecha/i)).not.toBeInTheDocument()
  })
})
