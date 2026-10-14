import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import MisSolicitudes from "./MisSolicitudes";

const solicitudes = [
  { id: 1, nombre: "Consulta general", categoria: "Consultas" },
];

describe("MisSolicitudes - evento", () => {
  it("llama a onEliminar con el id del servicio al hacer clic en Eliminar", async () => {
    const usuario = userEvent.setup();
    // Función mock para verificar que el componente la invoca con el id correcto
    const onEliminar = vi.fn();
    render(<MisSolicitudes solicitudes={solicitudes} onEliminar={onEliminar} />);

    await usuario.click(screen.getByRole("button", { name: /eliminar/i }));

    expect(onEliminar).toHaveBeenCalledWith(1);
  });
});
