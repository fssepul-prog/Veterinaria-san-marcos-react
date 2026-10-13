// src/pages/Nosotros.spec.jsx
// Verifica que la página renderiza correctamente su contenido principal.
import { render, screen } from "@testing-library/react"
import Nosotros from "./Nosotros"

describe("Nosotros", () => {
  it("renderiza el heading principal y el texto de historia", () => {
    render(<Nosotros />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/15 años/i)).toBeInTheDocument()
  })
})
