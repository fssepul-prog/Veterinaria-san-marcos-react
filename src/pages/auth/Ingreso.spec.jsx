// src/pages/auth/Ingreso.spec.jsx
// Pruebas de autenticación: verifican el manejo de credenciales incorrectas
// y la redirección correcta tras un inicio de sesión exitoso.
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Route y Routes se usan para simular la navegación real sin necesidad de vi.mock.
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Ingreso from "./Ingreso";

// Se limpia localStorage antes de cada prueba para partir sin sesión activa.
beforeEach(() => {
  localStorage.clear();
});

describe("Ingreso - autenticación", () => {

  it("muestra error con credenciales incorrectas", async () => {
    const usuario = userEvent.setup();
    // Se renderiza solo el componente Ingreso dentro de un MemoryRouter básico.
    render(
      <MemoryRouter>
        <Ingreso />
      </MemoryRouter>
    );

    // Se escriben credenciales que no existen en la lista de usuarios del sistema.
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "noexiste@test.com");
    await usuario.type(screen.getByLabelText(/contraseña/i), "wrongpass");
    await usuario.click(screen.getByRole("button", { name: /ingresar/i }));

    // El componente debe mostrar un mensaje de error visible en el DOM.
    expect(screen.getByText(/correo o contraseña incorrectos/i)).toBeInTheDocument();
  });

  it("redirige al administrador a /admin/servicios tras el login", async () => {
    const usuario = userEvent.setup();

    // Se configura MemoryRouter con dos rutas:
    // - "/ingreso": el formulario de login
    // - "/admin/servicios": un componente ficticio que representa el destino
    // De esta forma se prueba la redirección real sin mockear useNavigate.
    render(
      <MemoryRouter initialEntries={["/ingreso"]}>
        <Routes>
          <Route path="/ingreso" element={<Ingreso />} />
          <Route path="/admin/servicios" element={<div>Panel de administración</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Se ingresan las credenciales válidas del usuario Administrador definidas en usuarios.js.
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "admin@sanmarcos.cl");
    await usuario.type(screen.getByLabelText(/contraseña/i), "admin123");
    await usuario.click(screen.getByRole("button", { name: /ingresar/i }));

    // Si la redirección funcionó, el componente ficticio de destino debe estar visible.
    expect(screen.getByText("Panel de administración")).toBeInTheDocument();
  });
});
