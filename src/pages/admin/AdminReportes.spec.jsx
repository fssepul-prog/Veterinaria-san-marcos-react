// src/pages/admin/AdminReportes.spec.jsx
// Verifica que la página renderiza el heading y los datos del reporte de atenciones.
import { render, screen } from "@testing-library/react"
import AdminReportes from "./AdminReportes"

describe("AdminReportes", () => {
  it("renderiza el heading y muestra los servicios del reporte", () => {
    render(<AdminReportes />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByText("Consulta general")).toBeInTheDocument()
  })
})
