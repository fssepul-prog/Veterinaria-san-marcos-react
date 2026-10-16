import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import MiCuenta from "./MiCuenta";

beforeEach(() => {
  localStorage.clear();
});

describe("MiCuenta - con sesión", () => {
  it("muestra el nombre del usuario y el botón de cerrar sesión cuando hay sesión activa", () => {
    localStorage.setItem("sesion", JSON.stringify({ nombre: "Ana García", rol: "cliente" }));
    render(<MemoryRouter><MiCuenta /></MemoryRouter>);
    expect(screen.getByText(/Bienvenido, Ana García/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cerrar sesión/i })).toBeInTheDocument();
  });

  it("vuelve a mostrar acceso restringido después de cerrar sesión", async () => {
    const usuario = userEvent.setup();
    localStorage.setItem("sesion", JSON.stringify({ nombre: "Ana García", rol: "cliente" }));
    render(<MemoryRouter><MiCuenta /></MemoryRouter>);
    await usuario.click(screen.getByRole("button", { name: /cerrar sesión/i }));
    expect(screen.getByText("Acceso restringido")).toBeInTheDocument();
    expect(localStorage.getItem("sesion")).toBeNull();
  });
});
