import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminUsuarios from "./AdminUsuarios";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminUsuarios - cambiar rol", () => {
  it("actualiza el rol del usuario al cambiar la selección", async () => {
    const usuario = userEvent.setup();
    render(<AdminUsuarios />);
    const selectsRol = screen.getAllByRole("combobox");
    await usuario.selectOptions(selectsRol[0], "Recepcionista");
    expect(selectsRol[0]).toHaveValue("Recepcionista");
  });
});
