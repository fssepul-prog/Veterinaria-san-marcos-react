// src/components/Navegacion.spec.jsx
// Prueba de control de acceso: verifica que la barra de navegación muestra u oculta
// enlaces según el rol del usuario almacenado en localStorage.
import { render, screen } from "@testing-library/react";
// MemoryRouter con initialEntries simula que el usuario está en una ruta específica del panel admin.
import { MemoryRouter } from "react-router-dom";
import Navegacion from "./Navegacion";

// Antes de cada prueba se escribe una sesión de Administrador en localStorage,
// simulando que el usuario ya inició sesión con ese rol.
beforeEach(() => {
  localStorage.setItem("sesion", JSON.stringify({
    email: "admin@sanmarcos.cl",
    nombre: "Administrador",
    rol: "Administrador",
  }));
});

// Después de cada prueba se limpia localStorage para no contaminar otras pruebas.
afterEach(() => {
  localStorage.clear();
});

describe("Navegacion - control de acceso por rol", () => {

  it("con sesión de Administrador muestra links de admin y oculta los públicos", () => {
    // Se renderiza la navegación dentro de un MemoryRouter posicionado en "/admin/servicios".
    // Navegacion.jsx lee localStorage al montarse y decide qué menú renderizar.
    render(
      <MemoryRouter initialEntries={["/admin/servicios"]}>
        <Navegacion />
      </MemoryRouter>
    );

    // Los enlaces "Usuarios" y "Reportes" son exclusivos del rol Administrador → deben existir.
    expect(screen.getByRole("link", { name: /usuarios/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reportes/i })).toBeInTheDocument();

    // Los enlaces del menú público ("Nosotros", "Inicio") no deben mostrarse al Administrador.
    // queryByRole retorna null si el elemento no existe (a diferencia de getByRole que lanza error).
    expect(screen.queryByRole("link", { name: /nosotros/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^inicio$/i })).not.toBeInTheDocument();
  });
});
