import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TarjetaCita from "./TarjetaCita";

const cita = {
  id: 2,
  mascota: "Luna",
  dueno: "Ana Pérez",
  servicio: "Vacuna antirrábica",
  fecha: "2026-10-16",
  estado: "Confirmada",
};

describe("TarjetaCita - cancelar", () => {
  it("llama a onCancelar con el id de la cita al hacer clic en Cancelar", async () => {
    const onCancelar = vi.fn();
    const usuario = userEvent.setup();
    render(<TarjetaCita cita={cita} onConfirmar={vi.fn()} onCancelar={onCancelar} onReagendar={vi.fn()} />);
    await usuario.click(screen.getByRole("button", { name: /cancelar/i }));
    expect(onCancelar).toHaveBeenCalledWith(2);
  });
});
