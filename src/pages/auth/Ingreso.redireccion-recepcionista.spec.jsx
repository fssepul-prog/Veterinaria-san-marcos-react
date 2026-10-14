import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Ingreso from "./Ingreso";

beforeEach(() => {
  localStorage.clear();
});

describe("Ingreso - autenticación", () => {
  it("redirige a la recepcionista a /recepcion/citas tras el login", async () => {
    const usuario = userEvent.setup();
    // Routes permite que navigate() resuelva la ruta destino dentro del test
    render(
      <MemoryRouter initialEntries={["/ingreso"]}>
        <Routes>
          <Route path="/ingreso" element={<Ingreso />} />
          <Route path="/recepcion/citas" element={<div>Panel de recepción</div>} />
        </Routes>
      </MemoryRouter>
    );
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "recepcion@sanmarcos.cl");
    await usuario.type(screen.getByLabelText(/contraseña/i), "recep123");
    await usuario.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(screen.getByText("Panel de recepción")).toBeInTheDocument();
  });
});
