import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Ingreso from "./Ingreso";

beforeEach(() => {
  localStorage.clear();
});

describe("Ingreso - autenticación", () => {
  it("redirige al cliente a /mi-cuenta tras el login", async () => {
    const usuario = userEvent.setup();
    // Routes permite que navigate() resuelva la ruta destino dentro del test
    render(
      <MemoryRouter initialEntries={["/ingreso"]}>
        <Routes>
          <Route path="/ingreso" element={<Ingreso />} />
          <Route path="/mi-cuenta" element={<div>Mi cuenta</div>} />
        </Routes>
      </MemoryRouter>
    );
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "cliente@sanmarcos.cl");
    await usuario.type(screen.getByLabelText(/contraseña/i), "cliente123");
    await usuario.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(screen.getByText("Mi cuenta")).toBeInTheDocument();
    const sesion = JSON.parse(localStorage.getItem("sesion"));
    expect(sesion.rol).toBe("Cliente");
    expect(sesion.email).toBe("cliente@sanmarcos.cl");
  });
});
