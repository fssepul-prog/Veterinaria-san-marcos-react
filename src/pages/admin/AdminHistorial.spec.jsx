import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AdminHistorial from "./AdminHistorial"
 
describe("AdminHistorial", () => {
  it("renderiza el heading y muestra los pacientes de la tabla", () => {
    render(
      <MemoryRouter>
        <AdminHistorial />
      </MemoryRouter>
    )
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByText("Firulais")).toBeInTheDocument()
  })
})