import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioServicio from "./FormularioServicio";

describe("FormularioServicio - validación", () => {
  it("muestra errores en todos los campos obligatorios al enviar el formulario vacío", async () => {
    const usuario = userEvent.setup();
    render(<FormularioServicio onGuardar={() => {}} />);
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(screen.getByText("Código obligatorio")).toBeInTheDocument();
    expect(screen.getByText("Nombre obligatorio")).toBeInTheDocument();
    expect(screen.getByText("Selecciona categoría")).toBeInTheDocument();
    expect(screen.getByText("Duración obligatoria")).toBeInTheDocument();
    expect(screen.getByText(/ingresa un precio/i)).toBeInTheDocument();
  });
});
