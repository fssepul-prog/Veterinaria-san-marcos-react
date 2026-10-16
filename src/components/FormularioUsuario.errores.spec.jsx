import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioUsuario from "./FormularioUsuario";

describe("FormularioUsuario - validación", () => {
  it("muestra errores en todos los campos obligatorios al enviar el formulario vacío", async () => {
    const usuario = userEvent.setup();
    render(<FormularioUsuario onGuardar={() => {}} />);
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(screen.getByText("Nombre obligatorio")).toBeInTheDocument();
    expect(screen.getByText("Correo obligatorio")).toBeInTheDocument();
    expect(screen.getByText("Teléfono obligatorio")).toBeInTheDocument();
    expect(screen.getByText("Selecciona rol")).toBeInTheDocument();
  });
});
