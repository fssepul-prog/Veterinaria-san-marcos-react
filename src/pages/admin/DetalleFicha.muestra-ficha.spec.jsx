import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetalleFicha from "./DetalleFicha";
 
describe("DetalleFicha - muestra la ficha", () => {
  it("muestra el dueño del paciente cuyo id viene en la URL", () => {
    // Route con :id para que useParams pueda leer el id de la URL
    render(
      <MemoryRouter initialEntries={["/admin/historial/2"]}>
        <Routes>
          <Route path="/admin/historial/:id" element={<DetalleFicha />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Ana Pérez/i)).toBeInTheDocument();
  });
});