// src/pages/Recursos.spec.jsx
// Verifica que la página renderiza correctamente su contenido principal.
import { render, screen } from "@testing-library/react"
import Recursos from "./Recursos"

describe("Recursos", () => {
  it("renderiza el heading principal y las recomendaciones de cuidado", () => {
    render(<Recursos />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Vacunas al día/i)).toBeInTheDocument()
  })
})
