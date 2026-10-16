import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Agenda from "./Agenda";

describe("Agenda - filtro de día", () => {
  it("muestra los horarios de Sábado y oculta los de Lunes al cambiar de día", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Agenda /></MemoryRouter>);
    await usuario.click(screen.getByRole("button", { name: "Sábado" }));
    expect(screen.getByText("12:00")).toBeInTheDocument();
    expect(screen.queryByText("09:00")).not.toBeInTheDocument();
  });
});
