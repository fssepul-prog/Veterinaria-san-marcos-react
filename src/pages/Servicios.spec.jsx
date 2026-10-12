// src/pages/Servicios.spec.jsx
// Pruebas de filtrado: verifican que los botones de categoría muestran y ocultan
// tarjetas de servicios correctamente al hacer clic.
import { render, screen } from "@testing-library/react";
// userEvent simula interacciones reales del usuario (clic, escritura) de forma asíncrona.
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Servicios from "./Servicios";
// Se importa el arreglo real de servicios para calcular cuántos resultados se esperan.
import { servicios } from "../data/servicios";

describe("Servicios - filtro de categoría", () => {

  it("muestra solo los servicios de Vacunación al filtrar", async () => {
    // userEvent.setup() crea una instancia que maneja eventos como el navegador real.
    const usuario = userEvent.setup();
    render(<MemoryRouter><Servicios /></MemoryRouter>);

    // Se hace clic en el botón "Vacunación" para activar el filtro de esa categoría.
    await usuario.click(screen.getByRole("button", { name: "Vacunación" }));

    // Se calcula cuántos servicios de la categoría "Vacunación" existen en los datos reales.
    const vacunacion = servicios.filter((s) => s.categoria === "Vacunación");

    // Cada tarjeta de servicio tiene un <h3> con su nombre.
    // La cantidad de headings nivel 3 debe coincidir exactamente con los servicios filtrados.
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(vacunacion.length);
  });

  it("muestra todos los servicios al volver al filtro Todas", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Servicios /></MemoryRouter>);

    // Primero se filtra por "Vacunación" para cambiar el estado interno del componente.
    await usuario.click(screen.getByRole("button", { name: "Vacunación" }));

    // Luego se hace clic en "Todas" para restablecer el filtro.
    await usuario.click(screen.getByRole("button", { name: "Todas" }));

    // Ahora deben aparecer todos los servicios del arreglo completo.
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(servicios.length);
  });
});
