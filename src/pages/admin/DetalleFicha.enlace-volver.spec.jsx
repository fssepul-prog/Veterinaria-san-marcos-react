import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetalleFicha from "./DetalleFicha";
 
describe("DetalleFicha - volver", () => {
  it("muestra el enlace Volver", () => {
    render(
      <MemoryRouter initialEntries={["/admin/historial/1"]}>
        <Routes>
          <Route path="/admin/historial/:id" element={<DetalleFicha />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /volver/i })).toBeInTheDocument();
  });
});