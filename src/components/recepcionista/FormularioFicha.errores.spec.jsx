import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import FormularioFicha from "./FormularioFicha";

const fichaVacia = { dueno: "", mascota: "", fecha: "", motivo: "", diagnostico: "" };

describe("FormularioFicha - validación", () => {
  it("muestra errores en los campos obligatorios al enviar el formulario vacío", async () => {
    const usuario = userEvent.setup();
    const onGuardar = vi.fn();
    render(<FormularioFicha ficha={fichaVacia} onGuardar={onGuardar} />);
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(screen.getByText("Dueño obligatorio")).toBeInTheDocument();
    expect(screen.getByText("Mascota obligatoria")).toBeInTheDocument();
    expect(screen.getByText("Fecha obligatoria")).toBeInTheDocument();
    expect(screen.getByText("Motivo obligatorio")).toBeInTheDocument();
    expect(screen.getByText("Diagnóstico obligatorio")).toBeInTheDocument();
    expect(onGuardar).not.toHaveBeenCalled();
  });
});
