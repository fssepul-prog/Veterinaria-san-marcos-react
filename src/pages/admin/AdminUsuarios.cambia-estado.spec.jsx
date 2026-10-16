import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminUsuarios from "./AdminUsuarios";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminUsuarios - cambiar estado", () => {
  it("al desactivar un usuario activo el número de botones Desactivar disminuye en uno", async () => {
    const usuario = userEvent.setup();
    render(<AdminUsuarios />);
    const botonesAntes = screen.getAllByRole("button", { name: /desactivar/i });
    await usuario.click(botonesAntes[0]);
    expect(screen.queryAllByRole("button", { name: /desactivar/i })).toHaveLength(
      botonesAntes.length - 1
    );
  });
});
