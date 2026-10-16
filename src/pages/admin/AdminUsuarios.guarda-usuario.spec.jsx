import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminUsuarios from "./AdminUsuarios";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminUsuarios - guardar usuario", () => {
  it("agrega un nuevo usuario y lo muestra en la tabla al completar el formulario", async () => {
    const usuario = userEvent.setup();
    render(<AdminUsuarios />);
    await usuario.type(screen.getByLabelText(/nombre/i), "Carlos Vera");
    await usuario.type(screen.getByLabelText(/correo/i), "carlos.vera@test.cl");
    await usuario.type(screen.getByLabelText(/tel/i), "56987654321");
    await usuario.selectOptions(screen.getByLabelText(/rol/i), "Recepcionista");
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(screen.getByText("Carlos Vera")).toBeInTheDocument();
  });
});
