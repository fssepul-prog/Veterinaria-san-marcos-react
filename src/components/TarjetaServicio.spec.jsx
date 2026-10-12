// src/components/TarjetaServicio.spec.jsx
// Prueba de renderizado: verifica que el componente muestra correctamente los datos recibidos por props.
import { render, screen } from "@testing-library/react";
// MemoryRouter es necesario porque TarjetaServicio usa <Link> internamente.
// En tests no existe un Router real, por lo que se envuelve el componente en uno simulado.
import { MemoryRouter } from "react-router-dom";
import TarjetaServicio from "./TarjetaServicio";

// Objeto de servicio de prueba que simula la estructura real de servicios.js.
const servicio = {
  id: 1,
  codigo: "SV001",
  nombre: "Consulta general",
  categoria: "Consultas",
  descripcion: "Evaluación completa de la salud de tu mascota.",
  especie: "Perro / Gato",
  duracion: "30 min",
  precio: 15000,
};

describe("TarjetaServicio", () => {

  // Se renderiza el componente con el servicio de prueba y se verifica que cada dato aparezca en el DOM.
  it("muestra nombre, categoría, precio en CLP y ambos botones", () => {
    render(
      <MemoryRouter>
        <TarjetaServicio servicio={servicio} />
      </MemoryRouter>
    );

    // Verifica que el nombre del servicio esté visible en la tarjeta.
    expect(screen.getByText("Consulta general")).toBeInTheDocument();

    // Verifica que la categoría esté visible como etiqueta o badge.
    expect(screen.getByText("Consultas")).toBeInTheDocument();

    // El precio se formatea como "15.000" en CLP; la regex escapa el punto porque es un carácter especial.
    expect(screen.getByText(/15\.000/)).toBeInTheDocument();

    // Verifica que existan los dos enlaces de acción: "Ver detalle" y "Solicitar hora".
    // getByRole("link") busca elementos <a> por su texto accesible.
    expect(screen.getByRole("link", { name: /ver detalle/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /solicitar hora/i })).toBeInTheDocument();
  });
});
