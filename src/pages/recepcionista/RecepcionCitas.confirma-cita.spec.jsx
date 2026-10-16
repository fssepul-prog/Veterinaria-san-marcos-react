import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import RecepcionCitas from "./RecepcionCitas"

beforeEach(() => {
  localStorage.clear()
})

describe("RecepcionCitas - confirmar cita", () => {
  it("reduce en uno los botones Confirmar al confirmar una cita pendiente", async () => {
    const usuario = userEvent.setup()
    render(<RecepcionCitas />)
    const botonesConfirmar = screen.getAllByRole("button", { name: /confirmar/i })
    await usuario.click(botonesConfirmar[0])
    expect(screen.getAllByRole("button", { name: /confirmar/i })).toHaveLength(botonesConfirmar.length - 1)
  })
})
