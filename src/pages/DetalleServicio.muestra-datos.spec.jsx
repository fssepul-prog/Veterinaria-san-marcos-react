import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetalleServicio from "./DetalleServicio";

describe("DetalleServicio - muestra servicio", () => {
  it("muestra el nombre del servicio cuyo id viene en la URL", () => {
    render(
      <MemoryRouter initialEntries={["/servicios/1"]}>
        <Routes>
          <Route path="/servicios/:id" element={<DetalleServicio />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Consulta general")).toBeInTheDocument();
  });
});
