import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Ingreso from "./Ingreso";

beforeEach(() => {
  localStorage.clear();
});

describe("Ingreso - autenticación", () => {
  it("redirige al administrador a /admin/servicios tras el login", async () => {
    const usuario = userEvent.setup();
    // Routes permite que navigate() resuelva la ruta destino dentro del test
    render(
      <MemoryRouter initialEntries={["/ingreso"]}>
        <Routes>
          <Route path="/ingreso" element={<Ingreso />} />
          <Route path="/admin/servicios" element={<div>Panel de administración</div>} />
        </Routes>
      </MemoryRouter>
    );
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "admin@sanmarcos.cl");
    await usuario.type(screen.getByLabelText(/contraseña/i), "admin123");
    await usuario.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(screen.getByText("Panel de administración")).toBeInTheDocument();
    const sesion = JSON.parse(localStorage.getItem("sesion"));
    expect(sesion.rol).toBe("Administrador");
    expect(sesion.email).toBe("admin@sanmarcos.cl");
  });
});
