import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TarjetaCita from "./TarjetaCita";

const cita = {
  id: 1,
  mascota: "Firulais",
  dueno: "Juan Pérez",
  servicio: "Consulta general",
  fecha: "10-10-2026",
  estado: "Pendiente",
};

describe("TarjetaCita - eventos", () => {
  it("llama a onConfirmar con el id de la cita al hacer clic en Confirmar", async () => {
    const usuario = userEvent.setup();
    const onConfirmar = vi.fn();
    render(<TarjetaCita cita={cita} onConfirmar={onConfirmar} />);
    await usuario.click(screen.getByRole("button", { name: /confirmar/i }));
    expect(onConfirmar).toHaveBeenCalledWith(1);
  });
});
