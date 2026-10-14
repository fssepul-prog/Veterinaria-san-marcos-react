import { render, screen } from "@testing-library/react"
import AdminHistorial from "./AdminHistorial"

describe("AdminHistorial", () => {
  it("renderiza el heading y muestra los pacientes de la tabla", () => {
    render(<AdminHistorial />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByText("Firulais")).toBeInTheDocument()
  })
})
