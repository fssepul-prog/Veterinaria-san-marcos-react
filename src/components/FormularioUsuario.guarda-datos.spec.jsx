import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import FormularioUsuario from "./FormularioUsuario";

describe("FormularioUsuario - guardado", () => {
  it("llama a onGuardar con los datos cuando todos los campos están completos", async () => {
    const usuario = userEvent.setup();
    const onGuardar = vi.fn();
    render(<FormularioUsuario onGuardar={onGuardar} />);
    await usuario.type(screen.getByLabelText(/^nombre$/i), "Laura Díaz");
    await usuario.type(screen.getByLabelText(/correo/i), "laura@ejemplo.com");
    await usuario.type(screen.getByLabelText(/teléfono/i), "+56912345678");
    await usuario.selectOptions(screen.getByRole("combobox", { name: /rol/i }), "Recepcionista");
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(onGuardar).toHaveBeenCalled();
  });
});
