// src/pages/admin/AdminServicios.spec.jsx
// Pruebas de gestión CRUD: verifican que el administrador puede agregar
// y eliminar servicios desde el panel de administración.
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AdminServicios from "./AdminServicios";

// Se limpia localStorage antes de cada prueba para no heredar servicios de pruebas anteriores.
beforeEach(() => {
  localStorage.clear();
});

describe("AdminServicios - gestión de servicios", () => {

  it("agrega un nuevo servicio y lo muestra en la tabla", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><AdminServicios /></MemoryRouter>);

    // Se rellena el formulario de creación usando getByLabelText con los labels del formulario.
    await usuario.type(screen.getByLabelText(/código/i), "TEST01");
    await usuario.type(screen.getByLabelText(/nombre/i), "Servicio de prueba");

    // getByRole("combobox") apunta específicamente al <select> de categoría.
    // Se usa en lugar de getByLabelText(/categoría/i) porque la página también tiene
    // el texto "Filtrar por categoría" en un heading, lo que causaría ambigüedad.
    await usuario.selectOptions(screen.getByRole("combobox", { name: /^categoría$/i }), "Consultas");

    await usuario.type(screen.getByLabelText(/duración/i), "20 min");
    await usuario.type(screen.getByLabelText(/precio/i), "9000");

    // Se hace clic en "Guardar" para agregar el servicio al estado del componente.
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));

    // Tras guardar, el nombre del nuevo servicio debe aparecer en la tabla de servicios.
    expect(screen.getByText("Servicio de prueba")).toBeInTheDocument();
  });

  it("elimina un servicio y lo quita de la tabla", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><AdminServicios /></MemoryRouter>);

    // La tabla carga los servicios iniciales de servicios.js.
    // getAllByRole obtiene todos los botones "Eliminar" de cada fila.
    const botonesEliminar = screen.getAllByRole("button", { name: /eliminar/i });

    // Se hace clic en el primer botón para eliminar el primer servicio de la lista
    // que corresponde a "Consulta general".
    await usuario.click(botonesEliminar[0]);

    // Tras eliminarlo, el texto "Consulta general" no debe existir en el DOM.
    // queryByText retorna null si no encuentra el elemento (no lanza error como getByText).
    expect(screen.queryByText("Consulta general")).not.toBeInTheDocument();
  });
});
